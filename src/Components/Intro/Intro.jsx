import React, { useEffect, useState } from "react";
import "./Intro.css";
import gsap from "gsap";
import Scramble from "../ScrambleText/Scramble";

const Intro = () => {
  const [progress, setProgress] = useState(0);
  const [shouldScramble, setShouldScramble] = useState(true);

  useEffect(() => {
    gsap.fromTo(
      "#nameSpan",
      { y: 100 },
      { y: 0, duration: 0.8, ease: "power3.inOut", stagger: 0.07 }
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => Math.min(prev + 2, 100));
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    gsap.to(".loaderInner", {
      width: `${progress}%`,
      duration: 0.3,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.to(".intro", {
          opacity: 0,
          duration: 0.5,
          ease: "power4.inOut",
        });
        gsap.to(".intro-main", {
          height: "0%",
          duration: 1,
          ease: "power4.inOut",
        });
      },
    });
  }, [progress]);

  // Timer for 1 second to disable scrambling
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldScramble(false);
    }, 1000); // 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="intro-main">
      <div className="intro">
        <div className="wrapperText">
          <span id="nameSpan">Mohit</span> <span id="nameSpan">Tiwari</span>{" "}
          <span id="nameSpan">Dev</span>
        </div>
        <div className="loader">
          <div className="loaderInner" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="messageLoad">
          <Scramble
            color={"white"}
            text={"LOADING..."}
            shouldScramble={shouldScramble}
            scrambleTime={4}
          />
          <Scramble
            color={"white"}
            text={"CODED BY MOHIT"}
            shouldScramble={shouldScramble}
            scrambleTime={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
