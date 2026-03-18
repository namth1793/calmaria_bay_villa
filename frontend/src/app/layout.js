import './globals.css';

export const metadata = {
  title: 'Calmaria Bay Villa | Luxury Beachfront Villa Hạ Long',
  description: 'Biệt thự nghỉ dưỡng sang trọng tại Tuần Châu, Hạ Long với hồ bơi riêng, sân vườn và không gian yên bình.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
