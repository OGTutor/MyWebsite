import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    const container = document.querySelector(".container");
    const screens = document.querySelectorAll(".screen");
    console.log(screens);

    const handleMouseEnter = (event) => {
        event.preventDefault();
        replaceBg(event.target.name);
        console.log(event.target.name);
        // screens.forEach((screen) => {
        //     screen.style.display = "none";
        //     screens[0].style.display = "block";
        // });
    };

    const handleOnClick = () => {
        console.log(event);
        event.preventDefault();
        container.classList.toggle("active");
        // screens.forEach((screen) => {
        //     screen.style.display = "none";
        //     screens[0].style.display = "block";
        // });
    };

    function replaceBg(id) {
        const bg = document.getElementById(id);
        console.log(bg);
        screens.forEach((screen) => {
            screen.style.display = "none";
        });
        bg.style.display = "block";
    }
    return (
        <>
            <div className="links">
                <ul>
                    <li>
                        <a
                            onMouseEnter={(event) => handleMouseEnter(event)}
                            onClick={(event) => handleOnClick(event)}
                            to="/"
                            className="link"
                            name="Home"
                            dataLink="Home"
                            style={{ "--i": "0.1s" }}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            onMouseEnter={(event) => handleMouseEnter(event)}
                            onClick={(event) => handleOnClick(event)}
                            className="link"
                            to="/services"
                            name="Services"
                            dataLink="Services"
                            style={{ "--i": "0.1s" }}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            onMouseEnter={(event) => handleMouseEnter(event)}
                            onClick={(event) => handleOnClick(event)}
                            className="link"
                            to="/portfolio"
                            name="Portfolio"
                            dataLink="Portfolio"
                            style={{ "--i": "0.1s" }}
                        >
                            Portfolio
                        </a>
                    </li>
                    {/* <li>
                        <a
                            className="link"
                            dataLink="/Testimonials"
                            href="#"
                            style={{ "--i": "0.25s" }}
                        >
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a
                            className="link"
                            dataLink="About"
                            href="#"
                            style={{ "--i": "0.3s" }}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            className="link"
                            dataLink="Contact"
                            href="#"
                            style={{ "--i": "0.35s" }}
                        >
                            Contact
                        </a>
                    </li>
                    <li>
                        <a
                            className="link"
                            dataLink="Clock"
                            href="#"
                            style={{ "--i": "0.4s" }}
                        >
                            Clock
                        </a>
                    </li> */}
                </ul>
            </div>
            <Outlet />
        </>
    );
};

export default Layout;
