import React, { useEffect, useRef } from 'react';
import './Button.css';
import gsap from 'gsap';

const Button = ({ text, onClick }) => {
  const buttonRef = useRef(null);  // Reference to the button
  const squareRef = useRef(null);  // Reference to the square

  // Handle mouse move to position the square exactly at mouse coordinates
  const handleMouseMove = (event) => {
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const mouseX = event.clientX - buttonRect.left - 65;
    const mouseY = event.clientY - buttonRect.top -14;

    // Set the position of the square to the exact mouse position
    gsap.to(squareRef.current, {
      x: mouseX, // Center square at mouse
      y: mouseY,
      duration: 0.1, // Smooth animation for following the mouse
      ease: 'none',  // Direct, no easing to follow the mouse precisely
    });
  };

  // Handle mouse enter: expand the square to 100% width and height
  const handleMouseEnter = () => {
    gsap.to(squareRef.current, {
      height: "300px",
      width: "300px",
      duration: 0.6,
      ease: 'power2.out',
    });
  };

  // Handle mouse leave: shrink the square back to its initial size
  const handleMouseLeave = () => {
    gsap.to(squareRef.current, {
      height: "0px",
      width: "0px",
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  // Add event listeners for mouse move and hover
  useEffect(() => {
    const buttonElement = buttonRef.current;

    buttonElement.addEventListener('mousemove', handleMouseMove);
    buttonElement.addEventListener('mouseenter', handleMouseEnter);
    buttonElement.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup event listeners when the component is unmounted
    return () => {
      buttonElement.removeEventListener('mousemove', handleMouseMove);
      buttonElement.removeEventListener('mouseenter', handleMouseEnter);
      buttonElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <button ref={buttonRef} className="button" onClick={onClick}>
      <div ref={squareRef} className="squareSmallInner"></div>
      {text}
    </button>
  );
};

export default Button;
