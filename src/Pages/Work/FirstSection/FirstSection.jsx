import React, { useEffect } from "react";
import gsap from "gsap";
import "./FirstSection.css";
import Navbar from "../../../Components/Navbar/Navbar";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FirstSection() {
  useEffect(() => {
    // Set initial position of the text for animation
    gsap.set("#ye p", { top: "200px" });

    // ScrollTrigger animation for ".ada span"

    gsap.fromTo(
      ".scrollEoa",
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 0.7,
        ease: "power3.inOut",
      }
    );

    gsap.fromTo(
      ".ada span",
      {
        top: 0,
        opacity: 0,
      },
      {
        opacity: 1,
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

    // Function to update .scrollEoa position based on mouse coordinates
    const updateScrollEoaPosition = (e) => {
      const scrollEoa = document.querySelector(".scrollEoa");
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // GSAP animation to move the .scrollEoa element with the mouse
      gsap.to(scrollEoa, {
        x: mouseX - scrollEoa.offsetWidth / 2 - 1330, // Position horizontally with the mouse
        y: mouseY - scrollEoa.offsetHeight / 2 - 450, // Position vertically with the mouse
        duration: 0.8, // Smooth transition to mouse position
        ease: "power4.out", // Easing for smooth movement
      });
    };

    // Add mousemove event listener to track the mouse position
    document.addEventListener("mousemove", updateScrollEoaPosition);

    // ScrollTrigger to control visibility of .scrollEoa based on scroll position
    ScrollTrigger.create({
      trigger: ".main-first-section-work", // Trigger visibility when entering this section
      start: "top top", // When the top of the section hits the top of the viewport
      end: "bottom top", // When the bottom of the section hits the top of the viewport
      onEnter: () => {
        gsap.to(".scrollEoa", { autoAlpha: 1, scale: 0 }); // Show .scrollEoa when entering section
      },
      onLeave: () => {
        gsap.to(".scrollEoa", { autoAlpha: 0, scale: 1 }); // Hide .scrollEoa when leaving section
      },
      onEnterBack: () => {
        gsap.to(".scrollEoa", { autoAlpha: 0, scale: 0 }); // Show again if scrolling back up
      },
      onLeaveBack: () => {
        gsap.to(".scrollEoa", { autoAlpha: 1, scale: 1 }); // Hide when leaving the section upwards
      },
    });

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousemove", updateScrollEoaPosition);
    };
  }, []);

  return (
    <div className="main-first-section-work">
      <div className="firstSectionWork">
        <div className="nav">
          <Navbar />
        </div>
        <div className="scrollEoa">
          <span>Scroll Down</span>
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
