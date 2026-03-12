import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import WorkWithInstitutions from "./components/WorkWithInstitutions";
import OurBrands from "./components/OurBrands";
import Direction from "./components/Direction";
import OurTeam from "./components/OurTeam";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <OurBrands />
      <WorkWithInstitutions />
      <Direction />
      <OurTeam />
      <Contact />
      <Footer />
    </main>
  );
}
