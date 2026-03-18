'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=900&auto=format&fit=crop"
                  alt="Về Calmaria Bay Villa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-ocean-500 text-white rounded-2xl p-5 shadow-xl">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm text-ocean-100">Năm hoạt động</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">
              Về Calmaria Bay Villa
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Calmaria Bay Villa là điểm đến nghỉ dưỡng sang trọng tọa lạc tại Cảng Quốc Tế Tuần Châu, Hạ Long — một trong những viên ngọc quý của du lịch Quảng Ninh.
              </p>
              <p>
                Chúng tôi cung cấp dịch vụ thuê nguyên căn villa với đầy đủ tiện nghi cao cấp: hồ bơi riêng tư, vườn cây xanh mát, bãi biển riêng, và không gian yên tĩnh lý tưởng cho gia đình, nhóm bạn hoặc sự kiện đặc biệt.
              </p>
              <p>
                Với 10 phòng sang trọng và sức chứa lên đến 30-40 người, Calmaria Bay Villa là lựa chọn hoàn hảo cho các kỳ nghỉ cuối tuần, tiệc gia đình, sinh nhật, hay team building doanh nghiệp.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: '🏠', label: '500m² diện tích' },
                { icon: '🌊', label: 'View vịnh Hạ Long' },
                { icon: '👨‍👩‍👧‍👦', label: 'Phù hợp nhóm lớn' },
                { icon: '⭐', label: '4.9/5 đánh giá' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-sand-50 rounded-xl p-4">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-ocean-600 font-semibold hover:text-ocean-700 transition-colors">
              Xem thêm →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
