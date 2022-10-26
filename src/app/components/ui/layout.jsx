import React, { useState } from "react";
import { Link } from "react-router-dom";

import Home from "../../layouts/home";
import Services from "../../layouts/services";
import Portfolio from "../../layouts/portfolio";
import Testimonials from "../../layouts/testimonials";
import About from "../../layouts/about";
import Contact from "../../layouts/contact";
import Clock from "../common/clock/clock";

import "../common/button/button.scss";

const Layout = () => {
    const container = document.querySelector(".container");
    const [screen, setScreen] = useState("Home");

    const handleMouseEnter = (event) => {
        event.preventDefault();
        switch (event.target.name) {
            case "Home":
                setScreen("Home");
                break;
            case "Services":
                setScreen("Services");
                break;
            case "Portfolio":
                setScreen("Portfolio");
                break;
            case "Testimonials":
                setScreen("Testimonials");
                break;
            case "About":
                setScreen("About");
                break;
            case "Contact":
                setScreen("Contact");
                break;
        }
        console.log(event.target.name);
    };
    const handleOnClick = (event) => {
        event.preventDefault();
        container.classList.toggle("active");
    };

    const setComponent = () => {
        switch (screen) {
            case "Home":
                return <Home />;
            case "Services":
                return <Services />;
            case "Portfolio":
                return <Portfolio />;
            case "Testimonials":
                return <Testimonials />;
            case "About":
                return <About />;
            case "Contact":
                return <Contact />;
        }
    };

    return (
        <>
            <div className="links">
                <ul>
                    <li>
                        <div className="btn">
                            <a
                                onMouseEnter={(event) =>
                                    handleMouseEnter(event)
                                }
                                onClick={(event) => handleOnClick(event)}
                                className="button"
                                name="Home"
                                style={{ "--i": "0.1s" }}
                            >
                                <span className="button__line button__line--top"></span>
                                <span className="button__line button__line--right"></span>
                                <span className="button__line button__line--bottom"></span>
                                <span className="button__line button__line--left"></span>
                                Neon Button
                            </a>
                        </div>
                    </li>
                    <li>
                        <Link
                            onMouseEnter={(event) => handleMouseEnter(event)}
                            onClick={(event) => handleOnClick(event)}
                            className="link"
                            name="Home"
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
                            style={{ "--i": "0.15s" }}
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
                            style={{ "--i": "0.2s" }}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            onMouseEnter={(event) => handleMouseEnter(event)}
                            onClick={(event) => handleOnClick(event)}
                            className="link"
                            name="Testimonials"
                            style={{ "--i": "0.25s" }}
                        >
                            Testimonials
                        </Link>
                    </li>
                    <li>
                        <Link
                            onMouseEnter={(event) => handleMouseEnter(event)}
                            onClick={(event) => handleOnClick(event)}
                            className="link"
                            name="About"
                            style={{ "--i": "0.3s" }}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            onMouseEnter={(event) => handleMouseEnter(event)}
                            onClick={(event) => handleOnClick(event)}
                            className="link"
                            name="Contact"
                            style={{ "--i": "0.35s" }}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            {setComponent()}
            <Clock />
            {/* <Outlet /> */}
        </>
    );
};

export default Layout;
