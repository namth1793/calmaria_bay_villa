'use client';
import { useLang } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const T = {
  vi: {
    title: 'Về Calmaria Bay Villa',
    p1: 'Biệt thự nghỉ dưỡng sang trọng tọa lạc tại Tuần Châu, Hạ Long – nơi hội tụ đầy đủ tiện ích cho một kỳ nghỉ trọn vẹn. Sở hữu hồ bơi riêng trong xanh, khu vườn hoa rực rỡ, vườn rau xanh mát cùng không gian yên bình, thư thái.',
    p2: 'Không chỉ là nơi nghỉ dưỡng, villa còn mang đến những trải nghiệm sống động với sân bóng rổ chuyên nghiệp, sân bóng mini, xe điện và xe đạp dạo quanh khuôn viên. Tất cả tạo nên một không gian lý tưởng để tận hưởng những khoảnh khắc đáng nhớ bên gia đình và người thân.',
    features: ['2,000m² diện tích', 'View vịnh Hạ Long', 'Phù hợp nhóm lớn', '4.9/5 đánh giá'],
    more: 'Liên hệ ngay',
  },
  en: {
    title: 'About Calmaria Bay Villa',
    p1: 'A luxury resort villa nestled in Tuan Chau, Ha Long – a destination complete with all the amenities for a truly fulfilling retreat. Featuring a crystal-clear private pool, a vibrant flower garden, a lush vegetable garden, and a serene, tranquil atmosphere.',
    p2: 'More than just a place to rest, the villa offers dynamic activities including a professional basketball court, a mini football field, electric buggies and bicycles to explore the grounds — creating the perfect space for unforgettable moments with family and loved ones.',
    features: ['2,000m² total area', 'Ha Long Bay view', 'Perfect for groups', '4.9/5 rating'],
    more: 'Contact Us',
  },
};

export default function About() {
  const { lang } = useLang();
  const t = T[lang];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-sand-50/50 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-8 bg-ocean-500 rounded-full" />
            <span className="text-ocean-500 text-sm font-semibold uppercase tracking-wider">Calmaria Bay</span>
            <div className="h-0.5 w-8 bg-ocean-500 rounded-full" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {t.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-5 text-gray-500 leading-relaxed text-center text-lg mb-12"
        >
          <p>{t.p1}</p>
          <p>{t.p2}</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: '🏠', label: t.features[0] },
            { icon: '🌊', label: t.features[1] },
            { icon: '👨‍👩‍👧‍👦', label: t.features[2] },
            { icon: '⭐', label: t.features[3] },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center gap-2 bg-gradient-to-br from-sand-50 to-ocean-50/30 rounded-2xl p-5 border border-sand-100 text-center"
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <a href="#booking"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-ocean-400 text-ocean-600 rounded-full font-semibold hover:bg-ocean-50 transition-colors group">
            {t.more}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
