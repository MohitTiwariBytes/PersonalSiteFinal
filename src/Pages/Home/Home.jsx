import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Home.css";
import Intro from "../../Components/Intro/Intro";
import Navbar from "../../Components/Navbar/Navbar";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <div className="main-home-page">
      <div className="home-page">
        <Intro></Intro>
        <div className="nav">
          <Navbar></Navbar>
        </div>
      </div>
    </div>
  );
};

export default Home;
