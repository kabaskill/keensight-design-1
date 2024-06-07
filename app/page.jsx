import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import Faq from "@/components/faq";
import Header2 from "@/components/header2";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <Services />
        <Header2 />
        
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
