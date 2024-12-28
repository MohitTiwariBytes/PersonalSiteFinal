import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "./Button.css"

// eslint-disable-next-line react/prop-types
const AnimatedButton = ({ text = 'Button', to = '#' }) => {
  const buttonRef = useRef(null);
  const flairRef = useRef(null);
  const xSetRef = useRef(null);
  const ySetRef = useRef(null);

  useEffect(() => {
    if (!buttonRef.current || !flairRef.current) return;

    // Initialize GSAP quickSetters
    xSetRef.current = gsap.quickSetter(flairRef.current, "xPercent");
    ySetRef.current = gsap.quickSetter(flairRef.current, "yPercent");

    const getXY = (e) => {
      const { left, top, width, height } = buttonRef.current.getBoundingClientRect();

      const xTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, width, 0, 100),
        gsap.utils.clamp(0, 100)
      );

      const yTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, height, 0, 100),
        gsap.utils.clamp(0, 100)
      );

      return {
        x: xTransformer(e.clientX - left),
        y: yTransformer(e.clientY - top)
      };
    };

    const handleMouseEnter = (e) => {
      const { x, y } = getXY(e);
      xSetRef.current(x);
      ySetRef.current(y);
      gsap.to(flairRef.current, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = (e) => {
      const { x, y } = getXY(e);
      gsap.killTweensOf(flairRef.current);
      gsap.to(flairRef.current, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseMove = (e) => {
      const { x, y } = getXY(e);
      gsap.to(flairRef.current, {
        xPercent: x,
        yPercent: y,
        duration: 0.4,
        ease: "power2"
      });
    };

    const button = buttonRef.current;
    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    button.addEventListener("mousemove", handleMouseMove);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      button.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <a ref={buttonRef} href={to} className="button button--stroke">
      <span ref={flairRef} className="button__flair"></span>
      <span className="button__label">
        {text}
      </span>
    </a>
  );
};

export default AnimatedButton;