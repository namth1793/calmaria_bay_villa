'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft, MapPin, Users, BedDouble, Bath, LayoutGrid,
  Star, ChevronLeft, ChevronRight, X, Check, Phone,
  Wifi, Utensils, Tv, Wind, Coffee, Lock, Droplets, ShowerHead
} from 'lucide-react';

function StarRating({ n }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={13} className={i < n ? 'fill-amber-400 text-amber-400' : 'text-gray-200 fill-gray-200'} />
      ))}
    </div>
  );
}

const amenityIcon = (label) => {
  if (label.includes('Wifi')) return <Wifi size={16} />;
  if (label.includes('Tivi')) return <Tv size={16} />;
  if (label.includes('nấu')) return <Utensils size={16} />;
  if (label.includes('Điều')) return <Wind size={16} />;
  if (label.includes('cà phê')) return <Coffee size={16} />;
  if (label.includes('Két')) return <Lock size={16} />;
  if (label.includes('nóng')) return <Droplets size={16} />;
  if (label.includes('tắm')) return <ShowerHead size={16} />;
  return <Check size={16} />;
};

// ── Contact Card ───────────────────────────────────────
function ContactCard({ room }) {
  return (
    <div className="bg-white border border-sand-200 rounded-3xl shadow-xl p-6 sticky top-24">
      <div className="text-center mb-5 pb-5 border-b border-sand-100">
        <div className="w-14 h-14 bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md shadow-ocean-200">
          <span className="text-2xl">🏖️</span>
        </div>
        <h3 className="font-serif text-lg font-bold text-gray-900">Calmaria Bay Villa</h3>
        <p className="text-xs text-gray-400 mt-1">Cho thuê nguyên căn · 10 phòng ngủ</p>
      </div>

      {/* Room info summary */}
      <div className="space-y-2.5 mb-5 pb-5 border-b border-sand-100">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <BedDouble size={15} className="text-ocean-500 shrink-0" />
          <span>{room.fullName}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <LayoutGrid size={15} className="text-ocean-500 shrink-0" />
          <span>{room.size}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Users size={15} className="text-ocean-500 shrink-0" />
          <span>{room.guests} khách</span>
        </div>
      </div>

      {/* Contact options */}
      <div className="space-y-3">
        <a href="tel:0337866206"
          className="flex items-center gap-3 p-3.5 bg-ocean-50 rounded-2xl hover:bg-ocean-100 transition-colors group">
          <div className="w-9 h-9 bg-ocean-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
            <Phone size={16} className="text-white" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Điện thoại / Zalo</p>
            <p className="font-bold text-gray-900 group-hover:text-ocean-700 text-sm">0337 866 206</p>
          </div>
        </a>

        <a href="https://zalo.me/0337866206" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-3 p-3.5 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors group">
          <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
            <span className="text-white font-bold text-sm">Z</span>
          </div>
          <div>
            <p className="text-xs text-gray-500">Chat Zalo</p>
            <p className="font-bold text-gray-900 group-hover:text-green-700 text-sm">Nhắn tin ngay</p>
          </div>
        </a>
      </div>

      <div className="mt-5 flex gap-2.5">
        <a href="tel:0337866206"
          className="flex-1 py-3 bg-ocean-500 text-white rounded-xl text-center font-semibold hover:bg-ocean-600 transition-colors text-sm shadow-sm">
          Gọi ngay
        </a>
        <a href="/#booking"
          className="flex-1 py-3 bg-gradient-to-r from-sand-400 to-sand-500 text-white rounded-xl text-center font-semibold hover:opacity-90 transition-opacity text-sm shadow-sm">
          Đặt nguyên căn
        </a>
      </div>

      <p className="text-center text-xs text-gray-400 mt-3">
        Xác nhận trong vòng 24 giờ
      </p>
    </div>
  );
}

