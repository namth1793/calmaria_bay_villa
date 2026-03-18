'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Trương Hoa', avatar: '👩', date: 'Nov 2025', rating: 5,
    text: 'Villa rất đẹp và sang trọng. Hồ bơi riêng tuyệt vời, không gian yên tĩnh. Gia đình chúng tôi rất hài lòng với kỳ nghỉ cuối tuần tại đây. Nhân viên phục vụ nhiệt tình. Sẽ quay lại lần sau!'
  },
  {
    name: 'Bảo', avatar: '👨', date: 'Nov 2025', rating: 5,
    text: 'Không gian villa đẹp, view biển tuyệt, ăn ở thoải mái. Nhà có đầy đủ tiện nghi, phù hợp cho nhóm bạn hoặc gia đình lớn. Giá cũng hợp lý với chất lượng.'
  },
  {
    name: 'T.B', avatar: '🧑', date: 'Oct 2025', rating: 5,
    text: 'Lần đầu tiên thuê nguyên căn villa ở Hạ Long và thực sự ấn tượng. Bãi biển riêng chỉ cách 30m, buổi sáng ra ngắm biển rất tuyệt. Xe điện trong khu villa tiện lợi lắm.'
  },
  {
    name: 'Minh Châu', avatar: '👩', date: 'Sep 2025', rating: 5,
    text: 'Đặt villa cho nhóm 20 người dịp lễ 2/9. Không gian rộng rãi, đủ chỗ cho mọi người. Sân bóng rổ và bóng đá mini cho các bạn trẻ rất thú vị. Nhà rất sạch sẽ.'
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className={i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'} />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Đánh giá từ khách hàng</h2>
          <p className="text-gray-500">Trải nghiệm thực tế từ những khách đã lưu trú tại villa</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-gray-800 text-lg">4.9</span>
            <span className="text-gray-500 text-sm">/ 5.0 (50+ đánh giá)</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-sand-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sand-100 rounded-full flex items-center justify-center text-xl">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm">{review.name}</div>
                  <div className="text-xs text-gray-400">{review.date}</div>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className="text-gray-600 text-sm leading-relaxed mt-3">{review.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
