'use client';
import { useLang } from '@/context/LanguageContext';
import { useState } from 'react';
import { X, Phone, Mail, MapPin } from 'lucide-react';

const T = {
  vi: {
    tagline: 'Luxury Beachfront Villa · Hạ Long',
    desc: 'Biệt thự nghỉ dưỡng cao cấp tại Tuần Châu, Hạ Long — nơi mang đến kỳ nghỉ hoàn hảo bên gia đình và người thân.',
    explore: 'Khám phá',
    navLinks: [
      { label: 'Không gian villa', href: '#areas' },
      { label: 'Phòng nghỉ', href: '#rooms' },
      { label: 'Bảng giá', href: '#pricing' },
      { label: 'Đánh giá', href: '#reviews' },
      { label: 'Liên hệ', action: true },
    ],
    contactTitle: 'Liên hệ',
    addr: 'Cảng Quốc Tế Tuần Châu, Hạ Long',
    copyright: '© 2025 Calmaria Bay Villa. All rights reserved.',
    powered: 'Powered by',
    popupTitle: 'Liên hệ với chúng tôi',
    popupSub: 'Calmaria Bay Villa · Hạ Long',
    phoneLabel: 'Điện thoại / Zalo',
    zaloLabel: 'Chat Zalo',
    zaloBtn: 'Nhắn tin ngay',
    emailLabel: 'Email',
    addrLabel: 'Địa chỉ',
    callNow: 'Gọi ngay',
  },
  en: {
    tagline: 'Luxury Beachfront Villa · Ha Long',
    desc: 'A premium resort villa in Tuan Chau, Ha Long — the perfect escape for families and loved ones.',
    explore: 'Explore',
    navLinks: [
      { label: 'Villa Spaces', href: '#areas' },
      { label: 'Rooms', href: '#rooms' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'Contact', action: true },
    ],
    contactTitle: 'Contact',
    addr: 'Tuan Chau International Port, Ha Long',
    copyright: '© 2025 Calmaria Bay Villa. All rights reserved.',
    powered: 'Powered by',
    popupTitle: 'Contact Us',
    popupSub: 'Calmaria Bay Villa · Ha Long',
    phoneLabel: 'Phone / Zalo',
    zaloLabel: 'Chat on Zalo',
    zaloBtn: 'Message Now',
    emailLabel: 'Email',
    addrLabel: 'Address',
    callNow: 'Call Now',
  },
};

function ContactPopup({ onClose, t }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors">
          <X size={22} />
        </button>
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-ocean-200">
            <span className="text-3xl">🏖️</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900">{t.popupTitle}</h2>
          <p className="text-gray-500 text-sm mt-1">{t.popupSub}</p>
        </div>
        <div className="space-y-3">
          <a href="tel:0337866206" className="flex items-center gap-4 p-4 bg-ocean-50 rounded-2xl hover:bg-ocean-100 transition-colors group">
            <div className="w-10 h-10 bg-ocean-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <Phone size={18} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">{t.phoneLabel}</p>
              <p className="font-bold text-gray-900 group-hover:text-ocean-700">0337 866 206</p>
            </div>
          </a>
          <a href="https://zalo.me/0337866206" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors group">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">{t.zaloLabel}</p>
              <p className="font-bold text-gray-900 group-hover:text-green-700">{t.zaloBtn}</p>
            </div>
          </a>
          <a href="mailto:calmariabayvilla@gmail.com"
            className="flex items-center gap-4 p-4 bg-sand-50 rounded-2xl hover:bg-sand-100 transition-colors group">
            <div className="w-10 h-10 bg-sand-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <Mail size={18} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">{t.emailLabel}</p>
              <p className="font-bold text-gray-900 text-sm">calmariabayvilla@gmail.com</p>
            </div>
          </a>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
            <div className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin size={18} className="text-gray-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">{t.addrLabel}</p>
              <p className="font-medium text-gray-800 text-sm leading-snug">
                05BT Calmaria Bay Villa<br />Cảng Quốc Tế Tuần Châu<br />Hạ Long, Quảng Ninh
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <a href="tel:0337866206" className="flex-1 py-3 bg-ocean-500 text-white rounded-xl text-center font-semibold hover:bg-ocean-600 transition-colors text-sm shadow-sm">
            {t.callNow}
          </a>
          <a href="https://zalo.me/0337866206" target="_blank" rel="noopener noreferrer"
            className="flex-1 py-3 bg-green-500 text-white rounded-xl text-center font-semibold hover:bg-green-600 transition-colors text-sm shadow-sm">
            Zalo
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  const [showContact, setShowContact] = useState(false);
  const { lang } = useLang();
  const t = T[lang];

  return (
    <>
      <footer className="bg-gray-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <div className="font-serif font-bold text-xl text-white">Calmaria Bay Villa</div>
                <div className="text-xs text-gray-500 mt-0.5">{t.tagline}</div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                {t.desc}
              </p>
              <div className="flex gap-2.5 mt-5">
                {[
                  { label: 'F', href: '#' },
                  { label: 'I', href: '#' },
                  { label: 'Z', href: 'https://zalo.me/0337866206' },
                ].map(s => (
                  <a key={s.label} href={s.href} target={s.href !== '#' ? '_blank' : undefined} rel="noopener noreferrer"
                    className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-ocean-500 hover:border-ocean-500 transition-all text-xs font-bold text-gray-400 hover:text-white">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-5 text-gray-300 text-sm uppercase tracking-wider">{t.explore}</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                {t.navLinks.map(l => (
                  <li key={l.label}>
                    {l.action ? (
                      <button onClick={() => setShowContact(true)} className="hover:text-white transition-colors">
                        {l.label}
                      </button>
                    ) : (
                      <a href={l.href} className="hover:text-white transition-colors">{l.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-5 text-gray-300 text-sm uppercase tracking-wider">{t.contactTitle}</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">📍</span>
                  <span>{t.addr}</span>
                </li>
                <li>
                  <a href="tel:0337866206" className="flex items-center gap-2 hover:text-white transition-colors">
                    📞 0337 866 206
                  </a>
                </li>
                <li>
                  <a href="mailto:calmariabayvilla@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors break-all">
                    ✉️ calmariabayvilla@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600">
            <span>{t.copyright}</span>
            <span>{t.powered} <span className="text-ocean-500">GainHost.vn</span></span>
          </div>
        </div>
      </footer>

      {showContact && <ContactPopup onClose={() => setShowContact(false)} t={t} />}
    </>
  );
}
