'use client';
import { useLang } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const AREAS = {
  vi: [
    {
      id: 'be-boi',
      icon: '🏊',
      name: 'Hồ bơi',
      desc: 'Hồ bơi nước ngọt trong xanh rộng lớn nằm giữa khuôn viên villa. Không gian lý tưởng để thư giãn, vui chơi dưới nắng bên gia đình và bạn bè.',
      images: [
        '/assets/be-boi/DSC_5700.jpg',
        '/assets/be-boi/DSC_5751.jpg',
        '/assets/be-boi/DSC_5816.jpg',
        '/assets/be-boi/DSC_5818.jpg',
      ],
    },
    {
      id: 'phong-khach',
      icon: '🛋️',
      name: 'Phòng khách',
      desc: 'Phòng khách rộng rãi với nội thất hiện đại, sang trọng. Không gian chung lý tưởng để gia đình quây quần, trò chuyện sau những giờ khám phá Hạ Long.',
      images: [
        '/assets/phong-khach/DSC_5477-HDR1.jpg',
        '/assets/phong-khach/DSC_5486-HDR1.jpg',
        '/assets/phong-khach/DSC_5519-HDR1.jpg',
        '/assets/phong-khach/DSC_5663_1.jpg',
        '/assets/phong-khach/DSC_5665_1.jpg',
      ],
    },
    {
      id: 'bep',
      icon: '🍳',
      name: 'Nhà bếp',
      desc: 'Nhà bếp đầy đủ thiết bị, hiện đại và sạch sẽ. Tự tay chuẩn bị những bữa ăn ấm cúng cùng gia đình trong không gian bếp thoáng rộng, tiện nghi.',
      images: [
        '/assets/bep/DSC_5549-HDR1.jpg',
        '/assets/bep/DSC_5555-HDR.jpg',
        '/assets/bep/DSC_5567-HDR.jpg',
        '/assets/bep/DSC_5582-HDR1.jpg',
      ],
    },
    {
      id: 'san-thuong',
      icon: '🌅',
      name: 'Sân thượng',
      desc: 'Sân thượng view thoáng rộng, lý tưởng để ngắm hoàng hôn trên vịnh Hạ Long. Không gian ngoài trời lý tưởng cho những buổi tối BBQ, tiệc nhỏ cùng bạn bè.',
      images: [
        '/assets/san-thuong/DSC_5365-HDR.jpg',
        '/assets/san-thuong/DSC_5369-HDR.jpg',
        '/assets/san-thuong/DSC_5726.jpg',
        '/assets/san-thuong/DSC_5729.jpg',
        '/assets/san-thuong/DSC_5731.jpg',
      ],
    },
    {
      id: 'vuon-hoa',
      icon: '🌸',
      name: 'Vườn hoa',
      desc: 'Khu vườn hoa xanh mát bao quanh villa với muôn loài hoa rực rỡ. Góc sống ảo lý tưởng — nơi để lưu lại những kỷ niệm đẹp trong kỳ nghỉ của bạn.',
      images: [
        '/assets/vuon-hoa/DSC_5379.jpg',
        '/assets/vuon-hoa/DSC_5784.jpg',
        '/assets/vuon-hoa/DSC_5823.jpg',
      ],
    },
    {
      id: 'san-bong-ro',
      icon: '🏀',
      name: 'Sân bóng rổ',
      desc: 'Sân bóng rổ chuyên nghiệp rộng rãi nằm trong khuôn viên villa. Không gian vận động lý tưởng cho cả gia đình — từ trận đấu thân mật đến những giờ tập luyện sôi động bên nhau.',
      images: [
        '/assets/san-bong-ro/DJI_0012-Pano.jpg',
        '/assets/san-bong-ro/DJI_0014.jpg',
        '/assets/san-bong-ro/DJI_0016.jpg',
        '/assets/san-bong-ro/DJI_0029.jpg',
        '/assets/san-bong-ro/DJI_0983.jpg',
        '/assets/san-bong-ro/DJI_0992.jpg',
      ],
    },
  ],
  en: [
    {
      id: 'be-boi',
      icon: '🏊',
      name: 'Swimming Pool',
      desc: 'A spacious freshwater pool nestled in the heart of the villa grounds — perfect for relaxing, swimming and splashing around with family and friends in the sunshine.',
      images: [
        '/assets/be-boi/DSC_5700.jpg',
        '/assets/be-boi/DSC_5751.jpg',
        '/assets/be-boi/DSC_5816.jpg',
        '/assets/be-boi/DSC_5818.jpg',
      ],
    },
    {
      id: 'phong-khach',
      icon: '🛋️',
      name: 'Living Room',
      desc: 'A spacious living room with modern, elegant furnishings. The ideal gathering space for the whole family to relax and reconnect after a day exploring Ha Long Bay.',
      images: [
        '/assets/phong-khach/DSC_5477-HDR1.jpg',
        '/assets/phong-khach/DSC_5486-HDR1.jpg',
        '/assets/phong-khach/DSC_5519-HDR1.jpg',
        '/assets/phong-khach/DSC_5663_1.jpg',
        '/assets/phong-khach/DSC_5665_1.jpg',
      ],
    },
    {
      id: 'bep',
      icon: '🍳',
      name: 'Kitchen',
      desc: 'A fully equipped, modern and spotless kitchen. Cook up warm, home-style meals together as a family in this spacious, well-appointed cooking space.',
      images: [
        '/assets/bep/DSC_5549-HDR1.jpg',
        '/assets/bep/DSC_5555-HDR.jpg',
        '/assets/bep/DSC_5567-HDR.jpg',
        '/assets/bep/DSC_5582-HDR1.jpg',
      ],
    },
    {
      id: 'san-thuong',
      icon: '🌅',
      name: 'Rooftop',
      desc: 'An open rooftop with sweeping views — the ideal spot to watch the sunset over Ha Long Bay. Perfect for evening BBQs, stargazing, or intimate gatherings with friends.',
      images: [
        '/assets/san-thuong/DSC_5365-HDR.jpg',
        '/assets/san-thuong/DSC_5369-HDR.jpg',
        '/assets/san-thuong/DSC_5726.jpg',
        '/assets/san-thuong/DSC_5729.jpg',
        '/assets/san-thuong/DSC_5731.jpg',
      ],
    },
    {
      id: 'vuon-hoa',
      icon: '🌸',
      name: 'Flower Garden',
      desc: 'A lush flower garden surrounding the villa, bursting with colour and fragrance. The perfect backdrop for memorable photos and peaceful strolls during your stay.',
      images: [
        '/assets/vuon-hoa/DSC_5379.jpg',
        '/assets/vuon-hoa/DSC_5784.jpg',
        '/assets/vuon-hoa/DSC_5823.jpg',
      ],
    },
    {
      id: 'san-bong-ro',
      icon: '🏀',
      name: 'Basketball Court',
      desc: 'A full-size professional basketball court set within the villa grounds. The perfect space for active fun — whether it\'s a friendly match or a spirited game with the whole group.',
      images: [
        '/assets/san-bong-ro/DJI_0012-Pano.jpg',
        '/assets/san-bong-ro/DJI_0014.jpg',
        '/assets/san-bong-ro/DJI_0016.jpg',
        '/assets/san-bong-ro/DJI_0029.jpg',
        '/assets/san-bong-ro/DJI_0983.jpg',
        '/assets/san-bong-ro/DJI_0992.jpg',
      ],
    },
  ],
};

