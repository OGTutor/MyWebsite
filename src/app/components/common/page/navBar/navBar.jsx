import React from "react";

const NavBar = () => {
    const container = document.querySelector(".container");

    const toggleActiveContainer = () => {
        container.classList.toggle("active");
    };

    return (
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
                <div class="burger" onClick={toggleActiveContainer}>
                    <div class="bar"></div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
