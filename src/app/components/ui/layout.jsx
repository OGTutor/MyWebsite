import React from "react";
import { Link, Outlet, useNavigate, Routes, Route } from "react-router-dom";

import Home from "../../layouts/home";
import Services from "../../layouts/services";
import Portfolio from "../../layouts/portfolio";

const Layout = () => {
    const navigate = useNavigate();
    const container = document.querySelector(".container");
    const screens = [Home, Services];
    console.log(screens[1].name);

    const goServices = () => navigate("/services");

    const handleMouseEnter = (event) => {
        event.preventDefault();
        // replaceBg(event.target.name);
        console.log(event.target.name);
        // screens.forEach((screen) => {
        //     screen.style.display = "none";
        //     screens[0].style.display = "block";
        // });
    };

    const handleOnClick = (event) => {
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
                        <Link
                            onMouseEnter={(event) => handleMouseEnter(event)}
                            onClick={(event) => handleOnClick(event)}
                            className="link"
                            name="Home"
                            dataLink="Home"
                            style={{ "--i": "0.1s" }}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            onMouseEnter={(event) => handleMouseEnter(event)}
                            onClick={(event) => handleOnClick(event)}
                            className="link"
                            name="Services"
                            dataLink="Services"
                            style={{ "--i": "0.1s" }}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            onMouseEnter={(event) => handleMouseEnter(event)}
                            onClick={(event) => handleOnClick(event)}
                            className="link"
                            name="Portfolio"
                            dataLink="Portfolio"
                            style={{ "--i": "0.1s" }}
                        >
                            Portfolio
                        </Link>
                    </li>
                    {/* <li>
                        <a
                            className="link"
                            dataLink="Testimonials"
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
