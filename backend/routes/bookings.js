const express = require('express');
const router = express.Router();
const db = require('../db/init');
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendBookingNotification(booking) {
  if (!process.env.RESEND_API_KEY) {
    console.log('[Email] Skipped: RESEND_API_KEY not set');
    return;
  }

  const toEmail = process.env.NOTIFY_EMAIL || 'Calmariabayvilla@gmail.com';
  console.log('[Email] Sending to:', toEmail);

  const { data, error } = await resend.emails.send({
    from: 'Calmaria Bay Villa <onboarding@resend.dev>',
    to: [toEmail],
    subject: `[Đặt phòng mới] #${booking.id} – ${booking.name} | ${booking.checkin} → ${booking.checkout}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden;">
        <div style="background: #1a7fa8; padding: 24px 32px;">
          <h1 style="color: white; margin: 0; font-size: 20px;">🏖️ Calmaria Bay Villa</h1>
          <p style="color: #b3d9ea; margin: 4px 0 0; font-size: 14px;">Thông báo đặt phòng mới</p>
        </div>
        <div style="padding: 32px;">
          <h2 style="color: #1a7fa8; margin: 0 0 20px; font-size: 18px;">📋 Thông tin đặt phòng #${booking.id}</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px 0; color: #666; font-size: 14px; width: 40%;">Họ tên</td>
              <td style="padding: 10px 0; font-weight: bold; font-size: 14px;">${booking.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px 0; color: #666; font-size: 14px;">Điện thoại</td>
              <td style="padding: 10px 0; font-weight: bold; font-size: 14px;">
                <a href="tel:${booking.phone}" style="color: #1a7fa8;">${booking.phone}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px 0; color: #666; font-size: 14px;">Check-in</td>
              <td style="padding: 10px 0; font-weight: bold; font-size: 14px;">📅 ${booking.checkin}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px 0; color: #666; font-size: 14px;">Check-out</td>
              <td style="padding: 10px 0; font-weight: bold; font-size: 14px;">📅 ${booking.checkout}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px 0; color: #666; font-size: 14px;">Số khách</td>
              <td style="padding: 10px 0; font-size: 14px;">${booking.adults} người lớn${booking.children > 0 ? `, ${booking.children} trẻ em` : ''}</td>
            </tr>
            ${booking.special_request ? `
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 14px; vertical-align: top;">Yêu cầu</td>
              <td style="padding: 10px 0; font-size: 14px;">${booking.special_request}</td>
            </tr>` : ''}
          </table>

          <div style="margin-top: 24px; padding: 16px; background: #f0f7ff; border-radius: 8px; border-left: 4px solid #1a7fa8;">
            <p style="margin: 0; font-size: 13px; color: #555;">
              ⏰ Nhận lúc: <strong>${new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}</strong>
            </p>
          </div>

          <div style="margin-top: 24px; text-align: center;">
            <a href="tel:${booking.phone}"
              style="display: inline-block; padding: 12px 28px; background: #1a7fa8; color: white; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 15px;">
              📞 Gọi lại ngay
            </a>
          </div>
        </div>
        <div style="background: #f8f8f8; padding: 16px 32px; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #999;">Calmaria Bay Villa · 05BT Cảng Quốc Tế Tuần Châu, Hạ Long, Quảng Ninh</p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error('[Email] Resend error:', JSON.stringify(error));
    throw error;
  }
  console.log('[Email] Sent OK, id:', data?.id);
}

// Submit booking
router.post('/', async (req, res) => {
  try {
    const { name, phone, checkin, checkout, adults, children, special_request } = req.body;
    if (!name || !phone || !checkin || !checkout) {
      return res.status(400).json({ error: 'Vui lòng điền đầy đủ thông tin.' });
    }
    const result = db.prepare(`
      INSERT INTO bookings (name, phone, checkin, checkout, adults, children, special_request)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(name, phone, checkin, checkout, adults || 1, children || 0, special_request || '');

    sendBookingNotification({
      id: result.lastInsertRowid, name, phone, checkin, checkout,
      adults: adults || 1, children: children || 0, special_request: special_request || ''
    }).catch(err => console.error('Resend error:', err.message));

    res.json({ success: true, id: result.lastInsertRowid, message: 'Đặt phòng thành công! Chúng tôi sẽ liên hệ xác nhận sớm.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Có lỗi xảy ra. Vui lòng thử lại.' });
  }
});

// Get all bookings (admin)
router.get('/', (req, res) => {
  const bookings = db.prepare('SELECT * FROM bookings ORDER BY created_at DESC').all();
  res.json(bookings);
});

// Update booking status
router.patch('/:id', (req, res) => {
  const { status } = req.body;
  db.prepare('UPDATE bookings SET status = ? WHERE id = ?').run(status, req.params.id);
  res.json({ success: true });
});

module.exports = router;
