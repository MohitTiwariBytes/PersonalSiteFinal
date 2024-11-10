import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SecondSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function SecondSection() {
  useEffect(() => {
    gsap.fromTo(
      ".secondSectionWork",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "power4.out",
        duration: 1,
        stagger: 0.06,
        scrollTrigger: {
          trigger: ".secondSectionWork",
          start: "top 80%",
          once: true,
          markers: false,
        },
      }
    );
  }, []);
  return (
    <div className="main-second-section-work">
      <div className="secondSectionWork">
        <h1>Hang on tight, Some awesome projects coming soon!</h1>
      </div>
    </div>
  );
}
