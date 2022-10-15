import React from "react";

import Button from "../../button/button";
import Model3D from "../../3dModelOnHomePage/3dModel";

const HomePage = () => {
    return (
        <>
            <nav class="navbar">
                <div class="menu">
                    <div class="logo">
                        <div class="box_logo">
                            <div class="lightbar"></div>
                            <div class="topLayer"></div>
                            <div class="boxGlitch">
                                <h3 class="glitch">CompanyName</h3>
                            </div>
                        </div>
                    </div>
                    <div class="burger">
                        <div class="bar"></div>
                    </div>
                </div>
            </nav>
            <div className="screen" id="Home">
                <div className="main">
                    <header className="header_one" id="header_one">
                        <Model3D />
                        <div className="header">
                            <div className="header_item">
                                <div
                                    id="progressBar"
                                    className="progressBar"
                                ></div>
                                <div id="scrollPath"></div>
                                <h2 className="title">Home</h2>
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

export default HomePage;
