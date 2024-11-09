import React, { useEffect } from "react";
import gsap from "gsap";
import "./FirstSection.css";
import Navbar from "../../../Components/Navbar/Navbar";
import ScrollTrigger from "gsap/ScrollTrigger";
import foodzyLogo from "../../../assets/Images/foodzyLogo-BZPrcbGz.png";
import hackClubFinder from "../../../assets/Images/icon-rounded.svg";
import astrohacksLogo from "../../../assets/Images/astrohacksHeadLogo.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function FirstSection() {
  useEffect(() => {
    // Set initial position of the text for animation
    gsap.set("#ye p", { top: "200px" });

    // ScrollTrigger animation for ".project" elements
    gsap.fromTo(
      ".project",
      {
        y: 300,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power1.inOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".projects",
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );

    // ScrollTrigger animation for ".ada span"
    gsap.fromTo(
      ".ada span",
      {
        top: 0,
      },
      {
        top: "-415px",
        duration: 1,
        ease: "power4.inOut",
        stagger: 0.01,
        onComplete: () => {
          gsap.fromTo(
            "#ye p",
            {
              top: "200px",
            },
            {
              top: "0px",
              duration: 1,
              ease: "power4.inOut",
              stagger: 0.01,
            }
          );
        },
      }
    );
  }, []);

  return (
    <div className="main-first-section-work">
      <div className="firstSectionWork">
        <div className="nav">
          <Navbar />
        </div>
        <div className="sadf">
          <h1>
            <div className="ada">
              <span id="he">W</span>
              <span>O</span>
              <span>R</span>
              <span>
                <z>K</z>
              </span>
              <span>s.</span>
            </div>
            <div className="ada">
              <span>W</span>
              <span>O</span>
              <span>R</span>
              <span>
                <z>K</z>
              </span>
              <span>s.</span>
            </div>
            <div className="ada">
              <span>W</span>
              <span>O</span>
              <span>R</span>
              <span>
                <z>K</z>
              </span>
              <span>s.</span>
            </div>
          </h1>
          <span id="ye">
            <p>See</p>
            <p>some</p>
            <p>of</p>
            <p>my</p>
            <p>best</p>
            <p>work</p>
            <p>below!</p>
          </span>
        </div>
      </div>
    </div>
  );
}
