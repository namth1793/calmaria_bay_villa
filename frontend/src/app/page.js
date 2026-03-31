import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import VillaAreas from '@/components/VillaAreas';
import RoomList from '@/components/RoomList';
import PriceTable from '@/components/PriceTable';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <VillaAreas />
        <RoomList />
        <PriceTable />
        <Gallery />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
