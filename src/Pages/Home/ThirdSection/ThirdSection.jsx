import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./ThirdSection.css";
import myImage from "../../../assets/Images/IMG_1098.jpg";
import Button from "../../../Components/ButtonAnimated/Button";

gsap.registerPlugin(ScrollTrigger);

export default function ThirdSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const imageInsiders = containerRef.current.querySelectorAll('.asdais-inner');

    imageInsiders.forEach((insider) => {
      gsap.fromTo(insider,
        {
          transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -100, 0, 1)"
        },
        {
          transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 100, 0, 1)",
          scrollTrigger: {
            trigger: insider.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);



  const paragraphsRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    // Safely select references
    const paragraphs = paragraphsRef.current;


    gsap.fromTo(
      ".button",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".button",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    )


    // Paragraphs animation
    const paragraphAnimations = paragraphs.map((paragraph) =>
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
      )
    );


    // Cleanup function
    return () => {
      paragraphAnimations.forEach(anim => anim.kill());
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="main-third-section" ref={containerRef}>
      <div className="thirdSection">
        <div className="about">
          <div className="left1">
            <span id="sadad">
              {["I", "am", "just", "a", "teenager", "who", "is", "interested",
                "in", "developing", "and", "designing", "amazing", "sites",
                "Nothing", "More.", "Nothing", "Less."].map((word, index) => (
                  <p
                    key={index}
                    ref={el => paragraphsRef.current[index] = el}
                  >
                    {word}
                  </p>
                ))}
            </span>
            <Button
              text="About Me?"
              buttonColor="black"
              buttonHoverColor="white"
              textColor="#fff"
              textHoverColor="black"
              to={"/about"}
            />
          </div>
          <div className="image">
            <div className="asdais">
              <div className="asdais-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}