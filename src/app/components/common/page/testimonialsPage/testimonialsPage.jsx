import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles/testimonials.css";
import "./styles/testimonialsMedia.css";
import "swiper";
import "bootstrap";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import jsImage from "./media/img/js.png";
import cssImage from "./media/img/css.png";
import htmlImage from "./media/img/html.png";
import nodeImage from "./media/img/node.png";
import expressImage from "./media/img/expressjs.png";

import smokeVideo from "./media/video/Smoke.mp4";

const TestimonialsPage = () => {
    // document.addEventListener("DOMContentLoaded", function () {
    //     const showSlider = new Swiper(".showcase-carousel", {
    //         loop: true,
    //         slidesPerView: 3,
    //         speed: 1800,
    //         centeredSlides: true,
    //         navigation: {
    //             nextEl: ".showcase-navigation__next",
    //             prevEl: ".showcase-navigation__prev"
    //         }
    //     });

    //     document.querySelector("video").playbackRate = 2;
    // });
    return (
        <>
            <Swiper
                loop={true}
                slidesPerView={3}
                speed={1800}
                centeredSlides={true}
                navigation={{
                    nextEl: ".showcase-navigation__next",
                    prevEl: ".showcase-navigation__prev"
                }}
            >
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
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide showcase-carousel__item">
                                                    <div className="showcase-carousel__image-wrapper">
                                                        <div className="showcase-carousel__image-left">
                                                            <div
                                                                className="showcase-carousel__image"
                                                                style={{
                                                                    backgroundImage: `url(${jsImage})`
                                                                }}
                                                            ></div>
                                                        </div>
                                                        <div className="showcase-carousel__image-right">
                                                            <div
                                                                className="showcase-carousel__image"
                                                                style={{
                                                                    backgroundImage: `url(${jsImage})`
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <p>JavaScript</p>
                                                </div>

                                                <div className="swiper-slide showcase-carousel__item">
                                                    <div className="showcase-carousel__image-wrapper">
                                                        <div className="showcase-carousel__image-left">
                                                            <div
                                                                className="showcase-carousel__image"
                                                                style={{
                                                                    backgroundImage: `url(${cssImage})`
                                                                }}
                                                            ></div>
                                                        </div>
                                                        <div className="showcase-carousel__image-right">
                                                            <div
                                                                className="showcase-carousel__image"
                                                                style={{
                                                                    backgroundImage: `url(${cssImage})`
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <p>CSS</p>
                                                </div>

                                                <div className="swiper-slide showcase-carousel__item">
                                                    <div className="showcase-carousel__image-wrapper">
                                                        <div className="showcase-carousel__image-left">
                                                            <div
                                                                className="showcase-carousel__image"
                                                                style={{
                                                                    backgroundImage: `url(${htmlImage})`
                                                                }}
                                                            ></div>
                                                        </div>
                                                        <div className="showcase-carousel__image-right">
                                                            <div
                                                                className="showcase-carousel__image"
                                                                style={{
                                                                    backgroundImage: `url(${htmlImage})`
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <p>HTML</p>
                                                </div>

                                                <div className="swiper-slide showcase-carousel__item">
                                                    <div className="showcase-carousel__image-wrapper">
                                                        <div className="showcase-carousel__image-left">
                                                            <div
                                                                className="showcase-carousel__image"
                                                                style={{
                                                                    backgroundImage: `url(${nodeImage})`
                                                                }}
                                                            ></div>
                                                        </div>
                                                        <div className="showcase-carousel__image-right">
                                                            <div
                                                                className="showcase-carousel__image"
                                                                style={{
                                                                    backgroundImage: `url(${nodeImage})`
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <p>NodeJS</p>
                                                </div>

                                                <div className="swiper-slide showcase-carousel__item">
                                                    <div className="showcase-carousel__image-wrapper">
                                                        <div className="showcase-carousel__image-left">
                                                            <div
                                                                className="showcase-carousel__image"
                                                                style={{
                                                                    backgroundImage: `url(${expressImage})`
                                                                }}
                                                            ></div>
                                                        </div>
                                                        <div className="showcase-carousel__image-right">
                                                            <div
                                                                className="showcase-carousel__image"
                                                                style={{
                                                                    backgroundImage: `url(${expressImage})`
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <p>ExpressJS</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="showcase-navigation">
                                            <div className="showcase-navigation__prev"></div>
                                            <div className="showcase-navigation__next"></div>
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
            </Swiper>
        </>
    );
};

export default TestimonialsPage;
