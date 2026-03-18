'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';

const images = [
  { src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop', alt: 'Phòng ngủ luxury', span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop', alt: 'Hồ bơi', span: '' },
  { src: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&auto=format&fit=crop', alt: 'Phòng khách', span: '' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop', alt: 'Phòng ăn', span: '' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop', alt: 'View biển', span: '' },
  { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop', alt: 'Vườn xanh', span: '' },
  { src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop', alt: 'Bãi biển', span: '' },
  { src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&auto=format&fit=crop', alt: 'Aerial view', span: '' },
  { src: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&auto=format&fit=crop', alt: 'Nhà bếp', span: '' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Khám phá</h2>
          <p className="text-gray-500">Những khoảnh khắc đẹp tại Calmaria Bay Villa</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${img.span || ''}`}
              onClick={() => setLightbox(img)}
            >
              <Image src={img.src} alt={img.alt} fill
                className="object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium bg-black/40 px-3 py-1 rounded-full">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white hover:text-sand-300 transition-colors">
            <X size={32} />
          </button>
          <div className="relative max-w-4xl w-full aspect-[4/3]">
            <Image src={lightbox.src} alt={lightbox.alt} fill className="object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
