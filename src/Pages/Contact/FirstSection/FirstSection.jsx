import { React, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./FirstSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function FirstSection() {
  useEffect(() => {
    gsap.set("#sdasc span", { top: "400px" });

    gsap.fromTo(
      ".aixms a",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "power3.inOut",
        duration: 0.6,
        stagger: 0.1,
      }
    );

    gsap.fromTo(
      "#ruzds span",
      {
        top: "500px",
      },
      {
        top: "0px",
        ease: "power3.inOut",
        duration: 1.4,
        stagger: 0.03,
        onComplete: () => {
          gsap.fromTo(
            "#sdasc span",
            {
              top: "500px",
            },
            {
              top: "0px",
              ease: "power3.inOut",
              duration: 1.2,
              stagger: 0.01,
            }
          );
        },
      }
    );
  }, []);
  return (
    <div className="main-first-section-contact">
      <div className="firstSectionContact">
        <div className="aids">
          <h1 id="ruzds">
            <div style={{ overflow: "hidden" }} className="">
              <span>Let's</span>
            </div>{" "}
            <div style={{ overflow: "hidden" }} className="">
              <span>get</span>
            </div>{" "}
            <div style={{ overflow: "hidden" }} className="">
              <span>in</span>
            </div>{" "}
            <div style={{ overflow: "hidden" }} className="">
              <span>touch</span>
            </div>{" "}
            <div style={{ overflow: "hidden" }} className="">
              <span>with</span>
            </div>{" "}
            <div style={{ overflow: "hidden" }} className="">
              <span>each</span>
            </div>{" "}
            <div style={{ overflow: "hidden" }} className="">
              <span>other!</span>
            </div>
          </h1>
          <span id="sdasc">
            <div style={{ overflow: "hidden" }}>
              <span>Interested</span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <span>in</span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <span>talking</span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <span>to</span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <span>me?</span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <span>Let's</span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <span>connect!</span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <span>Drop</span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <span>me</span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <span>a</span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <span>line</span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <span>on</span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <span>any</span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <span>of</span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <span>these</span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <span>platforms!</span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <span>I'll</span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <span>try</span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <span>to</span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <span>respond</span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <span>ASAP!</span>
            </div>
          </span>
        </div>
        <div className="aixms">
          <a href="mailto:mohittiwariis97@gmail.com">| Email</a>
          <a href="https://www.instagram.com/codedbymohit/">| Instagram</a>
          <a href="https://www.youtube.com/@---CodeWithMohit">| Youtube</a>
        </div>
      </div>
    </div>
  );
}
