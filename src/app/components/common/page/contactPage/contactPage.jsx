import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

import NavBar from "../navBar/navBar";

import instImage from "./img/img1f.png";
import telegramImage from "./img/img2.png";
import gitImage from "./img/img3.png";

const ContactPage = () => {
    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll(".box"), {
            max: 25,
            speed: 400
        });
    }, []);

    return (
        <>
            <NavBar />
            <div className="screen" id="Contact">
                <div className="main">
                    <header className="header_six">
                        <div className="header_cont">
                            <div className="header_item_cont">
                                <div
                                    id="progressBar"
                                    className="progressBar"
                                ></div>
                                <div id="scrollPath"></div>
                                <div className="container_cont">
                                    <div
                                        id="progressBar"
                                        className="progressBar"
                                    ></div>
                                    <div id="scrollPath"></div>
                                    <div className="box">
                                        <h2 className="name">Instagram</h2>
                                        <a href="#" className="btnContact">
                                            Follow
                                        </a>
                                        <div className="circle"></div>
                                        <img
                                            src={`${instImage}`}
                                            className="faviconCont"
                                        />
                                    </div>

                                    <div className="box">
                                        <h2 className="name">Telegram</h2>
                                        <a href="#" className="btnContact">
                                            Follow
                                        </a>
                                        <div className="circle"></div>
                                        <img
                                            src={`${telegramImage}`}
                                            className="faviconCont"
                                        />
                                    </div>

                                    <div className="box">
                                        <h2 className="name">GitHub</h2>
                                        <a
                                            href="https://github.com/OGTutor?tab=overview&from=2022-06-01&to=2022-06-18"
                                            className="btnContact"
                                        >
                                            Follow
                                        </a>
                                        <div className="circle"></div>
                                        <img
                                            src={`${gitImage}`}
                                            className="faviconCont"
                                        />
                                    </div>
                                </div>
                            </div>
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

export default ContactPage;
