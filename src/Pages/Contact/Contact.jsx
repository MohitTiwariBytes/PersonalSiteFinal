import "./Contact.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "../../Components/Navbar/Navbar";
import FirstSection from "./FirstSection/FirstSection";
import Footer from "../../Components/Footer/Footer";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  return (
    <ReactLenis
      root
    >
      <div className="main-contact-page">
        <div className="nav">
          <Navbar />
        </div>
        <FirstSection />
        <Footer />
      </div>
    </ReactLenis>
  );
}