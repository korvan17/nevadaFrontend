import Header from "../components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Pricing from "@/components/Pricing/Pricing";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      {/* <Services /> */}
      <Pricing />
      <Faq />
      <Footer />
    </>
  );
}
