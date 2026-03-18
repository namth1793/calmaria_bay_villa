import Header from '@/components/Header';
import Hero from '@/components/Hero';
import RoomList from '@/components/RoomList';
import PriceTable from '@/components/PriceTable';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RoomList />
        <PriceTable />
        <Gallery />
        <Reviews />
        <About />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
