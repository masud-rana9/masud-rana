import React from "react";
import Navber from "./Component/Navber/Navber";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
import Services from "./Component/Services/Services";
import Mywork from "./Component/Mywork/Mywork";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navber />
      <Hero />
      <About />
      <Services />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
