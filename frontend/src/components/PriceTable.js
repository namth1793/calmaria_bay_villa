'use client';
import { motion } from 'framer-motion';

const rows = [
  { rooms: 'Phòng 101, 301', area: '25m²', price: '1,600,000', note: '', highlight: false },
  { rooms: 'Phòng 102, 203, 305', area: '32m²', price: '2,000,000', note: '', highlight: false },
  { rooms: 'Phòng 201, 202, 302, 303, 304', area: '40m²', price: '2,600,000', note: 'Chỉ thuê nguyên căn', highlight: false },
  { rooms: 'Thuê nguyên căn (Thứ 6, 7, CN)', area: '10 phòng', price: '22,200,000', note: 'Trọn gói cuối tuần', highlight: false },
  { rooms: 'Thuê nguyên căn (Thứ 2 – 5)', area: '10 phòng', price: '16,650,000', note: 'Ngày thường', highlight: false },
  { rooms: '🎉 Giá dịp lễ (30/4, 1/5...)', area: '10 phòng', price: '30,192,000', note: 'Dịp lễ đặc biệt', highlight: true },
];

export default function PriceTable() {
  return (
    <section id="pricing" className="py-20 bg-sand-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Bảng giá Calmaria Bay Villa</h2>
          <p className="text-gray-500">Giá niêm yết đã bao gồm thuế và các tiện ích cơ bản</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-ocean-500 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Số phòng</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Diện tích</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">Đơn giá / đêm (VNĐ)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Ghi chú</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}
                    className={`border-b border-sand-100 transition-colors ${
                      row.highlight
                        ? 'bg-amber-50 border-amber-200'
                        : i % 2 === 0 ? 'bg-white' : 'bg-sand-50/50'
                    } hover:bg-ocean-50`}
                  >
                    <td className="px-6 py-4">
                      <div className={`font-medium ${row.highlight ? 'text-amber-700' : 'text-gray-800'}`}>
                        {row.rooms}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{row.area}</td>
                    <td className="px-6 py-4 text-right">
                      <span className={`font-bold text-lg ${row.highlight ? 'text-amber-600' : 'text-ocean-700'}`}>
                        {row.price}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-sand-50 text-sm text-gray-500 border-t border-sand-100">
            * Hiện tại villa chưa nhận bán phòng lẻ, chỉ bán nguyên căn. Liên hệ để được tư vấn.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
