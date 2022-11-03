import React, { useEffect } from "react";

import NavBar from "../navBar/navBar";
import Model3D from "../../3dModelOnHomePage/3dModel";

import mainImage from "./img/bghome.jpg";
import middleImage from "./img/finalMiddle.png";
import frontImage from "./img/front.png";

import "./styles/homePage.css";

const HomePage = () => {
    const handleScroll = (e) => {
        const positionX = e.clientX / innerWidth;
        const positionY = e.clientY / innerHeight;
        document.body.style.cssText += `--positionX: ${positionX}px`;
        document.body.style.cssText += `--positionY: ${positionY}px`;
    };
    useEffect(() => {
        window.addEventListener("mousemove", handleScroll);

        return () => {
            window.removeEventListener("mousemove", handleScroll);
        };
    }, []);

    return (
        <>
            <NavBar />
            <div className="screen" id="Home">
                <div className="main">
                    <header className="header_one">
                        <div className="container">
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
                                    <div className="layer__header__two">
                                        <div className="layers__caption__two">
                                            Welcome to Parallax
                                        </div>
                                        <div className="layers__title__two">
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
                        </div>
                    </header>
                </div>
                <div className="main__background"></div>
                <div className="shadow one"></div>
                <div className="shadow two"></div>
            </div>
        </>
    );
};

export default HomePage;
