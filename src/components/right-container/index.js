import React from "react";
import AboutSection from "./about-section";
import ContactSection from "./contact-section";
import HomeSection from "./home-section";
import PortfolioSection from "./portfolio-section";
// import SEO from "./seo";
import "./style.scss";

const InformationContainer = () => {
  return (
    <div className="information-box">
      {/* <SEO /> */}
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default InformationContainer;
