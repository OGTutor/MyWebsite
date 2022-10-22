import React, { useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

import NavBar from "../navBar/navBar";

import "./styles/testimonials.css";
import "./styles/testimonialsMedia.css";

import jsImage from "./media/img/js.png";
import cssImage from "./media/img/css.png";
import htmlImage from "./media/img/html.png";
import nodeImage from "./media/img/node.png";
import expressImage from "./media/img/expressjs.png";

import smokeVideo from "./media/video/Smoke.mp4";

const content = {
    js: { image: jsImage, title: "JavaScript" },
    css: { image: cssImage, title: "CSS" },
    html: { image: htmlImage, title: "HTML" },
    node: { image: nodeImage, title: "NodeJS" },
    express: { image: expressImage, title: "ExpressJS" }
};

const TestimonialsPage = () => {
    const [imageIndex, setImageIndex] = useState(0);

    const NextArrow = ({ onClick }) => {
        return (
            <div className="showcase-navigation_next">
                <div
                    className={`showcase-navigation__next`}
                    onClick={onClick}
                ></div>
            </div>
        );
    };
    const PrevArrow = ({ onClick }) => {
        return (
            <div className="showcase-navigation_prev">
                <div
                    className={`showcase-navigation__prev`}
                    onClick={onClick}
                ></div>
            </div>
        );
    };

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 1800,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    };

    NextArrow.propTypes = {
        onClick: PropTypes.func
    };
    PrevArrow.propTypes = {
        onClick: PropTypes.func
    };

    return (
        <>
            <NavBar />
            <div className="screen" id="Testimonials">
                <div className="main">
                    <header className="header_four">
                        <section className="showcase">
                            <h2 className="showcase__header">
                                Hard <span>Skills</span>
                            </h2>
                            <div className="showcase__content-wrapper">
                                <div className="showcase__content">
                                    <div className="showcase-carousel">
                                        <Slider
                                            className="swiper-wrapper"
                                            {...settings}
                                        >
                                            {Object.entries(content).map(
                                                (element, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={
                                                            idx === imageIndex
                                                                ? "swiper-slide-active showcase-carousel__item"
                                                                : "swiper-slide showcase-carousel__item"
                                                        }
                                                    >
                                                        <div className="showcase-carousel__image-wrapper">
                                                            <div className="showcase-carousel__image-left">
                                                                <div
                                                                    className="showcase-carousel__image"
                                                                    style={{
                                                                        backgroundImage: `url(${element[1].image})`
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div className="showcase-carousel__image-right">
                                                                <div
                                                                    className="showcase-carousel__image"
                                                                    style={{
                                                                        backgroundImage: `url(${element[1].image})`
                                                                    }}
                                                                ></div>
                                                            </div>
                                                        </div>
                                                        <p>
                                                            {element[1].title}
                                                        </p>
                                                    </div>
                                                )
                                            )}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                            <video
                                src={`${smokeVideo}`}
                                className="showcase__video"
                                autoPlay
                                loop
                                muted
                            ></video>
                        </section>
                    </header>
                </div>
                <div className="shadow one"></div>
                <div className="shadow two"></div>
            </div>
        </>
    );
};

export default TestimonialsPage;
