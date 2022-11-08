import React, { useEffect } from "react";

import NavBar from "../../navBar/navBar";

import "./styles/scroll.css";

import content from "./content/content";
import video from "./media/video/preloader.mp4";
import gif from "./media/video/gif/sound.gif";
import sound from "./media/sound.mp3";

const PortfolioPage = () => {
    const chooseTheContent = (element) => {
        switch (element.contents) {
            case "image":
                return (
                    <>
                        <div className="frame"></div>
                        <div
                            className={element.bg ? "frame frame_bg" : "frame"}
                        >
                            <div className="frame__content">
                                <div
                                    className={
                                        element.position === "left"
                                            ? "frame-media frame-media_left"
                                            : "frame-media frame-media_right"
                                    }
                                    style={{
                                        backgroundImage: `url(${element.image})`
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="frame"></div>
                    </>
                );
            case "video":
                return (
                    <>
                        <div
                            className={element.bg ? "frame frame_bg" : "frame"}
                        >
                            <div className="frame__content">
                                <video
                                    className={
                                        element.position === "left"
                                            ? "frame-media frame-media_left"
                                            : "frame-media frame-media_right"
                                    }
                                    src={element.video}
                                    autoPlay
                                    loop
                                    muted
                                ></video>
                            </div>
                        </div>
                        <div className="frame"></div>
                    </>
                );
            case "text":
                return (
                    <>
                        <div
                            className={element.bg ? "frame frame_bg" : "frame"}
                        >
                            <div
                                className={
                                    element.position === "left"
                                        ? "frame__content text-left"
                                        : "frame__content text-right"
                                }
                            >
                                <h3>{element.title}</h3>
                                <p>{element.paragraph}</p>
                            </div>
                        </div>
                        <div className="frame"></div>
                    </>
                );
        }
    };

    window.onscroll = function () {
        const zSpacing = -610;
        let lastPos = zSpacing / 8;
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
                                {Object.values(content).map((element, idx) =>
                                    idx === 0 ? (
                                        <>
                                            <div className="frame" key={idx}>
                                                <div className="frame__content">
                                                    <h2>{element.title}</h2>
                                                </div>
                                            </div>
                                            <div className="frame"></div>
                                            <div className="frame"></div>
                                        </>
                                    ) : (
                                        <>{chooseTheContent(element)}</>
                                    )
                                )}
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
