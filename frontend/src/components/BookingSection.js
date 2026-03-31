'use client';
import { useLang } from '@/context/LanguageContext';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Phone, User, MessageSquare, CheckCircle } from 'lucide-react';

const PRICE_MAP = {
  weekend: 22200000,
  weekday: 16650000,
  holiday: 30200000,
};

const T = {
  vi: {
    title: 'Đặt nguyên căn',
    sub: 'Điền thông tin để gửi yêu cầu thuê nguyên căn. Chúng tôi sẽ xác nhận trong vòng 24 giờ.',
    checkin: 'Ngày nhận phòng',
    checkout: 'Ngày trả phòng',
    adults: 'Người lớn',
    children: 'Trẻ em',
    name: 'Họ và tên',
    namePlaceholder: 'Nguyễn Văn A',
    phone: 'Số điện thoại',
    phonePlaceholder: '0337 866 206',
    dayType: 'Loại ngày',
    priceTypes: [
      { key: 'weekday', label: 'Ngày thường (T2-T5)', price: '16,650,000' },
      { key: 'weekend', label: 'Cuối tuần (T6-CN)', price: '22,200,000' },
      { key: 'holiday', label: 'Dịp lễ', price: '30,200,000' },
    ],
    special: 'Yêu cầu đặc biệt',
    specialPlaceholder: 'Nhập yêu cầu nếu có...',
    submit: 'Gửi yêu cầu đặt',
    submitting: 'Đang gửi...',
    zaloBtn: 'Liên hệ qua Zalo',
    successTitle: 'Đã nhận yêu cầu!',
    successDesc: 'Chúng tôi đã nhận yêu cầu thuê nguyên căn của bạn và sẽ liên hệ xác nhận qua điện thoại/Zalo sớm nhất.',
    bookAnother: 'Gửi yêu cầu khác',
    summaryTitle: 'Tóm tắt yêu cầu',
    villaType: 'Loại villa',
    villaVal: 'Nguyên căn (10 phòng)',
    nights: 'Số đêm',
    nightUnit: ' đêm',
    guests: 'Khách',
    adultsUnit: ' người lớn, ',
    childrenUnit: ' trẻ em',
    total: 'Tổng dự kiến',
    totalNote: '* Giá cuối cùng sẽ được xác nhận qua điện thoại',
    contact: 'Liên hệ trực tiếp',
    errFill: 'Vui lòng điền đầy đủ thông tin bắt buộc.',
    errDate: 'Ngày trả phòng phải sau ngày nhận phòng.',
    errServer: 'Không thể kết nối server. Vui lòng thử lại hoặc liên hệ qua Zalo/điện thoại.',
  },
  en: {
    title: 'Book Full Villa',
    sub: 'Fill in your details to send a full villa rental request. We will confirm within 24 hours.',
    checkin: 'Check-in Date',
    checkout: 'Check-out Date',
    adults: 'Adults',
    children: 'Children',
    name: 'Full Name',
    namePlaceholder: 'John Smith',
    phone: 'Phone Number',
    phonePlaceholder: '0337 866 206',
    dayType: 'Day Type',
    priceTypes: [
      { key: 'weekday', label: 'Weekday (Mon-Thu)', price: '16,650,000' },
      { key: 'weekend', label: 'Weekend (Fri-Sun)', price: '22,200,000' },
      { key: 'holiday', label: 'Public Holiday', price: '30,200,000' },
    ],
    special: 'Special Requests',
    specialPlaceholder: 'Enter any special requests...',
    submit: 'Send Request',
    submitting: 'Sending...',
    zaloBtn: 'Contact via Zalo',
    successTitle: 'Request Received!',
    successDesc: 'We have received your full villa rental request and will contact you to confirm via phone/Zalo as soon as possible.',
    bookAnother: 'Send Another Request',
    summaryTitle: 'Request Summary',
    villaType: 'Villa Type',
    villaVal: 'Full Villa (10 rooms)',
    nights: 'Nights',
    nightUnit: ' night(s)',
    guests: 'Guests',
    adultsUnit: ' adult(s), ',
    childrenUnit: ' child(ren)',
    total: 'Estimated Total',
    totalNote: '* Final price will be confirmed via phone',
    contact: 'Direct Contact',
    errFill: 'Please fill in all required fields.',
    errDate: 'Check-out date must be after check-in date.',
    errServer: 'Could not connect to server. Please try again or contact us via Zalo/phone.',
  },
};

