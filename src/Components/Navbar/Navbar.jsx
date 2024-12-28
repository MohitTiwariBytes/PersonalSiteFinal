import "./Navbar.css";
import gsap from "gsap";
import { React, useEffect, useState } from "react";
import Scramble from "../ScrambleText/Scramble";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [playScramble, setPlayScramble] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        ".ham-menu",
        { top: "-100%" },
        {
          top: "0%",
          minHeight: "100vh",
          duration: 1.2,
          ease: "power3.inOut",
          onComplete: () => {
            setPlayScramble(true);
            gsap.fromTo(
              ".hsaho h1",
              {
                y: 100,
              },
              {
                y: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: "power3.inOut",
              }
            );
          }, // Trigger scramble when animation completes
        }
      );
    } else {
      gsap.fromTo(
        ".hsaho h1",
        {
          y: 0,
        },
        {
          y: 100,
          duration: 0.3,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.fromTo(
              ".ham-menu",
              { top: "0%" },
              {
                top: "-100%",
                minHeight: "0vh",
                duration: 1.2,
                ease: "power3.inOut",
                onStart: () => setPlayScramble(false), // Stop scramble when closing
              }
            );
          },
        }
      );
    }
  }, [isOpen]);

  const slideUp = (event) => {
    const target = event.currentTarget; // Get the current <a> being hovered
    const sdjDivs = target.querySelectorAll(".sdj div"); // Select all .sdj divs
    const sdfDivs = target.querySelectorAll(".sdf div"); // Select all .sdf divs

    gsap.fromTo(
      sdjDivs,
      { y: "0px" },
      {
        y: "-20px",
        stagger: 0.08,
        duration: 0.3,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      sdfDivs,
      { y: "0px" },
      {
        y: "-15px",
        stagger: 0.08,
        duration: 0.3,
        ease: "power3.out",
      }
    );
  };

  const slideDown = (event) => {
    const target = event.currentTarget; // Get the current <a> being hovered
    const sdjDivs = target.querySelectorAll(".sdj div"); // Select all .sdj divs
    const sdfDivs = target.querySelectorAll(".sdf div"); // Select all .sdf divs

    gsap.fromTo(
      sdjDivs,
      { y: "-15px" },
      {
        y: "0px",
        stagger: 0.08,
        duration: 0.3,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      sdfDivs,
      { y: "-15px" },
      {
        y: "20px",
        stagger: 0.08,
        duration: 0.3,
        ease: "power3.out",
      }
    );
  };

  return (
    <div className="main-navbar">
      <div onClick={toggleMenu} className="hamButton">
        <div
          style={{
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            background: isOpen ? "white" : "black",
          }}
          className="line1"
        ></div>
        <div
          style={{
            transform: isOpen ? "rotate(-45deg)" : "rotate(0deg)",
            marginTop: isOpen ? "-13px" : "0px",
            background: isOpen ? "white" : "black",
          }}
          className="line2"
        ></div>
      </div>

      <div className="ham-menu">
        {isOpen && playScramble && (
          <div className="messageLoad">
            <Scramble
              text={"MENU"}
              color={"white"}
              shouldScramble={true}
              scrambleTime={15}
            />
            <Scramble
              text={"CODED BY MOHIT"}
              color={"white"}
              shouldScramble={true}
              scrambleTime={15}
            />
          </div>
        )}
        <div className="lolidk">
          <a href="/" className="hsaho">
            <h1>HOME</h1>
          </a>
          <a href="/about" className="hsaho">
            <h1>ABOUT</h1>
          </a>
          <a href="/work" className="hsaho">
            <h1>WORK</h1>
          </a>
          <a href="/contact" className="hsaho">
            <h1>CONTACT</h1>
          </a>
        </div>
      </div>

      <div className="navbar">
        <div className="logo">
          <h1>MohitTiwariDev</h1>
        </div>
        <div className="navigation">
          <a
            style={{ color: "black", textDecoration: "none" }}
            href="/"
            onMouseEnter={slideUp}
            onMouseLeave={slideDown}
            className="resdsx"
          >
            <div className="sdj">
              <div>H</div>
              <div>O</div>
              <div>M</div>
              <div>E</div>
            </div>
            <div className="sdf ">
              <div>H</div>
              <div>O</div>
              <div>M</div>
              <div>E</div>
            </div>
          </a>
          <a
            style={{ color: "black", textDecoration: "none" }}
            href="/about"
            onMouseEnter={slideUp}
            onMouseLeave={slideDown}
            className="resdsx"
          >
            <div className="sdj">
              <div>A</div>
              <div>B</div>
              <div>O</div>
              <div>U</div>
              <div>T</div>
            </div>
            <div className="sdf ">
              <div>A</div>
              <div>B</div>
              <div>O</div>
              <div>U</div>
              <div>T</div>
            </div>
          </a>
          <a
            style={{ color: "black", textDecoration: "none" }}
            href="/work"
            onMouseEnter={slideUp}
            onMouseLeave={slideDown}
            className="resdsx"
          >
            <div className="sdj">
              <div>W</div>
              <div>O</div>
              <div>R</div>
              <div>K</div>
            </div>
            <div className="sdf ">
              <div>W</div>
              <div>O</div>
              <div>R</div>
              <div>K</div>
            </div>
          </a>
          <div className="contactButton">
            <button
              onClick={() => {
                window.location.replace("/contact");
              }}
            >
              Let's Talk{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <polyline
                  points="12 16 16 12 12 8"
                  fill="none"
                  stroke="#000"
                  stroke-miterlimit="10"
                />
                <line
                  x1="16"
                  y1="12"
                  x2="7"
                  y2="12"
                  fill="none"
                  stroke="#000"
                  stroke-miterlimit="10"
                />
                <circle cx="12" cy="12" r="10" fill="none" stroke="#000" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
