import { React, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./ThirdSection.css";
import myImage from "../../../assets/Images/IMG_1098.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function ThirdSection() {
  useEffect(() => {
    const paragraphs = document.querySelectorAll(".about p");

    gsap.fromTo(
      ".image",
      {
        height: "0px",
      },
      {
        height: "400px",
        ease: "power3.inOut",
        duration: 0.7,
        scrollTrigger: {
          trigger: ".thirdSection",
          start: "top 80%", // Adjusted to start when the top of the section is near the bottom of the viewport
          end: "bottom bottom", // This defines the endpoint for the animation
          scrub: true, // Allows the animation to be smooth with scroll
          toggleActions: "play none none none",
        },
      }
    );

    paragraphs.forEach((paragraph) => {
      gsap.fromTo(
        paragraph,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: paragraph,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="main-third-section">
      <div className="thirdSection">
        <div className="about">
          <div className="left1">
            <span>
              <p>I</p>
              <p> am</p>
              <p> just</p>
              <p> a</p>
              <p> teenager</p>
              <p> who</p>
              <p> is</p>
              <p> interested</p>
              <p> in</p>
              <p> developing</p>
              <p> and</p>
              <p> designing</p>
              <p> amazing</p>
              <p> sites.</p>
              <p> Nothing</p>
              <p> More.</p>
              <p> Nothing</p>
              <p> Less.</p>
            </span>
          </div>
          <div className="image">
            <img src={myImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}