export default function BookingSection() {
  const { lang } = useLang();
  const t = T[lang];

  const [form, setForm] = useState({
    name: '', phone: '', checkin: '', checkout: '',
    adults: 2, children: 0, special_request: '', priceType: 'weekend'
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const nights = (() => {
    if (!form.checkin || !form.checkout) return 0;
    const d = (new Date(form.checkout) - new Date(form.checkin)) / 86400000;
    return d > 0 ? d : 0;
  })();

  const totalPrice = nights * PRICE_MAP[form.priceType];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.name || !form.phone || !form.checkin || !form.checkout) {
      setError(t.errFill);
      return;
    }
    if (nights <= 0) {
      setError(t.errDate);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setForm({ name: '', phone: '', checkin: '', checkout: '', adults: 2, children: 0, special_request: '', priceType: 'weekend' });
      } else {
        setError(data.error || t.errServer);
      }
    } catch {
      setError(t.errServer);
    }
    setLoading(false);
  };

  const zaloLink = `https://zalo.me/0337866206?text=${encodeURIComponent(`Xin chào, tôi muốn đặt villa từ ${form.checkin || '...'} đến ${form.checkout || '...'}. Tên: ${form.name || '...'}, SĐT: ${form.phone || '...'}`)}`

  const inputCls = "w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ocean-300 focus:border-ocean-400 outline-none transition text-gray-700 bg-white";
  const labelCls = "block text-sm font-medium text-gray-600 mb-2";

  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-white to-ocean-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-8 bg-ocean-500 rounded-full" />
            <span className="text-ocean-500 text-sm font-semibold uppercase tracking-wider">Booking</span>
            <div className="h-0.5 w-8 bg-ocean-500 rounded-full" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">{t.sub}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {success ? (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-10 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={44} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-3">{t.successTitle}</h3>
                <p className="text-green-700 mb-6 leading-relaxed">{t.successDesc}</p>
                <button onClick={() => setSuccess(false)}
                  className="px-8 py-3 bg-ocean-500 text-white rounded-full font-semibold hover:bg-ocean-600 transition-colors shadow-md">
                  {t.bookAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg shadow-gray-100/50">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>
                      <Calendar size={13} className="inline mr-1.5 text-ocean-500" />{t.checkin} *
                    </label>
                    <input type="date" value={form.checkin}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={e => setForm({ ...form, checkin: e.target.value })}
                      className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>
                      <Calendar size={13} className="inline mr-1.5 text-ocean-500" />{t.checkout} *
                    </label>
                    <input type="date" value={form.checkout}
                      min={form.checkin || new Date().toISOString().split('T')[0]}
                      onChange={e => setForm({ ...form, checkout: e.target.value })}
                      className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>
                      <Users size={13} className="inline mr-1.5 text-ocean-500" />{t.adults}
                    </label>
                    <select value={form.adults} onChange={e => setForm({ ...form, adults: +e.target.value })}
                      className={inputCls}>
                      {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(n =>
                        <option key={n} value={n}>{n} {t.adults.toLowerCase()}</option>
                      )}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>
                      <Users size={13} className="inline mr-1.5 text-ocean-500" />{t.children}
                    </label>
                    <select value={form.children} onChange={e => setForm({ ...form, children: +e.target.value })}
                      className={inputCls}>
                      {[0,1,2,3,4,5,6,7,8,9,10].map(n =>
                        <option key={n} value={n}>{n} {t.children.toLowerCase()}</option>
                      )}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>
                      <User size={13} className="inline mr-1.5 text-ocean-500" />{t.name} *
                    </label>
                    <input type="text" placeholder={t.namePlaceholder} value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>
                      <Phone size={13} className="inline mr-1.5 text-ocean-500" />{t.phone} *
                    </label>
                    <input type="tel" placeholder={t.phonePlaceholder} value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className={inputCls} />
                  </div>
                </div>

                {/* Price type */}
                <div className="mt-5">
                  <label className={labelCls}>{t.dayType}</label>
                  <div className="flex flex-wrap gap-2.5">
                    {t.priceTypes.map(pt => (
                      <button type="button" key={pt.key}
                        onClick={() => setForm({ ...form, priceType: pt.key })}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                          form.priceType === pt.key
                            ? 'bg-ocean-500 border-ocean-500 text-white shadow-sm'
                            : 'border-gray-200 text-gray-600 hover:border-ocean-300 hover:text-ocean-600'
                        }`}>
                        {pt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Special request */}
                <div className="mt-5">
                  <label className={labelCls}>
                    <MessageSquare size={13} className="inline mr-1.5 text-ocean-500" />{t.special}
                  </label>
                  <textarea rows={3} placeholder={t.specialPlaceholder} value={form.special_request}
                    onChange={e => setForm({ ...form, special_request: e.target.value })}
                    className={`${inputCls} resize-none`} />
                </div>

                {error && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">⚠</span>
                    {error}
                  </div>
                )}

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <button type="submit" disabled={loading}
                    className="flex-1 py-4 bg-gradient-to-r from-ocean-500 to-ocean-600 text-white rounded-xl font-semibold hover:from-ocean-600 hover:to-ocean-700 transition-all disabled:opacity-60 shadow-md hover:shadow-lg">
                    {loading ? t.submitting : t.submit}
                  </button>
                  <a href={zaloLink} target="_blank" rel="noopener noreferrer"
                    className="flex-1 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all text-center shadow-md">
                    {t.zaloBtn}
                  </a>
                </div>
              </form>
            )}
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg shadow-gray-100/50 sticky top-24">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-5">{t.summaryTitle}</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">{t.villaType}</span>
                  <span className="font-semibold text-gray-700">{t.villaVal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Check-in</span>
                  <span className="font-semibold text-gray-700">{form.checkin || '—'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Check-out</span>
                  <span className="font-semibold text-gray-700">{form.checkout || '—'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">{t.nights}</span>
                  <span className="font-semibold text-gray-700">{nights > 0 ? `${nights}${t.nightUnit}` : '—'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">{t.guests}</span>
                  <span className="font-semibold text-gray-700 text-right">{form.adults}{t.adultsUnit}{form.children}{t.childrenUnit}</span>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">{t.total}</span>
                    <span className="font-bold text-xl text-ocean-700">
                      {nights > 0 ? totalPrice.toLocaleString('vi-VN') + ' ₫' : '—'}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">{t.totalNote}</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-br from-ocean-50 to-sand-50 rounded-2xl border border-ocean-100">
                <p className="text-sm font-semibold text-gray-700 mb-3">{t.contact}</p>
                <a href="tel:0337866206" className="flex items-center gap-2 text-ocean-600 font-medium text-sm mb-2 hover:underline">
                  📞 0337 866 206
                </a>
                <a href="mailto:calmariabayvilla@gmail.com" className="flex items-center gap-2 text-ocean-600 font-medium text-sm hover:underline">
                  ✉️ calmariabayvilla@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
