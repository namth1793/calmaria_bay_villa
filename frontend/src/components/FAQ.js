'use client';
import { useLang } from '@/context/LanguageContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = {
  vi: [
    { q: 'Tôi có thể đặt phòng như thế nào?', a: 'Bạn có thể đặt phòng qua form online trên website, gọi điện/Zalo số 0337 866 206, hoặc email calmariabayvilla@gmail.com. Chúng tôi sẽ xác nhận trong vòng 24 giờ.' },
    { q: 'Chính sách hủy phòng ra sao?', a: 'Hủy trước 7 ngày: hoàn tiền 100%. Hủy trước 3-7 ngày: hoàn 50%. Hủy trong vòng 3 ngày trước ngày nhận phòng: không hoàn tiền. Vui lòng liên hệ để biết thêm chi tiết.' },
    { q: 'Check-in và Check-out khi nào?', a: 'Check-in từ 14:00. Check-out trước 12:00 (trưa). Early check-in và late check-out có thể được hỗ trợ tùy thuộc vào lịch đặt phòng, vui lòng liên hệ trước.' },
    { q: 'Villa có phù hợp cho sự kiện không?', a: 'Calmaria Bay Villa rất phù hợp cho tiệc gia đình, sinh nhật, kỷ niệm, team building và các sự kiện nhỏ. Liên hệ để được tư vấn gói sự kiện riêng.' },
    { q: 'Villa có những tiện ích gì?', a: 'Villa có hồ bơi riêng, sân bóng rổ, sân bóng đá mini, vườn rau, xe điện, xe đạp, bãi biển riêng 30m, bếp đầy đủ, Wifi tốc độ cao và nhiều tiện ích khác.' },
    { q: 'Có nhận đặt phòng lẻ không?', a: 'Hiện tại villa nhận cả đặt phòng lẻ lẫn thuê nguyên căn (toàn bộ 10 phòng). Liên hệ để được tư vấn lựa chọn phù hợp nhất với nhu cầu của bạn.' },
  ],
  en: [
    { q: 'How can I make a booking?', a: 'You can book via the online form on our website, call/Zalo us at 0337 866 206, or email calmariabayvilla@gmail.com. We will confirm your booking within 24 hours.' },
    { q: 'What is the cancellation policy?', a: 'Cancel 7+ days in advance: 100% refund. Cancel 3–7 days in advance: 50% refund. Cancel within 3 days of check-in: no refund. Please contact us for more details.' },
    { q: 'What are the check-in and check-out times?', a: 'Check-in from 14:00. Check-out before 12:00 (noon). Early check-in and late check-out may be available depending on the booking schedule — please contact us in advance.' },
    { q: 'Is the villa suitable for events?', a: 'Calmaria Bay Villa is perfect for family gatherings, birthday parties, anniversaries, corporate team building, and intimate events. Contact us for custom event packages.' },
    { q: 'What amenities does the villa offer?', a: 'The villa features a private pool, basketball court, mini football field, vegetable garden, electric buggies, bicycles, a private beach 30m away, fully equipped kitchen, high-speed WiFi, and much more.' },
    { q: 'Can I book individual rooms?', a: 'Yes, we accept both individual room bookings and full-villa rentals (all 10 rooms). Contact us to find the best option for your needs.' },
  ],
};

const T = {
  vi: { title: 'Hỏi & Đáp', sub: 'Câu trả lời cho những thắc mắc thường gặp' },
  en: { title: 'Frequently Asked Questions', sub: 'Answers to common questions about our villa' },
};

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const { lang } = useLang();
  const t = T[lang];
  const faqs = FAQS[lang];

  return (
    <section id="faq" className="py-24 bg-sand-50 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-8 bg-ocean-500 rounded-full" />
            <span className="text-ocean-500 text-sm font-semibold uppercase tracking-wider">FAQ</span>
            <div className="h-0.5 w-8 bg-ocean-500 rounded-full" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-gray-500 text-lg">{t.sub}</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={`${lang}-${i}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:border-ocean-200 transition-colors"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-ocean-50/50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-semibold pr-4 transition-colors ${open === i ? 'text-ocean-700' : 'text-gray-800'}`}>
                  {faq.q}
                </span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                  open === i ? 'bg-ocean-500 text-white rotate-180' : 'bg-gray-100 text-gray-400'
                }`}>
                  <ChevronDown size={16} />
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-500 leading-relaxed text-sm border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
