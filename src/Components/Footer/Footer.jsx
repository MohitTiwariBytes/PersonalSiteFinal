import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Footer.css";
import Button from "../ButtonAnimated/Button";
import GlitchText from "@johnn-e/react-glitch-text";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  useEffect(() => {
    gsap.fromTo(
      "#asdsasds span",
      {
        top: "400px",
      },
      {
        top: "0px",
        ease: "power4.out",
        duration: 1,
        stagger: 0.02,
        scrollTrigger: {
          trigger: ".top",
          start: "top 80%",
          once: true,
          markers: false,
        },
      }
    );
    gsap.fromTo(
      "#adjp span",
      {
        top: "400px",
      },
      {
        top: "0px",
        ease: "power4.out",
        duration: 1,
        stagger: 0.06,
        scrollTrigger: {
          trigger: ".bottom",
          start: "top 80%",
          once: true,
          markers: false,
        },
      }
    );
    gsap.fromTo(
      ".navigationFooter a",
      {
        opacity: "0",
      },
      {
        opacity: "1",
        ease: "power4.out",
        duration: 1,
        stagger: 0.06,
        scrollTrigger: {
          trigger: ".navigationFooter",
          start: "top 80%",
          once: true,
          markers: false,
        },
      }
    );
  }, []);

  useEffect(() => {}, []);

  return (
    <div className="footerMain">
      <div className="footer">
        <div className="top">
          <div className="leftFooter">
            <h1 id="asdsasds">
              <span>Wanna</span> <span>work</span> <span>with</span>{" "}
              <span>me?</span> <span>Let's</span> <span>get</span>{" "}
              <span>in</span> <span>touch!</span>
            </h1>
            <Button
              text="Let's Talk!"
              buttonColor="white"
              buttonHoverColor="gray"
              textColor="black"
              onClick={() => {
                window.location.replace("/contact");
              }}
            />
          </div>
          <div className="rightFooter">
            <div className="navigationFooter">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/work">Work</a>
              <a href="/contact">Contact</a>
              <a href="https://old.mohittiwaridev.xyz">View the old site</a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <h1 id="adjp">
            <span>Mohit</span>
            <span>Tiwari</span>
            <span>Dev</span>
          </h1>
          <span id="aisdsa">© Coded By Mohit | All-rights reserved</span>
          <div className="aisjd">
            <a href="https://www.instagram.com/codedbymohit/">Instagram</a>
            <a href="https://github.com/MohitTiwariBytes">Github</a>
          </div>
        </div>
      </div>
    </div>
  );
}
