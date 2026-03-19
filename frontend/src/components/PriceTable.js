'use client';
import { useLang } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const ROWS = {
  vi: [
    { rooms: 'Phòng 101, 301', area: '25m²', view: 'Hướng sân vườn', note: 'Phòng 301 có ban công', price: '1,600,000', highlight: false },
    { rooms: 'Phòng 102, 203, 305', area: '32m²', view: 'Hướng sân vườn', note: '', price: '2,000,000', highlight: false },
    { rooms: 'Phòng 201, 303', area: '40m²', view: 'Hướng biển', note: '', price: '2,600,000', highlight: false },
    { rooms: 'Phòng 202, 302, 304', area: '40m²', view: 'Hướng biển', note: 'Có ban công', price: '3,000,000', highlight: false },
    { rooms: 'Thuê nguyên căn — Cuối tuần (T6, T7, CN)', area: '2,000m² · 10 phòng', view: '20 NL + 10 trẻ em', note: 'Trọn gói cuối tuần', price: '22,200,000', highlight: false },
    { rooms: 'Thuê nguyên căn — Trong tuần (T2 – T5)', area: '2,000m² · 10 phòng', view: '20 NL + 10 trẻ em', note: 'Ngày thường', price: '16,650,000', highlight: false },
    { rooms: '🎉 Nguyên căn — Ngày lễ lớn (30/4, 1/5, 2/9)', area: '2,000m² · 10 phòng', view: '20 NL + 10 trẻ em', note: 'Lễ đặc biệt', price: '30,200,000', highlight: true },
  ],
  en: [
    { rooms: 'Room 101, 301', area: '25m²', view: 'Garden View', note: 'Room 301 has balcony', price: '1,600,000', highlight: false },
    { rooms: 'Room 102, 203, 305', area: '32m²', view: 'Garden View', note: '', price: '2,000,000', highlight: false },
    { rooms: 'Room 201, 303', area: '40m²', view: 'Sea View', note: '', price: '2,600,000', highlight: false },
    { rooms: 'Room 202, 302, 304', area: '40m²', view: 'Sea View', note: 'With balcony', price: '3,000,000', highlight: false },
    { rooms: 'Full Villa — Weekend (Fri, Sat, Sun)', area: '2,000m² · 10 rooms', view: '20 Adults + 10 Children', note: 'Weekend package', price: '22,200,000', highlight: false },
    { rooms: 'Full Villa — Weekday (Mon – Thu)', area: '2,000m² · 10 rooms', view: '20 Adults + 10 Children', note: 'Weekday rate', price: '16,650,000', highlight: false },
    { rooms: '🎉 Full Villa — Public Holidays (Apr 30, May 1, Sep 2)', area: '2,000m² · 10 rooms', view: '20 Adults + 10 Children', note: 'Holiday special', price: '30,200,000', highlight: true },
  ],
};

const HEADERS = {
  vi: ['Phòng', 'Diện tích', 'Hướng / Sức chứa', 'Ghi chú', 'Giá / đêm (VNĐ)'],
  en: ['Room', 'Area', 'View / Capacity', 'Note', 'Price / Night (VND)'],
};

const NOTES = {
  vi: [
    'Giá phòng gồm 2 người lớn và 1 trẻ em dưới 7 tuổi.',
    'Trẻ từ 7–11 tuổi: phụ thu 200,000 VNĐ / bé / đêm.',
    'Từ 12 tuổi trở lên: phụ thu 400,000 VNĐ / người / đêm (tính bằng người lớn).',
    'Villa cho phép thú cưng nhưng không mang vào phòng vì nhiều khách dị ứng.',
    'Giá trên chưa bao gồm ăn sáng và tối. Vui lòng note nếu có nhu cầu để báo giá riêng.',
  ],
  en: [
    'Room rate includes 2 adults and 1 child under 7 years old.',
    'Children aged 7–11: surcharge of 200,000 VND / child / night.',
    'Aged 12 and above: surcharge of 400,000 VND / person / night (same as adults).',
    'Pets are welcome at the villa but are not allowed inside rooms due to guest allergies.',
    'Rates above do not include breakfast or dinner. Please note if interested for a separate quote.',
  ],
};

const T = {
  vi: { title: 'Bảng giá Calmaria Bay Villa', sub: 'Giá niêm yết chưa bao gồm thuế', noteTitle: 'Lưu ý:' },
  en: { title: 'Calmaria Bay Villa Pricing', sub: 'Listed prices do not include tax', noteTitle: 'Notes:' },
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
          <p className="text-gray-500 text-lg">{t.sub}</p>
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
                        {row.rooms}
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-500 text-sm">{row.area}</td>
                    <td className="px-5 py-4 text-gray-500 text-sm">{row.view}</td>
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
      </div>
    </section>
  );
}
