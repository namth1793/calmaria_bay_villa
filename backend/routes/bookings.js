const express = require('express');
const router = express.Router();
const db = require('../db/init');

// Submit booking
router.post('/', (req, res) => {
  try {
    const { name, phone, checkin, checkout, adults, children, special_request } = req.body;
    if (!name || !phone || !checkin || !checkout) {
      return res.status(400).json({ error: 'Vui lòng điền đầy đủ thông tin.' });
    }
    const stmt = db.prepare(`
      INSERT INTO bookings (name, phone, checkin, checkout, adults, children, special_request)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);
    const result = stmt.run(name, phone, checkin, checkout, adults || 1, children || 0, special_request || '');
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
