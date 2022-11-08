import React from "react";

import NavBar from "../../navBar/navBar";

const AboutPage = () => {
    return (
        <>
            <NavBar />
            <div className="screen" id="About">
                <div className="main">
                    <header className="header_five">
                        <div className="header">
                            <div className="header_item">
                                <h2 className="title">About</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Maiores unde nulla odio
                                    saepe, eius provident.
                                </p>
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

export default AboutPage;