// ── Photo Gallery ──────────────────────────────────────
function PhotoGallery({ images, roomName }) {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const prev = () => setLightboxIdx((lightboxIdx - 1 + images.length) % images.length);
  const next = () => setLightboxIdx((lightboxIdx + 1) % images.length);

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[420px] sm:h-[480px] rounded-2xl overflow-hidden">
        {/* Main large */}
        <div className="col-span-2 row-span-2 relative cursor-pointer" onClick={() => setLightboxIdx(0)}>
          <Image src={images[0]} alt={roomName} fill className="object-cover hover:brightness-90 transition-all" />
          <div className="absolute bottom-3 left-3">
            <span className="bg-black/50 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1">
              📷 Tất cả ảnh
            </span>
          </div>
        </div>
        {/* Smaller photos */}
        {images.slice(1, 5).map((img, i) => (
          <div key={i} className="relative cursor-pointer" onClick={() => setLightboxIdx(i + 1)}>
            <Image src={img} alt={`${roomName} ${i+2}`} fill className="object-cover hover:brightness-90 transition-all" />
            {i === 3 && images.length > 5 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-bold text-xl">+{images.length - 5}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button onClick={() => setLightboxIdx(null)}
            className="absolute top-4 right-4 text-white hover:text-sand-300 z-10">
            <X size={30} />
          </button>
          <button onClick={prev} className="absolute left-4 text-white hover:text-sand-300 z-10 p-2">
            <ChevronLeft size={36} />
          </button>
          <div className="relative w-full max-w-4xl aspect-[4/3]">
            <Image src={images[lightboxIdx]} alt={roomName} fill className="object-contain" />
          </div>
          <button onClick={next} className="absolute right-4 text-white hover:text-sand-300 z-10 p-2">
            <ChevronRight size={36} />
          </button>
          <div className="absolute bottom-4 text-white/60 text-sm">
            {lightboxIdx + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}

// ── Similar Rooms Carousel ─────────────────────────────
function SimilarRooms({ allRooms, similarIds }) {
  const similar = allRooms.filter(r => similarIds.includes(r.id));
  const scrollRef = useRef(null);
  const scroll = (dir) => scrollRef.current?.scrollBy({ left: dir * 300, behavior: 'smooth' });

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-serif text-2xl font-bold text-gray-900">Có thể bạn sẽ thích</h2>
        <div className="flex gap-2">
          <button onClick={() => scroll(-1)} className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50">
            <ChevronLeft size={16} />
          </button>
          <button onClick={() => scroll(1)} className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
        {similar.map(room => (
          <Link key={room.id} href={`/rooms/${room.id}`}
            className="flex-shrink-0 w-64 snap-start bg-white border border-sand-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group">
            <div className="relative aspect-[4/3]">
              <Image src={room.images[0]} alt={room.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4">
              <p className="font-medium text-gray-800 text-sm leading-snug">{room.fullName}</p>
              <p className="text-xs text-gray-400 mt-1">{room.size} · {room.view}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────
export default function RoomDetailClient({ room, allRooms }) {
  const [showAll, setShowAll] = useState(false);
  const [activeTab, setActiveTab] = useState('info');

  const tabs = [
    { id: 'gallery', label: 'Hình ảnh' },
    { id: 'info', label: 'Thông tin' },
    { id: 'amenities', label: 'Tiện ích' },
    { id: 'reviews', label: 'Đánh giá' },
    { id: 'policies', label: 'Chính sách' },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveTab(id);
  };

  const avgRating = room.reviews.length
    ? (room.reviews.reduce((s, r) => s + r.rating, 0) / room.reviews.length).toFixed(1)
    : '5.0';

  return (
    <div className="min-h-screen bg-sand-50">
      {/* Back nav */}
      <div className="bg-white border-b border-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <Link href="/#rooms" className="flex items-center gap-2 text-gray-600 hover:text-ocean-600 transition-colors text-sm font-medium">
              <ArrowLeft size={18} /> Quay lại danh sách phòng
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-ocean-500 flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xs">CB</span>
              </div>
              <span className="hidden sm:block font-serif font-bold text-ocean-700 text-sm">Calmaria Bay Villa</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Sticky sub-nav */}
      <div className="sticky top-0 z-40 bg-white border-b border-sand-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex overflow-x-auto scrollbar-hide">
              {tabs.map(tab => (
                <button key={tab.id} onClick={() => scrollTo(tab.id)}
                  className={`flex-shrink-0 px-5 py-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-ocean-500 text-ocean-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}>
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-sand-100">
              <a href="tel:0337866206" className="text-sm font-medium text-ocean-600 hover:underline flex items-center gap-1">
                <Phone size={13} /> 0337 866 206
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-10">

            {/* Gallery */}
            <section id="gallery">
              <PhotoGallery images={room.images} roomName={room.name} />
            </section>

            {/* Title & Stats */}
            <section id="info">
              <h1 className="font-serif text-3xl font-bold text-gray-900 mb-3">{room.fullName}</h1>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                <MapPin size={14} className="text-ocean-500" />
                <span>{room.address}</span>
              </div>
              <div className="flex flex-wrap gap-5 text-sm text-gray-700">
                <div className="flex items-center gap-1.5">
                  <Users size={16} className="text-ocean-500" /> {room.guests} khách
                </div>
                <div className="flex items-center gap-1.5">
                  <BedDouble size={16} className="text-ocean-500" /> {room.beds} giường
                </div>
                <div className="flex items-center gap-1.5">
                  <Bath size={16} className="text-ocean-500" /> {room.bathrooms} phòng tắm
                </div>
                <div className="flex items-center gap-1.5">
                  <LayoutGrid size={16} className="text-ocean-500" /> {room.bedrooms} phòng ngủ
                </div>
              </div>
            </section>

            {/* About */}
            <section className="border-t border-sand-200 pt-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Về phòng này</h2>
              <div className={`text-gray-600 leading-relaxed text-sm whitespace-pre-line overflow-hidden transition-all duration-300 ${showAll ? '' : 'max-h-32'}`}>
                {room.about}
              </div>
              <button onClick={() => setShowAll(!showAll)}
                className="mt-3 text-sm font-semibold text-gray-800 border-b border-gray-800 hover:text-ocean-600 hover:border-ocean-600 transition-colors">
                {showAll ? 'Ẩn bớt' : 'Xem thêm'}
              </button>
            </section>

            {/* Bedrooms */}
            <section className="border-t border-sand-200 pt-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-5">Nội thất phòng ngủ</h2>
              <div className="flex flex-wrap gap-4">
                {room.bedrooms_detail.map((bd, i) => (
                  <div key={i} className="bg-sand-50 rounded-2xl border border-sand-200 p-5 min-w-[160px]">
                    <div className="text-3xl mb-2">🛏️</div>
                    <p className="font-medium text-gray-800 text-sm">{bd.name}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{bd.type}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Similar Rooms */}
            <section className="border-t border-sand-200 pt-8">
              <SimilarRooms allRooms={allRooms} similarIds={room.similar} />
            </section>

            {/* Amenities */}
            <section id="amenities" className="border-t border-sand-200 pt-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-5">Tiện ích</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {room.amenities.map((a, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="text-ocean-500">{amenityIcon(a)}</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section id="reviews" className="border-t border-sand-200 pt-8">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="font-serif text-2xl font-bold text-gray-900">Đánh giá</h2>
                <div className="flex items-center gap-1.5 bg-sand-50 px-3 py-1.5 rounded-full">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <span className="font-bold text-sm">{avgRating}</span>
                  <span className="text-gray-400 text-xs">({room.reviews.length} đánh giá)</span>
                </div>
              </div>
              <div className="space-y-6">
                {room.reviews.map((rev, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-11 h-11 bg-sand-100 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                      {rev.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-800 text-sm">{rev.name}</span>
                        <span className="text-gray-400 text-xs">{rev.date}</span>
                      </div>
                      <StarRating n={rev.rating} />
                      <p className="text-gray-600 text-sm leading-relaxed mt-2">{rev.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Address & Map */}
            <section id="contact-detail" className="border-t border-sand-200 pt-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-5">Địa chỉ</h2>
              <p className="text-gray-600 text-sm mb-4">{room.address}</p>
              <a
                href="https://www.openstreetmap.org/?mlat=20.92105796459224&mlon=106.99210430583376#map=17/20.92105796459224/106.99210430583376"
                target="_blank" rel="noopener noreferrer"
                className="block relative rounded-2xl overflow-hidden h-64 bg-gray-100 shadow-sm group"
              >
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=106.9871%2C20.9181%2C106.9971%2C20.9241&layer=mapnik&marker=20.92105796459224%2C106.99210430583376"
                  width="100%" height="100%" style={{ border: 0, pointerEvents: 'none' }}
                  loading="lazy"
                  title="Villa Location"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-end justify-end p-3">
                  <span className="bg-white/90 backdrop-blur-sm text-ocean-700 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <MapPin size={12} /> Mở bản đồ →
                  </span>
                </div>
              </a>
            </section>

            {/* Policies */}
            <section id="policies" className="border-t border-sand-200 pt-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-5">Một số điều bạn cần lưu ý nhé</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {room.policies.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <Check size={15} className="text-ocean-500 mt-0.5 flex-shrink-0" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* RIGHT: Contact Card */}
          <div className="hidden lg:block">
            <ContactCard room={room} />
          </div>
        </div>

        {/* Mobile contact bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-sand-200 p-4 flex items-center justify-between gap-3 z-40">
          <a href="tel:0337866206"
            className="flex-1 py-3 bg-ocean-500 text-white rounded-xl font-semibold hover:bg-ocean-600 transition-colors text-sm text-center">
            📞 Gọi ngay
          </a>
          <a href="https://zalo.me/0337866206" target="_blank" rel="noopener noreferrer"
            className="flex-1 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors text-sm text-center">
            Zalo
          </a>
          <Link href="/#booking"
            className="flex-1 py-3 bg-gradient-to-r from-ocean-500 to-ocean-600 text-white rounded-xl font-semibold text-sm text-center">
            Đặt nguyên căn
          </Link>
        </div>

        {/* Bottom spacing for mobile bar */}
        <div className="lg:hidden h-20" />
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
