import Navbar from "@/components/Navbar";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";

export default function ReviewPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <CustomerReviews />
      </main>
      <Footer />
    </>
  );
}

