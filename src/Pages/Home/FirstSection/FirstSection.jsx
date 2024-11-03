import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "./FirstSection.css";
import Marquee from "react-fast-marquee";

const FirstSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 575);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 575);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const mainTextWords = document.querySelectorAll(".stagger-text span");
    const smallTextWords = document.querySelectorAll(".smallTextBottom span");

    // Animation for main header text
    gsap.fromTo(
      mainTextWords,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        delay: 2.8,
      }
    );

    // Animation for line divider
    gsap.fromTo(
      ".line-divider",
      { width: 0 },
      {
        width: "100%",
        duration: 1,
        ease: "power3.out",
        delay: 2.8,
      }
    );

    // Animation for smaller text
    gsap.fromTo(
      smallTextWords,
      { top: "100px" },
      {
        top: "0",
        stagger: 0.01,
        duration: 1,
        ease: "power3.out",
        delay: 3.5,
      }
    );
  }, []);

  return (
    <div className="main-first-section-home">
      <div className="first-section-home">
        <div className="left">
          <h1 id="stagger-text" className="stagger-text">
            {isMobile ? (
              <>
                <span>I</span> <span>design</span> <span>engaging,</span>{" "}
                <span>visually</span> <span>captivating</span>{" "}
                <span>experiences.</span>
              </>
            ) : (
              <>
                <span>I</span> <span>design</span> <span>and</span>{" "}
                <span>develop</span> <span>engaging,</span>{" "}
                <span>visually</span> <span>captivating</span>{" "}
                <span>digital</span> <span>experiences</span>{" "}
                <span>through</span> <span>code.</span>
              </>
            )}
          </h1>
          <div className="line-divider"></div>
          <div className="smallTextBottom">
            <h1>
              <span>I</span> <span>am</span> <span>Mohit</span>{" "}
              <span>Tiwari,</span> <span>a</span> <span>13</span>{" "}
              <span>year</span> <span>old</span> <span>teenager</span>{" "}
              <span>from</span> <span>Uttar</span> <span>Pradesh,</span>{" "}
              <span>India.</span>
            </h1>
          </div>
        </div>
        <div className="marquee">
          <Marquee className="asd" direction="left">
            Developer • Designer • Gamer • Developer • Designer • Gamer •
            Developer • Designer • Gamer • Developer • Designer • Gamer
          </Marquee>
          <Marquee className="asd" direction="right">
            Developer • Designer • Gamer • Developer • Designer • Gamer •
            Developer • Designer • Gamer • Developer • Designer • Gamer
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
