import React, { useEffect } from "react";

import "./clock.scss";

import videoSmoke from "./media/video/Smoke.mp4";

const Clock = () => {
    function clock() {
        const hoursArrow = document.querySelector(".hours");
        const minutesArrow = document.querySelector(".minutes");
        const secondsArrow = document.querySelector(".seconds");
        const deg = 6;

        setInterval(() => {
            const day = new Date();

            const hours = day.getHours() * 30;
            const minutes = day.getMinutes() * deg;
            const seconds = day.getSeconds() * deg;

            hoursArrow.style.transform = `rotateZ(${hours + minutes / 12}deg)`;
            minutesArrow.style.transform = `rotateZ(${minutes}deg)`;
            secondsArrow.style.transform = `rotateZ(${seconds}deg)`;
        }, 0);
    }

    useEffect(() => {
        clock();
    }, []);

    return (
        <>
            <header className="header_clock">
                <div className="header">
                    <div className="header_item">
                        <div className="clock">
                            <div className="hour">
                                <div className="hours"></div>
                            </div>

                            <div className="minute">
                                <div className="minutes"></div>
                            </div>

                            <div className="second">
                                <div className="seconds"></div>
                            </div>
                        </div>
                    </div>
                    <video
                        src={`${videoSmoke}`}
                        className="showcase__video"
                        autoPlay
                        loop
                        muted
                    ></video>
                </div>
            </header>
        </>
    );
};

export default Clock;
