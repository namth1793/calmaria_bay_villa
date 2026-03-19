'use client';
import { useLang } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const IMAGES_VI = [
  { src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop', alt: 'Phòng ngủ luxury', span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop', alt: 'Hồ bơi', span: '' },
  { src: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&auto=format&fit=crop', alt: 'Phòng khách', span: '' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop', alt: 'Phòng ăn', span: '' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop', alt: 'View biển', span: '' },
  { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop', alt: 'Vườn xanh', span: '' },
  { src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop', alt: 'Bãi biển', span: '' },
  { src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&auto=format&fit=crop', alt: 'Toàn cảnh', span: '' },
  { src: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&auto=format&fit=crop', alt: 'Nhà bếp', span: '' },
];

const IMAGES_EN = [
  { src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop', alt: 'Luxury Bedroom', span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop', alt: 'Swimming Pool', span: '' },
  { src: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&auto=format&fit=crop', alt: 'Living Room', span: '' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop', alt: 'Dining Area', span: '' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop', alt: 'Sea View', span: '' },
  { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop', alt: 'Garden', span: '' },
  { src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop', alt: 'Private Beach', span: '' },
  { src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&auto=format&fit=crop', alt: 'Aerial View', span: '' },
  { src: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&auto=format&fit=crop', alt: 'Kitchen', span: '' },
];

const T = {
  vi: { title: 'Khám phá', sub: 'Những khoảnh khắc đẹp tại Calmaria Bay Villa' },
  en: { title: 'Gallery', sub: 'Beautiful moments at Calmaria Bay Villa' },
};

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const { lang } = useLang();
  const t = T[lang];
  const images = lang === 'vi' ? IMAGES_VI : IMAGES_EN;

  return (
    <section id="gallery" className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-8 bg-ocean-400 rounded-full" />
            <span className="text-ocean-400 text-sm font-semibold uppercase tracking-wider">Photo Gallery</span>
            <div className="h-0.5 w-8 bg-ocean-400 rounded-full" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-gray-400 text-lg">{t.sub}</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${img.span || ''}`}
              onClick={() => setLightbox(img)}
            >
              <Image src={img.src} alt={img.alt} fill
                className="object-cover group-hover:scale-110 transition-transform duration-600" />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <span className="text-white text-sm font-medium">{img.alt}</span>
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <ZoomIn size={16} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors flex items-center justify-center">
            <X size={20} />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-5xl w-full aspect-[4/3]"
            onClick={e => e.stopPropagation()}
          >
            <Image src={lightbox.src} alt={lightbox.alt} fill className="object-contain rounded-xl" />
          </motion.div>
          <p className="absolute bottom-6 text-white/60 text-sm">{lightbox.alt}</p>
        </motion.div>
      )}
    </section>
  );
}
