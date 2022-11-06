import React from "react";

import "./styles/navBar.scss";

const NavBar = () => {
    const container = document.querySelector(".container");

    const toggleActiveContainer = () => {
        container.classList.toggle("active");
    };

    return (
        <nav className="navbar">
            <div className="menu">
                <div className="logo">
                    <div className="logo_image">
                        <div className="box_logo">
                            <div className="lightbar"></div>
                            <div className="topLayer"></div>
                            <div className="boxGlitch">
                                <h3 className="glitch">
                                    <span className="fast-flicker">O</span>
                                    <span className="flicker">G</span>
                                    <span className="fast-flicker">T</span>
                                    <span className="flicker">u</span>
                                    <span className="fast-flicker">t</span>
                                    <span className="flicker">o</span>
                                    <span className="fast-flicker">r</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="burger" onClick={toggleActiveContainer}>
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
