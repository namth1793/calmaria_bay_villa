'use client';
import logo from '@/assets/calmaria_logo.jpg';
import { Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Danh sách phòng', href: '#rooms' },
  { label: 'Bảng giá', href: '#pricing' },
  { label: 'Đánh giá', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

function ContactPopup({ onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors">
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
          <a href="tel:0337866206"
            className="flex items-center gap-4 p-4 bg-ocean-50 rounded-2xl hover:bg-ocean-100 transition-colors group">
            <div className="w-10 h-10 bg-ocean-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Phone size={18} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Điện thoại / Zalo</p>
              <p className="font-bold text-gray-900 group-hover:text-ocean-700">0337 866 206</p>
            </div>
          </a>

          <a href="https://zalo.me/0337866206" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors group">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Chat Zalo</p>
              <p className="font-bold text-gray-900 group-hover:text-green-700">Nhắn tin ngay</p>
            </div>
          </a>

          <a href="mailto:calmariabayvilla@gmail.com"
            className="flex items-center gap-4 p-4 bg-sand-50 rounded-2xl hover:bg-sand-100 transition-colors group">
            <div className="w-10 h-10 bg-sand-400 rounded-xl flex items-center justify-center flex-shrink-0">
              <Mail size={18} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Email</p>
              <p className="font-bold text-gray-900 group-hover:text-sand-600 text-sm">calmariabayvilla@gmail.com</p>
            </div>
          </a>

          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
            <div className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin size={18} className="text-gray-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Địa chỉ</p>
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
            className="flex-1 py-3 bg-ocean-500 text-white rounded-xl text-center font-semibold hover:bg-ocean-600 transition-colors text-sm">
            Gọi ngay
          </a>
          <a href="https://zalo.me/0337866206" target="_blank" rel="noopener noreferrer"
            className="flex-1 py-3 bg-green-500 text-white rounded-xl text-center font-semibold hover:bg-green-600 transition-colors text-sm">
            Zalo
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-md' : 'shadow-sm'
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
                  className="text-sm font-medium text-gray-700 hover:text-ocean-600 transition-colors">
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => setShowContact(true)}
                className="text-sm font-medium text-gray-700 hover:text-ocean-600 transition-colors">
                Liên hệ
              </button>
              <a href="#rooms"
                className="ml-2 px-5 py-2.5 bg-ocean-500 text-white rounded-full text-sm font-semibold hover:bg-ocean-600 transition-colors">
                Đặt phòng ngay
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2.5 px-3 text-gray-700 hover:bg-sand-50 hover:text-ocean-600 rounded-lg transition-colors">
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { setMenuOpen(false); setShowContact(true); }}
                className="block w-full text-left py-2.5 px-3 text-gray-700 hover:bg-sand-50 hover:text-ocean-600 rounded-lg transition-colors">
                Liên hệ
              </button>
              <a href="#rooms" onClick={() => setMenuOpen(false)}
                className="block mt-2 py-2.5 px-3 bg-ocean-500 text-white rounded-lg text-center font-semibold">
                Đặt phòng ngay
              </a>
            </div>
          </div>
        )}
      </header>

      {showContact && <ContactPopup onClose={() => setShowContact(false)} />}
    </>
  );
}
