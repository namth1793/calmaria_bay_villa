'use client';
import { useLang } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const ROWS = {
  vi: [
    { label: 'Nguyên căn — Cuối tuần (T6, T7, CN)', area: '2,000m²', capacity: '20 NL + 10 trẻ em', note: 'Trọn gói cuối tuần', price: '22,200,000', highlight: false },
    { label: 'Nguyên căn — Trong tuần (T2 – T5)', area: '2,000m²', capacity: '20 NL + 10 trẻ em', note: 'Ngày thường', price: '16,650,000', highlight: false },
    { label: '🎉 Nguyên căn — Ngày lễ lớn (30/4, 1/5, 2/9)', area: '2,000m²', capacity: '20 NL + 10 trẻ em', note: 'Dịp lễ đặc biệt', price: '30,200,000', highlight: true },
  ],
  en: [
    { label: 'Full Villa — Weekend (Fri, Sat, Sun)', area: '2,000m²', capacity: '20 Adults + 10 Children', note: 'Weekend package', price: '22,200,000', highlight: false },
    { label: 'Full Villa — Weekday (Mon – Thu)', area: '2,000m²', capacity: '20 Adults + 10 Children', note: 'Weekday rate', price: '16,650,000', highlight: false },
    { label: '🎉 Full Villa — Public Holidays (Apr 30, May 1, Sep 2)', area: '2,000m²', capacity: '20 Adults + 10 Children', note: 'Holiday special', price: '30,200,000', highlight: true },
  ],
};

const HEADERS = {
  vi: ['Loại / Ngày thuê', 'Diện tích', 'Sức chứa', 'Ghi chú', 'Giá / đêm (VNĐ)'],
  en: ['Type / Day', 'Area', 'Capacity', 'Note', 'Price / Night (VND)'],
};

const NOTES = {
  vi: [
    'Sức chứa tối đa: 20 người lớn + 10 trẻ em (tổng 30 người).',
    'Trẻ từ 7–11 tuổi: phụ thu 200,000 VNĐ / bé / đêm.',
    'Từ 12 tuổi trở lên: phụ thu 400,000 VNĐ / người / đêm.',
    'Villa không cho phép thú cưng mang vào.',
    'Giá trên chưa bao gồm ăn sáng và tối. Vui lòng liên hệ để báo giá thêm.',
  ],
  en: [
    'Maximum capacity: 20 adults + 10 children (30 guests total).',
    'Children aged 7–11: surcharge of 200,000 VND / child / night.',
    'Aged 12 and above: surcharge of 400,000 VND / person / night.',
    'Pets are not allowed in the villa.',
    'Rates do not include meals. Please contact us for catering add-ons.',
  ],
};

const T = {
  vi: {
    title: 'Bảng giá thuê nguyên căn',
    sub: 'Calmaria Bay Villa cho thuê theo hình thức nguyên căn — trọn vẹn không gian riêng tư cho gia đình và nhóm bạn',
    noteTitle: 'Lưu ý:',
    badge: '10 phòng ngủ · Nguyên căn',
    ctaText: 'Liên hệ đặt nguyên căn',
    ctaSub: '0337 866 206 · Zalo · calmariabayvilla@gmail.com',
  },
  en: {
    title: 'Full Villa Rental Pricing',
    sub: 'Calmaria Bay Villa is available for full exclusive rental — complete private space for your family or group',
    noteTitle: 'Notes:',
    badge: '10 bedrooms · Exclusive villa',
    ctaText: 'Contact to Book the Villa',
    ctaSub: '0337 866 206 · Zalo · calmariabayvilla@gmail.com',
  },
};

export default function PriceTable() {
  const { lang } = useLang();
  const t = T[lang];
  const rows = ROWS[lang];
  const headers = HEADERS[lang];
  const notes = NOTES[lang];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-sand-50 to-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-8 bg-ocean-500 rounded-full" />
            <span className="text-ocean-500 text-sm font-semibold uppercase tracking-wider">Pricing</span>
            <div className="h-0.5 w-8 bg-ocean-500 rounded-full" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t.sub}</p>
          <div className="inline-flex items-center gap-2 mt-4 bg-ocean-50 text-ocean-600 border border-ocean-100 px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-ocean-500 rounded-full" />
            {t.badge}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-ocean-600 to-ocean-700 text-white">
                  {headers.map((h, i) => (
                    <th key={i} className={`px-5 py-4 text-sm font-semibold ${i === headers.length - 1 ? 'text-right' : 'text-left'}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}
                    className={`border-b border-gray-100 transition-colors ${
                      row.highlight
                        ? 'bg-amber-50 border-amber-100'
                        : i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    } hover:bg-ocean-50/60`}
                  >
                    <td className="px-5 py-4">
                      <div className={`font-semibold text-sm ${row.highlight ? 'text-amber-700' : 'text-gray-800'}`}>
                        {row.label}
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-500 text-sm">{row.area}</td>
                    <td className="px-5 py-4 text-gray-500 text-sm">{row.capacity}</td>
                    <td className="px-5 py-4">
                      {row.note && (
                        <span className={`inline-block text-xs px-2.5 py-1 rounded-full font-medium ${
                          row.highlight ? 'bg-amber-100 text-amber-700' : 'bg-ocean-50 text-ocean-600'
                        }`}>
                          {row.note}
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-right">
                      <span className={`font-bold text-lg ${row.highlight ? 'text-amber-600' : 'text-ocean-700'}`}>
                        {row.price}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Notes */}
          <div className="px-6 py-5 bg-gradient-to-r from-sand-50 to-ocean-50/30 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-700 mb-2.5">{t.noteTitle}</p>
            <ul className="space-y-1.5">
              {notes.map((note, i) => (
                <li key={i} className="text-sm text-gray-500 flex gap-2">
                  <span className="text-ocean-400 mt-0.5 shrink-0">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a href="#booking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-ocean-500 to-ocean-600 text-white rounded-full font-semibold hover:from-ocean-600 hover:to-ocean-700 transition-all shadow-lg shadow-ocean-200 hover:shadow-xl hover:-translate-y-0.5">
            {t.ctaText} →
          </a>
          <p className="text-xs text-gray-400 mt-3">{t.ctaSub}</p>
        </motion.div>
      </div>
    </section>
  );
}
