'use client';
import { useState } from 'react';
import { X, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import logo from '@/assets/calmaria_logo.jpg';

function ContactPopup({ onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors">
          <X size={22} />
        </button>
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-ocean-50 rounded-2xl flex items-center justify-center mx-auto mb-3">
            <span className="text-3xl">🏖️</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900">Liên hệ với chúng tôi</h2>
          <p className="text-gray-500 text-sm mt-1">Calmaria Bay Villa · Hạ Long</p>
        </div>
        <div className="space-y-4">
          <a href="tel:0337866206" className="flex items-center gap-4 p-4 bg-ocean-50 rounded-2xl hover:bg-ocean-100 transition-colors group">
            <div className="w-10 h-10 bg-ocean-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Phone size={18} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Điện thoại / Zalo</p>
              <p className="font-bold text-gray-900 group-hover:text-ocean-700">0337 866 206</p>
            </div>
          </a>
          <a href="mailto:calmariabayvilla@gmail.com" className="flex items-center gap-4 p-4 bg-sand-50 rounded-2xl hover:bg-sand-100 transition-colors group">
            <div className="w-10 h-10 bg-sand-400 rounded-xl flex items-center justify-center flex-shrink-0">
              <Mail size={18} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Email</p>
              <p className="font-bold text-gray-900 text-sm">calmariabayvilla@gmail.com</p>
            </div>
          </a>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
            <div className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin size={18} className="text-gray-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Địa chỉ</p>
              <p className="font-medium text-gray-800 text-sm leading-snug">
                05BT Calmaria Bay Villa<br />Cảng Quốc Tế Tuần Châu<br />Hạ Long, Quảng Ninh
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <a href="tel:0337866206" className="flex-1 py-3 bg-ocean-500 text-white rounded-xl text-center font-semibold hover:bg-ocean-600 transition-colors text-sm">Gọi ngay</a>
          <a href="https://zalo.me/0337866206" target="_blank" rel="noopener noreferrer" className="flex-1 py-3 bg-green-500 text-white rounded-xl text-center font-semibold hover:bg-green-600 transition-colors text-sm">Zalo</a>
        </div>
      </div>
    </div>
  );
}

const footerLinks = [
  { label: 'Danh sách phòng', href: '#rooms' },
  { label: 'Bảng giá', href: '#pricing' },
  { label: 'Đánh giá', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export default function Footer() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div>
                  <div className="font-serif font-bold text-lg">Calmaria Bay Villa</div>
                  <div className="text-xs text-gray-400">Luxury Beachfront Villa · Hạ Long</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Biệt thự nghỉ dưỡng cao cấp tại Tuần Châu, Hạ Long — nơi mang đến kỳ nghỉ hoàn hảo bên gia đình và người thân.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4 text-sand-300">Khám phá</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {footerLinks.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-white transition-colors">{l.label}</a>
                  </li>
                ))}
                <li>
                  <button onClick={() => setShowContact(true)} className="hover:text-white transition-colors text-left">
                    Liên hệ
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact quick */}
            <div>
              <h4 className="font-semibold mb-4 text-sand-300">Liên hệ</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>📍 Cảng Quốc Tế Tuần Châu, Hạ Long</li>
                <li>
                  <a href="tel:0337866206" className="hover:text-white transition-colors">📞 0337 866 206</a>
                </li>
                <li>
                  <a href="mailto:calmariabayvilla@gmail.com" className="hover:text-white transition-colors">✉️ calmariabayvilla@gmail.com</a>
                </li>
              </ul>
              <div className="flex gap-3 mt-4">
                {[
                  { label: 'F', href: '#' },
                  { label: 'I', href: '#' },
                  { label: 'Z', href: 'https://zalo.me/0337866206' },
                ].map(s => (
                  <a key={s.label} href={s.href} target={s.href !== '#' ? '_blank' : undefined} rel="noopener noreferrer"
                    className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-ocean-500 transition-colors text-xs font-bold">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
            <span>© 2025 Calmaria Bay Villa. All rights reserved.</span>
            <span>Powered by <span className="text-sand-400">GainHost.vn</span></span>
          </div>
        </div>
      </footer>

      {showContact && <ContactPopup onClose={() => setShowContact(false)} />}
    </>
  );
}
