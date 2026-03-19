'use client';
import { useLang } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

const T = {
  vi: {
    title: 'Về Calmaria Bay Villa',
    years: 'Năm hoạt động',
    p1: 'Calmaria Bay Villa là điểm đến nghỉ dưỡng sang trọng tọa lạc tại Cảng Quốc Tế Tuần Châu, Hạ Long — một trong những viên ngọc quý của du lịch Quảng Ninh.',
    p2: 'Chúng tôi cung cấp dịch vụ thuê nguyên căn villa với đầy đủ tiện nghi cao cấp: hồ bơi riêng tư, vườn cây xanh mát, bãi biển riêng, và không gian yên tĩnh lý tưởng cho gia đình, nhóm bạn hoặc sự kiện đặc biệt.',
    p3: 'Với 10 phòng sang trọng và sức chứa lên đến 30-40 người, Calmaria Bay Villa là lựa chọn hoàn hảo cho các kỳ nghỉ cuối tuần, tiệc gia đình, sinh nhật, hay team building doanh nghiệp.',
    features: ['500m² diện tích', 'View vịnh Hạ Long', 'Phù hợp nhóm lớn', '4.9/5 đánh giá'],
    more: 'Liên hệ ngay →',
  },
  en: {
    title: 'About Calmaria Bay Villa',
    years: 'Years of Operation',
    p1: 'Calmaria Bay Villa is a luxury resort destination located at Tuan Chau International Port, Ha Long — one of the most treasured gems of Quang Ninh tourism.',
    p2: 'We offer full-villa rental services with premium amenities: a private pool, lush tropical gardens, a private beach, and a serene setting ideal for families, groups, or special events.',
    p3: 'With 10 elegant rooms accommodating up to 30-40 guests, Calmaria Bay Villa is the perfect choice for weekend getaways, family reunions, birthday parties, or corporate team building.',
    features: ['500m² total area', 'Ha Long Bay view', 'Perfect for groups', '4.9/5 rating'],
    more: 'Contact Us →',
  },
};

export default function About() {
  const { lang } = useLang();
  const t = T[lang];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-sand-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-ocean-200/30">
                <Image
                  src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=900&auto=format&fit=crop"
                  alt="Về Calmaria Bay Villa"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-ocean-500 to-ocean-700 text-white rounded-2xl p-5 shadow-xl"
              >
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm text-ocean-100">{t.years}</div>
              </motion.div>
              {/* Decorative border */}
              <div className="absolute -inset-3 rounded-[2rem] border-2 border-dashed border-ocean-100 -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-8 bg-ocean-500 rounded-full" />
              <span className="text-ocean-500 text-sm font-semibold uppercase tracking-wider">Calmaria Bay</span>
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t.title}
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-8">
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
                  className="flex items-center gap-3 bg-gradient-to-br from-sand-50 to-ocean-50/30 rounded-xl p-4 border border-sand-100"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <a href="#booking" className="mt-8 inline-flex items-center gap-2 text-ocean-600 font-semibold hover:text-ocean-700 transition-colors group">
              {t.more}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
