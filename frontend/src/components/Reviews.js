'use client';
import { useLang } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const REVIEWS = {
  vi: [
    { name: 'Trương Hoa', avatar: '👩', date: 'Tháng 3, 2026', rating: 5, text: 'Villa rất đẹp và sang trọng. Hồ bơi riêng tuyệt vời, không gian yên tĩnh. Gia đình chúng tôi rất hài lòng với kỳ nghỉ cuối tuần tại đây. Nhân viên phục vụ nhiệt tình. Sẽ quay lại lần sau!' },
    { name: 'Bảo', avatar: '👨', date: 'Tháng 3, 2026', rating: 5, text: 'Không gian villa đẹp, view biển tuyệt, ăn ở thoải mái. Nhà có đầy đủ tiện nghi, phù hợp cho nhóm bạn hoặc gia đình lớn. Giá cũng hợp lý với chất lượng.' },
    { name: 'T.B', avatar: '🧑', date: 'Tháng 2, 2026', rating: 5, text: 'Lần đầu tiên thuê nguyên căn villa ở Hạ Long và thực sự ấn tượng. Bãi biển riêng chỉ cách 30m, buổi sáng ra ngắm biển rất tuyệt. Xe điện trong khu villa tiện lợi lắm.' },
    { name: 'Minh Châu', avatar: '👩', date: 'Tháng 2, 2026', rating: 5, text: 'Đặt villa cho nhóm 20 người dịp Tết. Không gian rộng rãi, đủ chỗ cho mọi người. Sân bóng rổ và bóng đá mini cho các bạn trẻ rất thú vị. Nhà rất sạch sẽ.' },
  ],
  en: [
    { name: 'Truong Hoa', avatar: '👩', date: 'March 2026', rating: 5, text: 'The villa is absolutely beautiful and luxurious. The private pool is amazing, and the peaceful surroundings were perfect. Our family had a wonderful weekend here. Staff were very attentive. Will definitely return!' },
    { name: 'Bao', avatar: '👨', date: 'March 2026', rating: 5, text: 'The villa is stunning with breathtaking sea views and very comfortable. Fully equipped with everything you need — perfect for a large group of friends or family. Great value for the quality.' },
    { name: 'T.B', avatar: '🧑', date: 'February 2026', rating: 5, text: 'First time renting a full villa in Ha Long and truly impressed. The private beach is just 30m away — incredible for a morning stroll. The electric buggies around the compound are a great touch.' },
    { name: 'Minh Chau', avatar: '👩', date: 'February 2026', rating: 5, text: 'Booked the villa for a group of 20 for the Tet holiday. Spacious enough for everyone to enjoy. The basketball court and mini football field were a big hit with the younger guests. Very clean!' },
  ],
};

const T = {
  vi: { title: 'Đánh giá từ khách hàng', sub: 'Trải nghiệm thực tế từ những khách đã lưu trú tại villa', total: '50+ đánh giá' },
  en: { title: 'Guest Reviews', sub: 'Real experiences from guests who have stayed at the villa', total: '50+ reviews' },
};

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={13} className={i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200 fill-gray-100'} />
      ))}
    </div>
  );
}

export default function Reviews() {
  const { lang } = useLang();
  const t = T[lang];
  const reviews = REVIEWS[lang];

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-white to-sand-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-8 bg-amber-400 rounded-full" />
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-wider">Reviews</span>
            <div className="h-0.5 w-8 bg-amber-400 rounded-full" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-gray-500 text-lg mb-5">{t.sub}</p>
          <div className="inline-flex items-center gap-3 bg-amber-50 border border-amber-100 px-5 py-2.5 rounded-full">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-gray-800">4.9</span>
            <span className="text-gray-500 text-sm">/ 5.0 ({t.total})</span>
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
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:-translate-y-1 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-ocean-100 group-hover:text-ocean-200 transition-colors">
                <Quote size={28} />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-sand-100 to-ocean-50 rounded-full flex items-center justify-center text-xl">
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
