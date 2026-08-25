import Hero from "@/features/home/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Pricing from "@/features/home/Pricing/Pricing";
import FAQ from "@/features/home/FAQ/FAQ";
import OverView from '@/features/home/Overview/Overview'

export default function HomePage() {
  return (
    <>
      <Navbar/>
        <Hero />
        <OverView/>
       <Pricing />
        <FAQ />
      <Footer/>
    </>
  );
}