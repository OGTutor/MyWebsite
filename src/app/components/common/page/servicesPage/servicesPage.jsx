import React from "react";

import NavBar from "../navBar/navBar";

import imageOne from "./img/cards/1.jpg";
import imageTwo from "./img/cards/2.jpg";
import imageThree from "./img/cards/3.jpg";
import imageFour from "./img/cards/4.jpg";
import imageFive from "./img/cards/5.png";

const ServicesPage = () => {
    const handleClickOnCard = (event) => {
        const slides = document.querySelectorAll(".slide");
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        event.target.classList.add("active");
    };

    return (
        <>
            <NavBar />
            <div className="screen" id="Services">
                <div className="main">
                    <header className="header_two">
                        <div id="progressBar" className="progressBar"></div>
                        <div id="scrollPath"></div>
                        <div className="container">
                            <div
                                className="slide active"
                                onClick={(event) => handleClickOnCard(event)}
                                style={{ backgroundImage: `url(${imageOne})` }}
                            >
                                <h3 className="textCard">This One</h3>
                            </div>
                            <div
                                className="slide"
                                onClick={(event) => handleClickOnCard(event)}
                                style={{
                                    backgroundImage: `url(${imageTwo})`
                                }}
                            >
                                <h3 className="textCard">This One</h3>
                            </div>
                            <div
                                className="slide"
                                onClick={(event) => handleClickOnCard(event)}
                                style={{
                                    backgroundImage: `url(${imageThree})`
                                }}
                            >
                                <h3 className="textCard">This One</h3>
                            </div>
                            <div
                                className="slide"
                                onClick={(event) => handleClickOnCard(event)}
                                style={{
                                    backgroundImage: `url(${imageFour})`
                                }}
                            >
                                <h3 className="textCard">This One</h3>
                            </div>
                            <div
                                className="slide"
                                onClick={(event) => handleClickOnCard(event)}
                                style={{
                                    backgroundImage: `url(${imageFive})`
                                }}
                            >
                                <h3 className="textCard">This One</h3>
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

export default ServicesPage;
