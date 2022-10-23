import React from "react";

import NavBar from "../navBar/navBar";
import Button from "../../button/button";

const AboutPage = () => {
    return (
        <>
            <NavBar />
            <div className="screen" id="About">
                <div className="main">
                    <header className="header_five">
                        <div className="header">
                            <div className="header_item">
                                <div
                                    id="progressBar"
                                    className="progressBar"
                                ></div>
                                <div id="scrollPath"></div>
                                <h2 className="title">About</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Maiores unde nulla odio
                                    saepe, eius provident.
                                </p>
                                <Button />
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

export default AboutPage;
