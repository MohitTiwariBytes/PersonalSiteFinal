import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "../../../Components/Navbar/Navbar";
import "./FirstSection.css";
import myImage from "../../../assets/Images/IMG_1098.jpg";
import Button from "../../../Components/ButtonAnimated/Button";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

export default function FirstSection() {
  useEffect(() => {
    gsap.fromTo(
      ".mainImageRight img",
      {
        height: "0px",
      },
      {
        height: "600px",
        duration: 0.8,
        ease: "power3.inOut",
      }
    );
  }, []);
  return (
    <div className="main-first-section-about">
      <div className="firstSectionAbout">
        <div className="nav">
          <Navbar></Navbar>
        </div>
        <div className="asdas">
          <div className="topLeftAbout">
            <div className="asdadasdnx">
              <h1>About me.</h1>

              <span>
                Hi! I am Mohit Tiwari, a 13 year old teenager from India, I
                started my coding journey when i was 10, When i turned 11, I
                learned how to create a site, I started digging deeper onto it
                and then now, I know what i have to do in my future, I love
                creating awesome sites!
              </span>
              <Button
                text="Let's talk"
                buttonColor="black"
                buttonHoverColor="white"
                textColor="#fff"
                textHoverColor="black"
              />

              <span id="adiadnc">Skills</span>

              <Marquee className="asdasdf" direction="left">
                ‎ HTML • CSS • JavaScript • React.JS • GSAP • Framer Motion •
                Python • Firebase • Mongo.DB • Node.JS • Photoshop •
              </Marquee>
            </div>
          </div>

          <div className="mainImageRight">
            <img src={myImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
