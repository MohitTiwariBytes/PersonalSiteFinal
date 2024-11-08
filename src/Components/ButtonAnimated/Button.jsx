import React, { useEffect, useRef, useState } from "react";
import "./Button.css";
import gsap from "gsap";

const Button = ({
  text,
  onClick,
  buttonColor = "#000", // Default button color
  buttonHoverColor = "#555", // Default button hover color
  textColor = "#fff", // Default text color
  textHoverColor = "#fff", // Default text hover color
}) => {
  const buttonRef = useRef(null); // Reference to the button
  const squareRef = useRef(null); // Reference to the square
  const [currentTextColor, setCurrentTextColor] = useState(textColor); // State for text color

  // Handle mouse move to position the square exactly at mouse coordinates
  const handleMouseMove = (event) => {
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const mouseX = event.clientX - buttonRect.left - 65;
    const mouseY = event.clientY - buttonRect.top - 14;

    // Set the position of the square to the exact mouse position
    gsap.to(squareRef.current, {
      x: mouseX, // Center square at mouse
      y: mouseY,
      duration: 0.1, // Smooth animation for following the mouse
      ease: "none", // Direct, no easing to follow the mouse precisely
    });
  };

  // Handle mouse enter: expand the square and change text color
  const handleMouseEnter = () => {
    gsap.to(squareRef.current, {
      height: "300px",
      width: "300px",
      duration: 0.6,
      ease: "power2.out",
    });

    setCurrentTextColor(textHoverColor); // Change text color on hover
  };

  // Handle mouse leave: shrink the square back to its initial size and reset text color
  const handleMouseLeave = () => {
    gsap.to(squareRef.current, {
      height: "0px",
      width: "0px",
      duration: 0.3,
      ease: "power2.out",
    });

    setCurrentTextColor(textColor); // Reset text color when mouse leaves
  };

  // Add event listeners for mouse move and hover
  useEffect(() => {
    const buttonElement = buttonRef.current;

    buttonElement.addEventListener("mousemove", handleMouseMove);
    buttonElement.addEventListener("mouseenter", handleMouseEnter);
    buttonElement.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners when the component is unmounted
    return () => {
      buttonElement.removeEventListener("mousemove", handleMouseMove);
      buttonElement.removeEventListener("mouseenter", handleMouseEnter);
      buttonElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className="button"
      onClick={onClick}
      style={{
        backgroundColor: buttonColor,
        color: currentTextColor, // Apply the dynamic text color here
      }}
    >
      <div
        ref={squareRef}
        className="squareSmallInner"
        style={{
          backgroundColor: buttonHoverColor, // Square's hover color
        }}
      ></div>
      {text}
    </button>
  );
};

export default Button;
