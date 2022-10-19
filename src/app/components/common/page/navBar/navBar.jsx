import React from "react";

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
                                <h3 className="glitch">CompanyName</h3>
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
