'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Liên hệ</h2>
          <p className="text-gray-500">Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              {
                icon: <MapPin className="text-ocean-500" />,
                label: 'Địa chỉ',
                value: '05BT Calmaria Bay Villa\nCảng Quốc Tế Tuần Châu\nHạ Long, Quảng Ninh'
              },
              {
                icon: <Phone className="text-ocean-500" />,
                label: 'Điện thoại / Zalo',
                value: '0337 866 206'
              },
              {
                icon: <Mail className="text-ocean-500" />,
                label: 'Email',
                value: 'calmariabayvilla@gmail.com'
              },
              {
                icon: <Clock className="text-ocean-500" />,
                label: 'Giờ làm việc',
                value: 'Thứ 2 – Chủ nhật: 7:00 – 22:00\nHỗ trợ khẩn cấp: 24/7'
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-5 bg-sand-50 rounded-2xl"
              >
                <div className="w-10 h-10 bg-ocean-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-0.5">{item.label}</div>
                  <div className="font-medium text-gray-800 whitespace-pre-line">{item.value}</div>
                </div>
              </motion.div>
            ))}

            <div className="flex gap-3 mt-6">
              <a href="tel:0337866206"
                className="flex-1 py-3 bg-ocean-500 text-white rounded-xl text-center font-semibold hover:bg-ocean-600 transition-colors text-sm">
                Gọi ngay
              </a>
              <a href="https://zalo.me/0337866206" target="_blank" rel="noopener noreferrer"
                className="flex-1 py-3 bg-green-500 text-white rounded-xl text-center font-semibold hover:bg-green-600 transition-colors text-sm">
                Chat Zalo
              </a>
              <a href="mailto:calmariabayvilla@gmail.com"
                className="flex-1 py-3 border-2 border-ocean-300 text-ocean-700 rounded-xl text-center font-semibold hover:bg-ocean-50 transition-colors text-sm">
                Email
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-lg h-[450px] bg-gray-100"
          >
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=106.9871%2C20.9181%2C106.9971%2C20.9241&layer=mapnik&marker=20.92105796459224%2C106.99210430583376"
              width="100%" height="100%" style={{ border: 0 }}
              allowFullScreen="" loading="lazy"
              title="Calmaria Bay Villa Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
