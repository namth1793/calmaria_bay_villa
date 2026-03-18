'use client';
import { motion } from 'framer-motion';

const amenities = [
  { icon: '🏊', title: 'Hồ bơi riêng', desc: 'Hồ bơi nước mặn view biển tuyệt đẹp' },
  { icon: '🏀', title: 'Sân bóng rổ', desc: 'Sân bóng rổ tiêu chuẩn ngoài trời' },
  { icon: '⚽', title: 'Sân bóng đá mini', desc: 'Sân cỏ nhân tạo cho nhóm nhỏ' },
  { icon: '🌿', title: 'Vườn & rau xanh', desc: 'Vườn cây và vườn rau hữu cơ tự nhiên' },
  { icon: '🛵', title: 'Xe điện & xe đạp', desc: 'Buggy điện và xe đạp miễn phí' },
  { icon: '🏖️', title: 'Bãi biển riêng', desc: 'Bãi biển riêng cách villa chỉ 30m' },
  { icon: '🎣', title: 'Trải nghiệm câu cá', desc: 'Tour câu cá địa phương độc đáo' },
  { icon: '🍳', title: 'Bếp đầy đủ', desc: 'Bếp trang bị đầy đủ dụng cụ nấu nướng' },
  { icon: '📶', title: 'Wifi tốc độ cao', desc: 'Internet tốc độ cao miễn phí' },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-ocean-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl font-bold mb-4">Tiện ích đặc biệt</h2>
          <p className="text-ocean-200 max-w-2xl mx-auto">
            Mọi tiện ích bạn cần cho kỳ nghỉ hoàn hảo đều có sẵn tại Calmaria Bay Villa
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-ocean-200 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
