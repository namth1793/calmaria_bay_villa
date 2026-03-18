'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Tôi có thể đặt phòng như thế nào?',
    a: 'Bạn có thể đặt phòng qua form online trên website, gọi điện/Zalo số 0337 866 206, hoặc email calmariabayvilla@gmail.com. Chúng tôi sẽ xác nhận trong vòng 24 giờ.'
  },
  {
    q: 'Chính sách hủy phòng ra sao?',
    a: 'Hủy trước 7 ngày: hoàn tiền 100%. Hủy trước 3-7 ngày: hoàn 50%. Hủy trong vòng 3 ngày trước ngày nhận phòng: không hoàn tiền. Vui lòng liên hệ để biết thêm chi tiết.'
  },
  {
    q: 'Check-in và Check-out khi nào?',
    a: 'Check-in từ 14:00. Check-out trước 12:00 (trưa). Early check-in và late check-out có thể được hỗ trợ tùy thuộc vào lịch đặt phòng, vui lòng liên hệ trước.'
  },
  {
    q: 'Villa có phù hợp cho sự kiện không?',
    a: 'Calmaria Bay Villa rất phù hợp cho tiệc gia đình, sinh nhật, kỷ niệm, team building và các sự kiện nhỏ. Liên hệ để được tư vấn gói sự kiện riêng.'
  },
  {
    q: 'Villa có những tiện ích gì?',
    a: 'Villa có hồ bơi riêng, sân bóng rổ, sân bóng đá mini, vườn rau, xe điện, xe đạp, bãi biển riêng 30m, bếp đầy đủ, Wifi tốc độ cao và nhiều tiện ích khác.'
  },
  {
    q: 'Có nhận đặt phòng lẻ không?',
    a: 'Hiện tại villa chỉ nhận thuê nguyên căn (toàn bộ 10 phòng), chưa nhận đặt phòng lẻ. Điều này đảm bảo sự riêng tư tuyệt đối cho khách thuê.'
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-20 bg-sand-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Hỏi & Đáp</h2>
          <p className="text-gray-500">Câu trả lời cho những thắc mắc thường gặp</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white rounded-2xl shadow-sm border border-sand-100 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-sand-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-gray-800 pr-4">{faq.q}</span>
                <ChevronDown size={20} className={`text-gray-400 flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
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
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm border-t border-sand-100 pt-4">
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
