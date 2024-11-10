import React from "react";
import "./Contact.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "../../Components/Navbar/Navbar";
import FirstSection from "./FirstSection/FirstSection";
import Footer from "../../Components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  return (
    <div className="main-contact-page">
      <div className="nav">
        <Navbar></Navbar>
      </div>
      <FirstSection></FirstSection>
      <Footer></Footer>
    </div>
  );
}
