'use client';
import { useLang } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

const T = {
  vi: {
    badge: 'Biệt thự ven biển cao cấp · Hạ Long',
    title1: 'Calmaria',
    title2: ' Bay Villa',
    desc: 'Biệt thự nghỉ dưỡng sang trọng tọa lạc tại Tuần Châu, Hạ Long với hồ bơi riêng, vườn cây xanh mát và không gian yên bình tuyệt vời. Trải nghiệm kỳ nghỉ đáng nhớ cùng gia đình.',
    cta1: 'Xem phòng ngay',
    cta2: 'Xem bảng giá',
    stat1: 'Phòng nghỉ',
    stat2: 'Diện tích',
    stat3: 'Đánh giá',
    floatBeach: 'Bãi biển riêng',
    floatBeachSub: 'Cách villa 30m',
    floatPrice: 'VNĐ/đêm cuối tuần',
  },
  en: {
    badge: 'Luxury Beachfront Villa · Ha Long',
    title1: 'Calmaria',
    title2: ' Bay Villa',
    desc: 'A luxury resort villa nestled in Tuan Chau, Ha Long Bay, featuring a private pool, lush gardens, and serene surroundings. Experience an unforgettable getaway with family and friends.',
    cta1: 'View Rooms',
    cta2: 'View Pricing',
    stat1: 'Rooms',
    stat2: 'Area',
    stat3: 'Rating',
    floatBeach: 'Private Beach',
    floatBeachSub: '30m from villa',
    floatPrice: 'VND/night (weekend)',
  },
};

export default function Hero() {
  const { lang } = useLang();
  const t = T[lang];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-50 via-sand-50 to-white -z-10" />
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-ocean-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 left-0 w-[400px] h-[400px] bg-sand-100/60 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12 lg:py-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white border border-ocean-100 text-ocean-600 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm"
            >
              <span className="w-2 h-2 bg-ocean-500 rounded-full animate-pulse" />
              {t.badge}
            </motion.div>

            <h1 className="font-serif text-5xl lg:text-6xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {t.title1}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-500 to-ocean-700">
                {t.title2}
              </span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
              {t.desc}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#rooms"
                className="px-8 py-4 bg-gradient-to-r from-ocean-500 to-ocean-600 text-white rounded-full text-base font-semibold hover:from-ocean-600 hover:to-ocean-700 transition-all shadow-lg shadow-ocean-200 hover:shadow-xl hover:shadow-ocean-300 hover:-translate-y-0.5 active:translate-y-0">
                {t.cta1}
              </a>
              <a href="#pricing"
                className="px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-full text-base font-semibold hover:border-ocean-300 hover:text-ocean-600 hover:bg-ocean-50 transition-all">
                {t.cta2}
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-gray-100">
              {[
                { value: '10', label: t.stat1 },
                { value: '2,000m²', label: t.stat2 },
                { value: '4.9★', label: t.stat3 },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="text-2xl font-bold text-ocean-700">{s.value}</div>
                  <div className="text-sm text-gray-400 mt-0.5">{s.label}</div>
                </motion.div>
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
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-ocean-200/30">
              <Image
                src="/assets/hero-banner.jpg"
                alt="Calmaria Bay Villa"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Floating card – beach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl shadow-black/10 p-4 border border-white"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-xl flex items-center justify-center text-xl shadow-sm">
                  🏖️
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm">{t.floatBeach}</div>
                  <div className="text-xs text-gray-400">{t.floatBeachSub}</div>
                </div>
              </div>
            </motion.div>

            {/* Floating card – price */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl shadow-black/10 p-4 border border-white"
            >
              <div className="text-center">
                <div className="text-xl font-bold text-ocean-600">22.2M</div>
                <div className="text-xs text-gray-400 mt-0.5">{t.floatPrice}</div>
              </div>
            </motion.div>

            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-[2rem] border-2 border-dashed border-ocean-200/50 -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent -z-0 pointer-events-none" />
    </section>
  );
}
