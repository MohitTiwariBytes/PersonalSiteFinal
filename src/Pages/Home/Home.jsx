import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Home.css";
import Intro from "../../Components/Intro/Intro";
import Navbar from "../../Components/Navbar/Navbar";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import Footer from "../../Components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <div className="main-home-page">
      <div className="home-page">
        <Intro></Intro>
        <div className="nav">
          <Navbar></Navbar>
        </div>
        <FirstSection></FirstSection>
        <SecondSection></SecondSection>
        <ThirdSection></ThirdSection>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
