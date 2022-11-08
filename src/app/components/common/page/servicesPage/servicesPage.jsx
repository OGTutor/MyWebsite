import React from "react";

import NavBar from "../../navBar/navBar";

import imageOne from "./img/cards/1.jpg";
import imageTwo from "./img/cards/2.jpg";
import imageThree from "./img/cards/3.jpg";
import imageFour from "./img/cards/4.jpg";
import imageFive from "./img/cards/5.png";

const content = {
    imageOne: { title: "This One", image: `${imageOne}` },
    imageTwo: { title: "This Two", image: `${imageTwo}` },
    imageThree: { title: "This Three", image: `${imageThree}` },
    imageFour: { title: "This Four", image: `${imageFour}` },
    imageFive: { title: "This Five", image: `${imageFive}` }
};

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
                        <div className="container">
                            {Object.values(content).map((element, idx) => (
                                <div
                                    key={idx}
                                    className={
                                        idx === 0 ? "slide active" : "slide"
                                    }
                                    onClick={(event) =>
                                        handleClickOnCard(event)
                                    }
                                    style={{
                                        backgroundImage: `url(${element.image})`
                                    }}
                                >
                                    <h3 className="textCard">
                                        {element.title}
                                    </h3>
                                </div>
                            ))}
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

export default ServicesPage;
