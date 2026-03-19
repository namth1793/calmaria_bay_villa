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

// ── helpers ────────────────────────────────────────────
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

// ── Booking Widget ─────────────────────────────────────
function BookingWidget({ room }) {
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [guests, setGuests] = useState(1);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const nights = (() => {
    if (!checkin || !checkout) return 0;
    const d = (new Date(checkout) - new Date(checkin)) / 86400000;
    return d > 0 ? d : 0;
  })();
  const total = nights * room.price;

  const handleBook = async () => {
    if (!checkin || !checkout || nights <= 0) {
      alert('Vui lòng chọn ngày nhận và trả phòng hợp lệ.');
      return;
    }
    setLoading(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Khách online', phone: '—', checkin, checkout, adults: guests, children: 0, special_request: `Phòng: ${room.fullName}` }),
      });
      setDone(true);
    } catch { setDone(true); }
    setLoading(false);
  };

  return (
    <div className="bg-white border border-sand-200 rounded-3xl shadow-xl p-6 sticky top-24">
      <div className="flex items-baseline gap-2 mb-5">
        <span className="text-2xl font-bold text-ocean-700">{room.price.toLocaleString('vi-VN')}</span>
        <span className="text-gray-500 text-sm">đ / đêm</span>
      </div>

      {done ? (
        <div className="text-center py-4">
          <div className="text-4xl mb-2">✅</div>
          <p className="font-semibold text-green-700">Yêu cầu đã được gửi!</p>
          <p className="text-sm text-gray-500 mt-1">Chúng tôi sẽ liên hệ sớm nhất.</p>
          <button onClick={() => setDone(false)} className="mt-4 text-ocean-600 text-sm underline">Đặt lại</button>
        </div>
      ) : (
        <>
          {/* Date grid */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden mb-3">
            <div className="grid grid-cols-2 divide-x divide-gray-200">
              <div className="p-3">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Nhận phòng</label>
                <input type="date" value={checkin}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={e => setCheckin(e.target.value)}
                  className="w-full text-sm text-gray-800 outline-none cursor-pointer" />
              </div>
              <div className="p-3">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Trả phòng</label>
                <input type="date" value={checkout}
                  min={checkin || new Date().toISOString().split('T')[0]}
                  onChange={e => setCheckout(e.target.value)}
                  className="w-full text-sm text-gray-800 outline-none cursor-pointer" />
              </div>
            </div>
            <div className="border-t border-gray-200 p-3">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Số khách</label>
              <select value={guests} onChange={e => setGuests(+e.target.value)}
                className="w-full text-sm text-gray-800 outline-none">
                {[...Array(room.guests)].map((_, i) => (
                  <option key={i+1} value={i+1}>{i+1} khách</option>
                ))}
              </select>
            </div>
          </div>

          {/* Total */}
          {nights > 0 && (
            <div className="mb-3 space-y-2 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>{room.price.toLocaleString('vi-VN')} × {nights} đêm</span>
                <span>{total.toLocaleString('vi-VN')} đ</span>
              </div>
              <div className="flex justify-between font-bold text-gray-900 pt-2 border-t border-gray-100">
                <span>Tổng cộng</span>
                <span>{total.toLocaleString('vi-VN')} đ</span>
              </div>
            </div>
          )}
          {nights === 0 && (
            <div className="flex justify-between text-sm text-gray-400 mb-3">
              <span>Tổng cộng</span>
              <span>0 đ</span>
            </div>
          )}

          <button onClick={handleBook} disabled={loading}
            className="w-full py-4 bg-ocean-500 text-white rounded-xl font-semibold hover:bg-ocean-600 transition-colors disabled:opacity-60">
            {loading ? 'Đang gửi...' : 'Chọn ngày'}
          </button>
          <p className="text-center text-xs text-gray-400 mt-3">Vui lòng chọn tất cả trước khi đặt phòng</p>

          <div className="mt-4 pt-4 border-t border-sand-100">
            <a href="tel:0337866206" className="flex items-center gap-2 text-sm text-ocean-600 hover:underline">
              <Phone size={14} /> 0337 866 206 (Zalo / Gọi)
            </a>
          </div>
        </>
      )}
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
              <p className="font-medium text-gray-800 text-sm leading-snug mb-1">{room.fullName}</p>
              <p className="text-ocean-700 font-bold text-sm">{room.price.toLocaleString('vi-VN')} đ<span className="font-normal text-gray-400">/đêm</span></p>
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
              <span className="text-xs font-medium bg-red-50 text-red-600 px-3 py-1.5 rounded-full">🇻🇳 Tiếng Việt</span>
              <a href="#contact-detail" className="text-sm font-medium text-gray-700 hover:text-ocean-600">Liên hệ</a>
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
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">About this space</h2>
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
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-5">Giường ngủ</h2>
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
              <button className="mt-5 px-5 py-2.5 border border-gray-800 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
                Xem thêm {room.amenities.length} tiện ích
              </button>
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
              {room.reviews.length > 3 && (
                <button className="mt-5 px-5 py-2.5 border border-gray-800 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
                  Xem thêm {room.reviews.length} đánh giá
                </button>
              )}
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

          {/* RIGHT: Booking Widget */}
          <div className="hidden lg:block">
            <BookingWidget room={room} />
          </div>
        </div>

        {/* Mobile booking bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-sand-200 p-4 flex items-center justify-between z-40">
          <div>
            <span className="font-bold text-ocean-700">{room.price.toLocaleString('vi-VN')}</span>
            <span className="text-gray-400 text-sm"> đ/đêm</span>
          </div>
          <a href="#booking-mobile"
            className="px-6 py-3 bg-ocean-500 text-white rounded-xl font-semibold hover:bg-ocean-600 transition-colors text-sm">
            Đặt phòng
          </a>
        </div>
        {/* Mobile booking widget */}
        <div id="booking-mobile" className="lg:hidden mt-10 border-t border-sand-200 pt-8">
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-5">Đặt phòng</h2>
          <BookingWidget room={room} />
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
