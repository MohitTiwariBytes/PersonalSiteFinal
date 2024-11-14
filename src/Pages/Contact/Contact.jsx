import React from "react";
import "./Contact.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "../../Components/Navbar/Navbar";
import FirstSection from "./FirstSection/FirstSection";
import Footer from "../../Components/Footer/Footer";
import { ReactLenis, useLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  return (
    <ReactLenis root options={{ autoRaf: true }}>
      <div className="main-contact-page">
        <div className="nav">
          <Navbar></Navbar>
        </div>
        <FirstSection></FirstSection>
        <Footer></Footer>
      </div>
    </ReactLenis>
  );
}
