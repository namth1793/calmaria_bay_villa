'use client';
import { useLang } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Eye, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { rooms } from '@/data/rooms';

const T = {
  vi: {
    title: 'Các phòng nghỉ',
    sub: 'Khám phá 10 phòng nghỉ sang trọng tại Calmaria Bay Villa — mỗi phòng được thiết kế tinh tế để mang lại trải nghiệm nghỉ dưỡng đặc biệt.',
    balcony: 'Ban công',
    seePhotos: 'Xem ảnh & nội thất',
    garden: 'Hướng sân vườn',
    sea: 'Hướng biển',
    hasBalcony: ', có ban công',
  },
  en: {
    title: 'Guest Rooms',
    sub: 'Explore 10 elegantly designed rooms at Calmaria Bay Villa — each thoughtfully crafted to deliver a unique and memorable retreat.',
    balcony: 'Balcony',
    seePhotos: 'View photos & furnishings',
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.07 }}
            >
              <Link
                href={`/rooms/${room.id}`}
                className="block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={room.images[0]}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                  {/* Hover CTA */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="block w-full py-2 bg-white/90 backdrop-blur-sm rounded-xl text-xs font-semibold text-ocean-700 text-center">
                      {t.seePhotos} →
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-1.5">
                    <h3 className="font-bold text-gray-900 text-base group-hover:text-ocean-700 transition-colors">{room.name}</h3>
                    <div className="flex items-center gap-1 text-gray-400 text-xs shrink-0 ml-2 bg-gray-50 px-2 py-1 rounded-full">
                      <Users size={12} />
                      <span>{room.guests}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <Eye size={11} />
                    <span>{getView(room)}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
