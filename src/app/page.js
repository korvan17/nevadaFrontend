import {
  About,
  Faq,
  Footer,
  Header,
  Hero,
  Pricing,
  Services,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Faq />
      <Footer />
      {/* <div id="myportal" /> */}
    </>
  );
}
