'use client';
import logo from '@/assets/calmaria_logo.jpg';
import { useLang } from '@/context/LanguageContext';
import { Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const NAV = {
  vi: [
    { label: 'Không gian', href: '#areas' },
    { label: 'Phòng nghỉ', href: '#rooms' },
    { label: 'Bảng giá', href: '#pricing' },
    { label: 'Đánh giá', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ],
  en: [
    { label: 'Spaces', href: '#areas' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ],
};

const T = {
  vi: { contact: 'Liên hệ', book: 'Đặt phòng ngay', callNow: 'Gọi ngay', chatZalo: 'Zalo', popupTitle: 'Liên hệ với chúng tôi', popupSub: 'Calmaria Bay Villa · Hạ Long', phone: 'Điện thoại / Zalo', chatLabel: 'Chat Zalo', chatBtn: 'Nhắn tin ngay', emailLabel: 'Email', addrLabel: 'Địa chỉ' },
  en: { contact: 'Contact', book: 'Book Now', callNow: 'Call Now', chatZalo: 'Zalo', popupTitle: 'Contact Us', popupSub: 'Calmaria Bay Villa · Ha Long', phone: 'Phone / Zalo', chatLabel: 'Chat on Zalo', chatBtn: 'Message Now', emailLabel: 'Email', addrLabel: 'Address' },
};

function ContactPopup({ onClose, lang }) {
  const t = T[lang];
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md animate-in fade-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors">
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
          <a href="tel:0337866206"
            className="flex items-center gap-4 p-4 bg-ocean-50 rounded-2xl hover:bg-ocean-100 transition-colors group">
            <div className="w-10 h-10 bg-ocean-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <Phone size={18} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">{t.phone}</p>
              <p className="font-bold text-gray-900 group-hover:text-ocean-700">0337 866 206</p>
            </div>
          </a>

          <a href="https://zalo.me/0337866206" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors group">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">{t.chatLabel}</p>
              <p className="font-bold text-gray-900 group-hover:text-green-700">{t.chatBtn}</p>
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
                05BT Calmaria Bay Villa<br />
                Cảng Quốc Tế Tuần Châu<br />
                Hạ Long, Quảng Ninh
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <a href="tel:0337866206"
            className="flex-1 py-3 bg-ocean-500 text-white rounded-xl text-center font-semibold hover:bg-ocean-600 transition-colors text-sm shadow-sm">
            {t.callNow}
          </a>
          <a href="https://zalo.me/0337866206" target="_blank" rel="noopener noreferrer"
            className="flex-1 py-3 bg-green-500 text-white rounded-xl text-center font-semibold hover:bg-green-600 transition-colors text-sm shadow-sm">
            {t.chatZalo}
          </a>
        </div>
      </div>
    </div>
  );
}

function LangToggle() {
  const { lang, toggleLang } = useLang();
  return (
    <button
      onClick={toggleLang}
      className="relative flex items-center gap-1 bg-gray-100 hover:bg-gray-200 rounded-full px-1 py-1 transition-colors"
      aria-label="Switch language"
    >
      <span className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${lang === 'vi' ? 'bg-white shadow-sm text-ocean-700' : 'text-gray-500'}`}>
        🇻🇳 VI
      </span>
      <span className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${lang === 'en' ? 'bg-white shadow-sm text-ocean-700' : 'text-gray-500'}`}>
        🇬🇧 EN
      </span>
    </button>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const { lang } = useLang();
  const t = T[lang];
  const navLinks = NAV[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-black/5 border-b border-white/20'
          : 'bg-white shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <Image src={logo} alt="Calmaria Bay Villa" height={56} className="h-12 lg:h-16 w-auto object-contain" priority />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-ocean-600 transition-colors relative group">
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-ocean-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <button
                onClick={() => setShowContact(true)}
                className="text-sm font-medium text-gray-600 hover:text-ocean-600 transition-colors relative group">
                {t.contact}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-ocean-500 group-hover:w-full transition-all duration-300" />
              </button>
              <LangToggle />
            </nav>

            {/* Mobile right */}
            <div className="lg:hidden flex items-center gap-2">
              <LangToggle />
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center py-3 px-3 text-gray-700 hover:bg-ocean-50 hover:text-ocean-600 rounded-xl transition-colors font-medium">
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { setMenuOpen(false); setShowContact(true); }}
                className="flex items-center w-full py-3 px-3 text-gray-700 hover:bg-ocean-50 hover:text-ocean-600 rounded-xl transition-colors font-medium">
                {t.contact}
              </button>
            </div>
          </div>
        )}
      </header>

      {showContact && <ContactPopup onClose={() => setShowContact(false)} lang={lang} />}
    </>
  );
}
