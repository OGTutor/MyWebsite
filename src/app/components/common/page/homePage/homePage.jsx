import React from "react";

import NavBar from "../navBar/navBar";
import Button from "../../button/button";
import Model3D from "../../3dModelOnHomePage/3dModel";

const HomePage = () => {
    return (
        <>
            <NavBar />
            <div className="screen" id="Home">
                <div className="main">
                    <header className="header_one" id="header_one">
                        <Model3D />
                        <div className="header">
                            <div className="header_item">
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