const T = {
  vi: {
    title: 'Không gian villa',
    sub: 'Khám phá từng khu vực của Calmaria Bay Villa — nơi mỗi góc nhỏ đều được chăm chút để mang lại trải nghiệm nghỉ dưỡng hoàn hảo.',
    viewAll: 'ảnh',
  },
  en: {
    title: 'Villa Spaces',
    sub: 'Explore every corner of Calmaria Bay Villa — each space thoughtfully designed to give you the perfect retreat experience.',
    viewAll: 'photos',
  },
};

function Lightbox({ images, startIdx, onClose }) {
  const [idx, setIdx] = useState(startIdx);
  const prev = () => setIdx((idx - 1 + images.length) % images.length);
  const next = () => setIdx((idx + 1) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full text-white hover:bg-white/20 flex items-center justify-center z-10">
        <X size={20} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-4 text-white hover:text-ocean-300 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20">
        <ChevronLeft size={28} />
      </button>
      <motion.div
        key={idx}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-5xl aspect-[4/3]"
        onClick={e => e.stopPropagation()}
      >
        <Image src={images[idx]} alt="" fill className="object-contain rounded-xl" />
      </motion.div>
      <button onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-4 text-white hover:text-ocean-300 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20">
        <ChevronRight size={28} />
      </button>
      <div className="absolute bottom-4 text-white/50 text-sm">{idx + 1} / {images.length}</div>
    </motion.div>
  );
}

export default function VillaAreas() {
  const { lang } = useLang();
  const t = T[lang];
  const areas = AREAS[lang];
  const [activeId, setActiveId] = useState(areas[0].id);
  const [lightbox, setLightbox] = useState(null); // { images, startIdx }

  const active = areas.find(a => a.id === activeId);

  return (
    <section id="areas" className="py-24 bg-gradient-to-b from-white to-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-8 bg-ocean-500 rounded-full" />
            <span className="text-ocean-500 text-sm font-semibold uppercase tracking-wider">Villa Spaces</span>
            <div className="h-0.5 w-8 bg-ocean-500 rounded-full" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">{t.sub}</p>
        </motion.div>

        {/* Tab Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {areas.map(area => (
            <button
              key={area.id}
              onClick={() => setActiveId(area.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeId === area.id
                  ? 'bg-ocean-500 text-white shadow-md shadow-ocean-200'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-ocean-300 hover:text-ocean-600'
              }`}
            >
              <span>{area.icon}</span>
              <span>{area.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Description */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 sticky top-24">
                  <div className="w-14 h-14 bg-gradient-to-br from-ocean-100 to-ocean-200 rounded-2xl flex items-center justify-center text-3xl mb-5">
                    {active.icon}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">{active.name}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{active.desc}</p>
                  <div className="mt-5 pt-5 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-ocean-400" />
                    {active.images.length} {t.viewAll}
                  </div>
                </div>
              </div>

              {/* Photo Grid */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                {active.images.length === 3 ? (
                  <div className="grid grid-cols-2 gap-3">
                    <div
                      className="col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer group"
                      onClick={() => setLightbox({ images: active.images, startIdx: 0 })}
                    >
                      <Image src={active.images[0]} alt={active.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </div>
                    {active.images.slice(1).map((img, i) => (
                      <div
                        key={i}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
                        onClick={() => setLightbox({ images: active.images, startIdx: i + 1 })}
                      >
                        <Image src={img} alt={`${active.name} ${i + 2}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {active.images.map((img, i) => (
                      <div
                        key={i}
                        className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                          i === 0 ? 'col-span-2 sm:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                        }`}
                        onClick={() => setLightbox({ images: active.images, startIdx: i })}
                      >
                        <Image src={img} alt={`${active.name} ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        {i === active.images.length - 1 && active.images.length > 4 && (
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">+{active.images.length - (i)}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            images={lightbox.images}
            startIdx={lightbox.startIdx}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
