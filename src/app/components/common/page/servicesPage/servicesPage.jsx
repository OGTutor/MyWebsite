import React from "react";

import NavBar from "../navBar/navBar";

const ServicesPage = () => {
    return (
        <>
            <NavBar />
            <div className="screen" id="Services">
                <div className="main">
                    <header className="header_two">
                        <div id="progressBar" className="progressBar"></div>
                        <div id="scrollPath"></div>
                        <div className="container">
                            <div
                                className="slide active"
                                style={{
                                    backgroundImage: `url(../../../../../../../../public/cards/1.jpg)`
                                }}
                            >
                                <h3 className="textCard">This One</h3>
                            </div>
                            <div
                                className="slide"
                                style={{
                                    backgroundImage: `url(../../../../../../../../public/cards/2.jpg)`
                                }}
                            >
                                <h3 className="textCard">This One</h3>
                            </div>
                            <div
                                className="slide"
                                style={{
                                    backgroundImage: `url(../../../../../../../../public/cards/3.jpg)`
                                }}
                            >
                                <h3 className="textCard">This One</h3>
                            </div>
                            <div
                                className="slide"
                                style={{
                                    backgroundImage: `url(../../../../../../../../public/cards/4.jpg)`
                                }}
                            >
                                <h3 className="textCard">This One</h3>
                            </div>
                            <div
                                className="slide"
                                style={{
                                    backgroundImage: `url(../../../../../../../../public/cards/5.png)`
                                }}
                            >
                                <h3 className="textCard">This One</h3>
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

export default ServicesPage;
