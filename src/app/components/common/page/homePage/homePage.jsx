import React, { useEffect, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap/ScrollSmoother";

import NavBar from "../navBar/navBar";
import Model3D from "../../3dModelOnHomePage/3dModel";

import mainImage from "./img/bghome.jpg";
import middleImage from "./img/middle.png";
import frontImage from "./img/front.png";
import dungeonImage from "./img/2.jpg";

import "./styles/homePage.css";

const HomePage = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        document.body.style.cssText += `--scrollTop: ${position}px`;
        setScrollPosition(position);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    gsap.registerPlugin(ScrollTrigger);

    return (
        <>
            <NavBar />
            <div className="screen" id="Home">
                <div className="main">
                    <header className="header_one">
                        <div className="wrapper_parallax">
                            <div className="content_parallax">
                                <header className="main-header">
                                    <Model3D />
                                    <div className="layers">
                                        <div className="layer__header">
                                            <div className="layers__caption">
                                                Welcome to Parallax
                                            </div>
                                            <div className="layers__title">
                                                Fairy Forest
                                            </div>
                                        </div>
                                        <div
                                            className="layer layers__base"
                                            style={{
                                                backgroundImage: `url(${mainImage})`
                                            }}
                                        ></div>
                                        <div
                                            className="layer layers__middle"
                                            style={{
                                                backgroundImage: `url(${middleImage})`
                                            }}
                                        ></div>
                                        <div
                                            className="layer layers__front"
                                            style={{
                                                backgroundImage: `url(${frontImage})`
                                            }}
                                        ></div>
                                    </div>
                                </header>

                                <article
                                    className="main-article"
                                    style={{
                                        backgroundImage: `url(${dungeonImage})`
                                    }}
                                >
                                    <div className="main-article__content">
                                        <h2 className="main-article__header">
                                            To be continued
                                        </h2>
                                        <p className="main-article__paragraph">
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit. Autem
                                            qui earum, natus, libero, nulla
                                            ullam voluptates hic repellat eum
                                            consequatur veritatis! Tenetur
                                            reprehenderit aliquid minus
                                            repellendus sit explicabo et
                                            recusandae!
                                        </p>
                                    </div>
                                    <div className="copy">© OGTutor</div>
                                </article>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="shadow one"></div>
                <div className="shadow two"></div>
            </div>
        </>
    );
};

export default HomePage;
