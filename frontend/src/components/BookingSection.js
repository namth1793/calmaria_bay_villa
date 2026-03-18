'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Phone, User, MessageSquare, CheckCircle } from 'lucide-react';

const PRICE_MAP = {
  weekend: 22200000,
  weekday: 16650000,
  holiday: 30192000,
};

export default function BookingSection() {
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
      setError('Vui lòng điền đầy đủ thông tin bắt buộc.');
      return;
    }
    if (nights <= 0) {
      setError('Ngày trả phòng phải sau ngày nhận phòng.');
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
        setError(data.error || 'Có lỗi xảy ra.');
      }
    } catch {
      setError('Không thể kết nối server. Vui lòng thử lại hoặc liên hệ qua Zalo/điện thoại.');
    }
    setLoading(false);
  };

  const zaloLink = `https://zalo.me/0337866206?text=${encodeURIComponent(`Xin chào, tôi muốn đặt villa từ ${form.checkin || '...'} đến ${form.checkout || '...'}. Tên: ${form.name || '...'}, SĐT: ${form.phone || '...'}`)}`

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Đặt phòng trực tuyến</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Điền thông tin để gửi yêu cầu đặt phòng. Chúng tôi sẽ xác nhận trong vòng 24 giờ.
          </p>
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
              <div className="bg-green-50 border border-green-200 rounded-3xl p-10 text-center">
                <CheckCircle size={60} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-2">Đặt phòng thành công!</h3>
                <p className="text-green-700 mb-6">Chúng tôi đã nhận yêu cầu của bạn và sẽ liên hệ xác nhận qua điện thoại/Zalo sớm nhất.</p>
                <button onClick={() => setSuccess(false)}
                  className="px-8 py-3 bg-ocean-500 text-white rounded-full font-semibold hover:bg-ocean-600 transition-colors">
                  Đặt phòng khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-sand-200 rounded-3xl p-8 shadow-sm">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Check-in */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar size={14} className="inline mr-1" />Ngày nhận phòng *
                    </label>
                    <input type="date" value={form.checkin}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={e => setForm({ ...form, checkin: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ocean-300 focus:border-ocean-400 outline-none transition text-gray-700" />
                  </div>
                  {/* Check-out */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar size={14} className="inline mr-1" />Ngày trả phòng *
                    </label>
                    <input type="date" value={form.checkout}
                      min={form.checkin || new Date().toISOString().split('T')[0]}
                      onChange={e => setForm({ ...form, checkout: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ocean-300 focus:border-ocean-400 outline-none transition text-gray-700" />
                  </div>
                  {/* Adults */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Users size={14} className="inline mr-1" />Người lớn
                    </label>
                    <select value={form.adults} onChange={e => setForm({ ...form, adults: +e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ocean-300 outline-none text-gray-700">
                      {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} người lớn</option>)}
                    </select>
                  </div>
                  {/* Children */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Users size={14} className="inline mr-1" />Trẻ em
                    </label>
                    <select value={form.children} onChange={e => setForm({ ...form, children: +e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ocean-300 outline-none text-gray-700">
                      {[0,1,2,3,4,5].map(n => <option key={n} value={n}>{n} trẻ em</option>)}
                    </select>
                  </div>
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User size={14} className="inline mr-1" />Họ và tên *
                    </label>
                    <input type="text" placeholder="Nguyễn Văn A" value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ocean-300 focus:border-ocean-400 outline-none transition" />
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone size={14} className="inline mr-1" />Số điện thoại *
                    </label>
                    <input type="tel" placeholder="0337 866 206" value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ocean-300 focus:border-ocean-400 outline-none transition" />
                  </div>
                </div>
                {/* Price type */}
                <div className="mt-5">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loại ngày</label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { key: 'weekday', label: 'Ngày thường (T2-T5)', price: '16,650,000' },
                      { key: 'weekend', label: 'Cuối tuần (T6-CN)', price: '22,200,000' },
                      { key: 'holiday', label: 'Dịp lễ', price: '30,192,000' },
                    ].map(pt => (
                      <button type="button" key={pt.key}
                        onClick={() => setForm({ ...form, priceType: pt.key })}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                          form.priceType === pt.key
                            ? 'bg-ocean-500 border-ocean-500 text-white'
                            : 'border-gray-200 text-gray-600 hover:border-ocean-300'
                        }`}>
                        {pt.label}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Special request */}
                <div className="mt-5">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare size={14} className="inline mr-1" />Yêu cầu đặc biệt
                  </label>
                  <textarea rows={3} placeholder="Nhập yêu cầu nếu có..." value={form.special_request}
                    onChange={e => setForm({ ...form, special_request: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ocean-300 focus:border-ocean-400 outline-none transition resize-none" />
                </div>

                {error && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">{error}</div>
                )}

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <button type="submit" disabled={loading}
                    className="flex-1 py-4 bg-ocean-500 text-white rounded-xl font-semibold hover:bg-ocean-600 transition-colors disabled:opacity-60">
                    {loading ? 'Đang gửi...' : 'Đặt phòng ngay'}
                  </button>
                  <a href={zaloLink} target="_blank" rel="noopener noreferrer"
                    className="flex-1 py-4 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors text-center">
                    Liên hệ qua Zalo
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
            <div className="bg-sand-50 rounded-3xl p-6 border border-sand-200 sticky top-24">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-5">Tóm tắt đặt phòng</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Loại villa</span>
                  <span className="font-semibold text-gray-800">Nguyên căn (10 phòng)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Check-in</span>
                  <span className="font-semibold text-gray-800">{form.checkin || '—'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Check-out</span>
                  <span className="font-semibold text-gray-800">{form.checkout || '—'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Số đêm</span>
                  <span className="font-semibold text-gray-800">{nights} đêm</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Khách</span>
                  <span className="font-semibold text-gray-800">{form.adults} người lớn, {form.children} trẻ em</span>
                </div>
                <div className="border-t border-sand-200 pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Tổng dự kiến</span>
                    <span className="font-bold text-xl text-ocean-700">
                      {nights > 0 ? totalPrice.toLocaleString('vi-VN') + ' VNĐ' : '—'}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">* Giá cuối cùng sẽ được xác nhận qua điện thoại</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-2xl border border-sand-100">
                <p className="text-sm font-semibold text-gray-700 mb-3">Liên hệ trực tiếp</p>
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
