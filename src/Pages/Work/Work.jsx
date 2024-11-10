import React from "react";
import "./Work.css";
import FirstSection from "./FirstSection/FirstSection";
import Footer from "../../Components/Footer/Footer";
import SecondSection from "./SecondSection/SecondSection";

export default function Work() {
  return (
    <div className="main-work-page">
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <Footer></Footer>
    </div>
  );
}
