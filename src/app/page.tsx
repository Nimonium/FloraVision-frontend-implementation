import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import TrendyPlants from "@/components/TrendyPlants";
import TopSelling from "@/components/TopSelling";
import CustomerReviews from "@/components/CustomerReviews";
import BestO2 from "@/components/BestO2";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroBanner />
        <TrendyPlants />
        <TopSelling />
        <CustomerReviews />
        <BestO2 />
      </main>
      <Footer />
    </>
  );
}
