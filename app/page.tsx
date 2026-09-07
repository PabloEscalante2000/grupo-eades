import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import WorkWithInstitutions from "./components/WorkWithInstitutions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <WorkWithInstitutions />
      <Contact />
      <Footer />
    </main>
  );
}
