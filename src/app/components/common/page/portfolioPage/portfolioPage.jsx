import React, { useEffect } from "react";

import NavBar from "../navBar/navBar";

import "./styles/scroll.css";

import image from "./media/img/neon-japan-light.jpg";
import video from "./media/video/preloader.mp4";
import gif from "./media/video/gif/sound.gif";
import sound from "./media/sound.mp3";

const PortfolioPage = () => {
    window.onscroll = function () {
        const zSpacing = -1000;
        let lastPos = zSpacing / 5;
        const $frames = document.getElementsByClassName("frame");
        const frames = Array.from($frames);
        const zVals = [];

        const progressBar = document.getElementsByClassName("progressBar");

        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progressHeight = (window.pageYOffset / totalHeight) * 100;

        for (let i = 0; i < progressBar.length; i++) {
            progressBar[i].style.height = progressHeight + "%";
        }

        const top = document.documentElement.scrollTop;
        const delta = lastPos - top;

        lastPos = top;

        frames.forEach(function (n, i) {
            zVals.push(i * zSpacing + zSpacing);
            zVals[i] += delta * -5.5;
            const frame = frames[i];
            const transform = `translateZ(${zVals[i]}px)`;
            const opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
            frame.setAttribute(
                "style",
                `transform: ${transform}; opacity: ${opacity}`
            );
        });
    };

    useEffect(() => {
        window.scrollTo(0, 1);
    }, []);

    // Audio

    const handleClickOnSoundButton = (event) => {
        const soundButton = document.querySelector(".soundbutton");
        const audio = document.querySelector(".audio");

        soundButton.classList.toggle("paused");
        audio.paused ? audio.play() : audio.pause();
    };

    window.onfocus = function () {
        const soundButton = document.querySelector(".soundbutton");
        const audio = document.querySelector(".audio");
        soundButton.classList.contains("paused") ? audio.pause() : audio.play();
    };

    window.onblur = function () {
        const audio = document.querySelector(".audio");
        audio.pause();
    };

    return (
        <>
            <NavBar />
            <div className="screen" id="Portfolio">
                <div className="main">
                    <header className="header_three">
                        <div className="container">
                            <div id="progressBar" className="progressBar"></div>
                            <div id="scrollPath"></div>
                            <section className="gallery">
                                <div className="frame">
                                    <div className="frame__content">
                                        <h2>Portfolio Page</h2>
                                    </div>
                                </div>

                                <div className="frame">
                                    <div className="frame__content">
                                        <div
                                            className="frame-media frame-media_left"
                                            style={{
                                                backgroundImage: `url(${image})`
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="frame frame_bg">
                                    <div className="frame__content">
                                        <video
                                            className="frame-media frame-media_right"
                                            src={`${video}`}
                                            autoPlay
                                            loop
                                            muted
                                        ></video>
                                    </div>
                                </div>

                                <div className="frame"></div>

                                <div className="frame">
                                    <div className="frame__content text-right">
                                        <h3>Lorem ipsum</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur elit adipisicing. Nemo
                                            fugit, rerum dolorem assumenda
                                            consequatur dicta error iure
                                            laboriosam temporibus.
                                        </p>
                                    </div>
                                </div>

                                <div className="frame frame_bg">
                                    <div className="frame__content">
                                        <div
                                            className="frame-media frame-media_left"
                                            style={{
                                                backgroundImage: `url(${image})`
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="frame"></div>

                                <div className="frame frame_bg">
                                    <div className="frame__content">
                                        <div
                                            className="frame-media frame-media_right"
                                            style={{
                                                backgroundImage: `url(${image})`
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="frame"></div>

                                <div className="frame">
                                    <div className="frame__content text-left">
                                        <h3>Lorem ipsum</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur elit. Rerum dolorem
                                            assumenda consequatur dicta error
                                            iure laboriosam temporibus omnis
                                            quae eaque aliquam esse unde
                                            accusamus dolores non soluta.
                                        </p>
                                    </div>
                                </div>

                                <div className="frame frame_bg">
                                    <div className="frame__content">
                                        <div
                                            className="frame-media frame-media_right"
                                            style={{
                                                backgroundImage: `url(${image})`
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="frame">
                                    <div className="frame__content">
                                        <video
                                            className="frame-media frame-media_left"
                                            src={`${video}`}
                                            autoPlay
                                            loop
                                            muted
                                        ></video>
                                    </div>
                                </div>

                                <div className="frame"></div>
                                <div className="frame"></div>

                                <div className="frame frame_bg">
                                    <div className="frame__content">
                                        <div
                                            className="frame-media frame-media_right"
                                            style={{
                                                backgroundImage: `url(${image})`
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="frame frame_bg">
                                    <div className="frame__content">
                                        <video
                                            className="frame-media"
                                            src={`${video}`}
                                            autoPlay
                                            loop
                                            muted
                                        ></video>
                                    </div>
                                </div>

                                <div className="frame"></div>
                                <div className="frame"></div>

                                <div className="frame">
                                    <div className="frame__content">
                                        © OGTutor
                                    </div>
                                </div>
                            </section>
                        </div>

                        <img
                            className="soundbutton paused"
                            onClick={(event) => handleClickOnSoundButton(event)}
                            src={`${gif}`}
                            alt="Alt"
                        />
                        <audio className="audio" src={`${sound}`} loop></audio>
                    </header>
                </div>
                <div className="main__background"></div>
                <div className="shadow one"></div>
                <div className="shadow two"></div>
            </div>
        </>
    );
};

export default PortfolioPage;
