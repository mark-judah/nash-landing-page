import React from "react";
import Navbar from './components/Navbar'
import NavbarMobile from "./components/NavbarMobile";
import Intro from "./components/Intro";
import IntroMobile from "./components/IntroMobile";
import About from './components/About'
import AboutMobile from './components/AboutMobile'
import Services from "./components/Services";
import ServicesMobile from "./components/ServicesMobile";
import Why from "./components/Why";
import WhyMobile from "./components/WhyMobile";
import Footer from "./components/Footer";
import FooterMobile from "./components/FooterMobile";



function App() {
  return (
    <div className="bg-[#d7e7ef] dark:bg-[#314255]">

      <div className="hidden xl:block">
        <Navbar />
      </div>
      <div className="xl:hidden">
        <NavbarMobile />
      </div>

      <div className="hidden xl:block">
        <Intro />
      </div>
      <div className="xl:hidden">
        <IntroMobile />
      </div>

      <div className="hidden xl:block">
        <About />
      </div>
      <div className="xl:hidden">
        <AboutMobile />
      </div>

      <div className="hidden xl:block">
        <Services />
      </div>
      <div className="xl:hidden">
        <ServicesMobile />
      </div>

      <div className="hidden xl:block">
        <Why />
      </div>
      <div className="xl:hidden">
        <WhyMobile />
      </div>

      <div className="hidden xl:block">
        <Footer />
      </div>
      <div className="xl:hidden">
        <FooterMobile />
      </div>

    </div>
  );
}

export default App;
