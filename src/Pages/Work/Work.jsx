import React from "react";
import "./Work.css";
import FirstSection from "./FirstSection/FirstSection";
import Footer from "../../Components/Footer/Footer";
import SecondSection from "./SecondSection/SecondSection";
import { ReactLenis, useLenis } from "lenis/react";

export default function Work() {
  return (
    <ReactLenis root options={{ autoRaf: true }}>
      <div className="main-work-page">
        <FirstSection></FirstSection>
        <SecondSection></SecondSection>
        <Footer></Footer>
      </div>
    </ReactLenis>
  );
}
