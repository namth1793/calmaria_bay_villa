'use client';
import { motion } from 'framer-motion';
import { Eye, Users, UtensilsCrossed, Waves, Wifi } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const rooms = [
  {
    id: 1, name: 'Phòng 101 / 301', size: '25m²', guests: 2, price: '1,600,000',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&auto=format&fit=crop',
    amenities: ['wifi', 'pool', 'kitchen', 'seaview'],
    desc: 'Phòng tiêu chuẩn view vườn, không gian thoáng mát'
  },
  {
    id: 2, name: 'Phòng 102 / 203 / 305', size: '32m²', guests: 3, price: '2,000,000',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&auto=format&fit=crop',
    amenities: ['wifi', 'pool', 'kitchen', 'seaview'],
    desc: 'Phòng superior, view biển tuyệt đẹp'
  },
  {
    id: 3, name: 'Phòng 201 / 202 / 302', size: '40m²', guests: 4, price: '2,600,000',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&auto=format&fit=crop',
    amenities: ['wifi', 'pool', 'kitchen', 'seaview'],
    desc: 'Phòng deluxe rộng rãi, ban công nhìn ra hồ bơi'
  },
  {
    id: 4, name: 'Phòng 303 / 304', size: '40m²', guests: 4, price: '2,600,000',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&auto=format&fit=crop',
    amenities: ['wifi', 'pool', 'kitchen', 'seaview'],
    desc: 'Phòng deluxe góc, tầm nhìn toàn cảnh vịnh'
  },
  {
    id: 5, name: 'Phòng 101 / 301', size: '25m²', guests: 2, price: '1,600,000',
    image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=600&auto=format&fit=crop',
    amenities: ['wifi', 'pool', 'kitchen', 'seaview'],
    desc: 'Phòng tiêu chuẩn tầng 3, không gian thoáng đãng'
  },
  {
    id: 6, name: 'Phòng 102 / 203 / 305', size: '32m²', guests: 3, price: '2,000,000',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&auto=format&fit=crop',
    amenities: ['wifi', 'pool', 'kitchen', 'seaview'],
    desc: 'Phòng superior view biển, ban công rộng'
  },
];

const amenityIcons = {
  wifi: { icon: <Wifi size={14} />, label: 'Wifi' },
  pool: { icon: <Waves size={14} />, label: 'Hồ bơi' },
  kitchen: { icon: <UtensilsCrossed size={14} />, label: 'Bếp' },
  seaview: { icon: <Eye size={14} />, label: 'View biển' },
};

export default function RoomList() {
  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Danh sách phòng</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Khám phá các phòng nghỉ sang trọng tại Calmaria Bay Villa — mỗi phòng đều mang đến trải nghiệm nghỉ dưỡng đặc biệt.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-sand-100 overflow-hidden group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={room.image} alt={room.name} fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-ocean-700">
                  {room.size}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 text-lg">{room.name}</h3>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Users size={14} />
                    <span>{room.guests}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4">{room.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.amenities.map(a => (
                    <span key={a} className="flex items-center gap-1 bg-sand-50 text-gray-600 px-2.5 py-1 rounded-full text-xs">
                      {amenityIcons[a].icon} {amenityIcons[a].label}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-sand-100">
                  <div>
                    <span className="text-xl font-bold text-ocean-700">{room.price}</span>
                    <span className="text-sm text-gray-400 ml-1">VNĐ/đêm</span>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/rooms/${room.id}`}
                      className="px-3 py-2 border border-ocean-400 text-ocean-600 rounded-full text-sm font-medium hover:bg-ocean-50 transition-colors">
                      Chi tiết
                    </Link>
                    <Link href={`/rooms/${room.id}`}
                      className="px-3 py-2 bg-ocean-500 text-white rounded-full text-sm font-medium hover:bg-ocean-600 transition-colors">
                      Đặt ngay
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
