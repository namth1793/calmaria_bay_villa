'use client';
import { useLang } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Eye, Users, Wifi, Wind } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { rooms } from '@/data/rooms';

const T = {
  vi: {
    title: 'Danh sách phòng',
    sub: 'Khám phá 10 phòng nghỉ sang trọng tại Calmaria Bay Villa — mỗi phòng đều mang đến trải nghiệm nghỉ dưỡng đặc biệt.',
    balcony: 'Ban công',
    detail: 'Chi tiết',
    book: 'Đặt ngay',
    night: 'đ/đêm',
    garden: 'Hướng sân vườn',
    sea: 'Hướng biển',
    hasBalcony: ', có ban công',
  },
  en: {
    title: 'Our Rooms',
    sub: 'Explore 10 elegant rooms at Calmaria Bay Villa — each offering a unique and memorable stay experience.',
    balcony: 'Balcony',
    detail: 'Details',
    book: 'Book Now',
    night: 'VND/night',
    garden: 'Garden View',
    sea: 'Sea View',
    hasBalcony: ', with balcony',
  },
};

export default function RoomList() {
  const { lang } = useLang();
  const t = T[lang];

  const getView = (room) => {
    const base = room.view.includes('biển') ? t.sea : t.garden;
    return base + (room.balcony ? t.hasBalcony : '');
  };

  return (
    <section id="rooms" className="py-24 bg-white relative">
      {/* Subtle top decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-ocean-300 to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-8 bg-ocean-500 rounded-full" />
            <span className="text-ocean-500 text-sm font-semibold uppercase tracking-wider">10 Rooms</span>
            <div className="h-0.5 w-8 bg-ocean-500 rounded-full" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">{t.sub}</p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.07 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={room.images[0]}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-600"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-ocean-700 shadow-sm">
                    {room.size}
                  </span>
                  {room.balcony && (
                    <span className="bg-gradient-to-r from-amber-400 to-amber-500 px-2.5 py-1 rounded-full text-xs font-bold text-white shadow-sm">
                      {t.balcony}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between mb-1.5">
                  <h3 className="font-bold text-gray-900 text-base group-hover:text-ocean-700 transition-colors">{room.name}</h3>
                  <div className="flex items-center gap-1 text-gray-400 text-xs shrink-0 ml-2 bg-gray-50 px-2 py-1 rounded-full">
                    <Users size={12} />
                    <span>{room.guests}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
                  <Eye size={11} />
                  <span>{getView(room)}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="flex items-center gap-1 bg-ocean-50 text-ocean-600 px-2 py-0.5 rounded-full text-xs font-medium">
                    <Wifi size={10} /> Wifi
                  </span>
                  <span className="flex items-center gap-1 bg-ocean-50 text-ocean-600 px-2 py-0.5 rounded-full text-xs font-medium">
                    <Wind size={10} /> AC
                  </span>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="mb-3">
                    <span className="text-base font-bold text-ocean-700">
                      {room.price.toLocaleString('vi-VN')}
                    </span>
                    <span className="text-xs text-gray-400 ml-1">{t.night}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Link href={`/rooms/${room.id}`}
                      className="py-2 border border-ocean-300 text-ocean-600 rounded-xl text-xs font-semibold hover:bg-ocean-50 transition-colors text-center">
                      {t.detail}
                    </Link>
                    <Link href={`/rooms/${room.id}`}
                      className="py-2 bg-gradient-to-r from-ocean-500 to-ocean-600 text-white rounded-xl text-xs font-semibold hover:from-ocean-600 hover:to-ocean-700 transition-all shadow-sm text-center">
                      {t.book}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
