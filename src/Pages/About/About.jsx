import React from "react";
import "./About.css";
import FirstSection from "./FirstSection/FirstSection";
import Footer from "../../Components/Footer/Footer";
import { ReactLenis, useLenis } from "lenis/react";

export default function About() {
  return (
    <ReactLenis root options={{ autoRaf: true }}>
      <div className="main-about">
        <FirstSection></FirstSection>
        <Footer></Footer>
      </div>
    </ReactLenis>
  );
}
