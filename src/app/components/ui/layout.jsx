import React, { useState } from "react";
import { Link } from "react-router-dom";

import Home from "../../layouts/home";
import Services from "../../layouts/services";
import Portfolio from "../../layouts/portfolio";
import Testimonials from "../../layouts/testimonials";

const Layout = () => {
    const container = document.querySelector(".container");
    const [screen, setScreen] = useState("Home");

    const handleMouseEnter = (event) => {
        event.preventDefault();
        if (event.target.name === "Home") {
            setScreen("Home");
        }
        if (event.target.name === "Services") {
            setScreen("Services");
        }
        if (event.target.name === "Portfolio") {
            setScreen("Portfolio");
        }
        if (event.target.name === "Testimonials") {
            setScreen("Testimonials");
        }
        if (event.target.name === "About") {
            setScreen("About");
        }
        if (event.target.name === "Contact") {
            setScreen("Contact");
        }
        if (event.target.name === "Clock") {
            setScreen("Clock");
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

            // case "About":
            //     return <About />;

            // case "Contact":
            //     return <Contact />;

            // case "Clock":
            //     return <Clock />;
        }
    };

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
                    {/* <li>
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
            {setComponent()}
            {/* <Outlet /> */}
        </>
    );
};

export default Layout;
