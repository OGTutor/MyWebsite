import React from "react";

import "./preloader.scss";

import video from "./media/NewPreloader.mp4";

const Preloader = () => {
    return (
        <div className="preloader" id="page-preloader">
            <div className="preloader_content">
                <div className="preloader_first"></div>
                <div className="preloader_first_one"></div>
                <div className="preloader_second"></div>
                <div className="preloader_second_two"></div>
                <div className="preloader_third"></div>
                <div className="preloader_third_three"></div>
            </div>
            <video
                src={`${video}`}
                className="showcase__video"
                autoPlay
                loop
                muted
            />
        </div>
    );
};

export default Preloader;
