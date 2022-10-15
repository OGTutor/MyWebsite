import React from "react";

import "./preloader.scss";

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
        </div>
    );
};

export default Preloader;
