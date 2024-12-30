import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./NotFound.css"
import Marquee from "react-fast-marquee";
import Button from "../../Components/ButtonAnimated/Button"
import Footer from "../../Components/Footer/Footer"
import ReactLenis from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

export default function NotFound() {
    return (
        <ReactLenis root>
            <div className="main-not-found">
                <div className="notFound">
                    <div className="asd-badges">
                        <Marquee className="asdsa" direction="left">
                            Not found! • Not found! • Not found! • Not found! • Not found! • Not found! •‎
                            Not found! • Not found! • Not found! • Not found! • Not found! • Not found! •‎
                        </Marquee>
                        <Marquee className="asdsa" direction="right">
                            Not found! • Not found! • Not found! • Not found! • Not found! • Not found! •
                            Not found! • Not found! • Not found! • Not found! • Not found! • Not found! •‎
                        </Marquee>
                    </div>
                    <div className="textBigMain">
                        <span id="asdf">Dang it! Is that a,</span>
                        <h1><h1 id="sadf">4</h1>0<h1 id="sadf">4</h1>?</h1>
                        <Button text="Go to home!" to="/"></Button>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </ReactLenis>
    )
}