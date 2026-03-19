'use client';
import { useLang } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const AMENITIES = {
  vi: [
    { icon: '🏊', title: 'Hồ bơi riêng', desc: 'Hồ bơi nước mặn view biển tuyệt đẹp, dành riêng cho khách lưu trú' },
    { icon: '🏀', title: 'Sân bóng rổ', desc: 'Sân bóng rổ tiêu chuẩn ngoài trời trong khuôn viên villa' },
    { icon: '⚽', title: 'Sân bóng đá mini', desc: 'Sân cỏ nhân tạo cho nhóm nhỏ, vui nhộn và thú vị' },
    { icon: '🌿', title: 'Vườn & rau xanh', desc: 'Vườn cây cảnh và vườn rau hữu cơ tự nhiên xanh mát' },
    { icon: '🛵', title: 'Xe điện & xe đạp', desc: 'Buggy điện và xe đạp miễn phí tham quan nội khu' },
    { icon: '🏖️', title: 'Bãi biển riêng', desc: 'Bãi biển riêng dành cho khách, chỉ cách villa 30m' },
    { icon: '🎣', title: 'Trải nghiệm câu cá', desc: 'Tour câu cá địa phương độc đáo của làng chài Tuần Châu' },
    { icon: '🍳', title: 'Bếp đầy đủ', desc: 'Bếp trang bị đầy đủ dụng cụ nấu nướng chuyên nghiệp' },
    { icon: '📶', title: 'Wifi tốc độ cao', desc: 'Internet tốc độ cao miễn phí toàn bộ khuôn viên villa' },
  ],
  en: [
    { icon: '🏊', title: 'Private Pool', desc: 'Saltwater pool with stunning sea view, exclusively for villa guests' },
    { icon: '🏀', title: 'Basketball Court', desc: 'Full outdoor basketball court within the villa grounds' },
    { icon: '⚽', title: 'Mini Football Field', desc: 'Artificial turf football field for small groups — great fun!' },
    { icon: '🌿', title: 'Garden & Veggie Patch', desc: 'Lush ornamental garden and natural organic vegetable garden' },
    { icon: '🛵', title: 'Electric Buggy & Bikes', desc: 'Free electric buggy and bicycles for touring the compound' },
    { icon: '🏖️', title: 'Private Beach', desc: 'Exclusive beach access for guests, just 30m from the villa' },
    { icon: '🎣', title: 'Fishing Experience', desc: 'Unique local fishing tours in the Tuan Chau fishing village' },
    { icon: '🍳', title: 'Fully Equipped Kitchen', desc: 'Professional kitchen with all the tools you need to cook' },
    { icon: '📶', title: 'High-Speed WiFi', desc: 'Free high-speed internet throughout the entire villa grounds' },
  ],
};

const T = {
  vi: { title: 'Tiện ích đặc biệt', sub: 'Mọi tiện ích bạn cần cho kỳ nghỉ hoàn hảo đều có sẵn tại Calmaria Bay Villa' },
  en: { title: 'Premium Amenities', sub: 'Everything you need for the perfect getaway is available at Calmaria Bay Villa' },
};

export default function Amenities() {
  const { lang } = useLang();
  const t = T[lang];
  const amenities = AMENITIES[lang];

  return (
    <section id="amenities" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-800 to-ocean-950 -z-0" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10 -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-8 bg-ocean-400 rounded-full" />
            <span className="text-ocean-300 text-sm font-semibold uppercase tracking-wider">Villa Facilities</span>
            <div className="h-0.5 w-8 bg-ocean-400 rounded-full" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-ocean-300 max-w-2xl mx-auto text-lg">{t.sub}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300 group cursor-default"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{item.icon}</div>
              <h3 className="font-semibold text-white text-lg mb-2">{item.title}</h3>
              <p className="text-ocean-300 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
