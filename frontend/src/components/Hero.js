'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12 lg:py-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-ocean-50 text-ocean-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-ocean-500 rounded-full animate-pulse"></span>
              Biệt thự ven biển cao cấp · Hạ Long
            </div>
            <h1 className="font-serif text-5xl lg:text-6xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Calmaria 
              <span className="text-ocean-600"> Bay Villa</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
              Biệt thự nghỉ dưỡng sang trọng tọa lạc tại Tuần Châu, Hạ Long với hồ bơi riêng, vườn cây xanh mát và không gian yên bình tuyệt vời. Trải nghiệm kỳ nghỉ đáng nhớ cùng gia đình.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#rooms"
                className="px-8 py-4 bg-ocean-500 text-white rounded-full text-base font-semibold hover:bg-ocean-600 transition-all shadow-lg shadow-ocean-200">
                Xem phòng ngay
              </a>
              <a href="#pricing"
                className="px-8 py-4 border-2 border-sand-400 text-gray-700 rounded-full text-base font-semibold hover:bg-sand-100 transition-all">
                Xem bảng giá
              </a>
            </div>
            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-sand-200">
              {[
                { value: '10', label: 'Phòng nghỉ' },
                { value: '500m²', label: 'Diện tích' },
                { value: '4.9★', label: 'Đánh giá' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-ocean-700">{s.value}</div>
                  <div className="text-sm text-gray-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=900&auto=format&fit=crop"
                alt="Calmaria Bay Villa"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-ocean-50 rounded-xl flex items-center justify-center text-2xl">🏖️</div>
                <div>
                  <div className="font-semibold text-gray-800">Bãi biển riêng</div>
                  <div className="text-sm text-gray-500">Cách villa 30m</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-ocean-600">22.2M</div>
                <div className="text-xs text-gray-500">VNĐ/đêm cuối tuần</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
