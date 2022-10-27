import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Home from "../../layouts/home";
import Services from "../../layouts/services";
import Portfolio from "../../layouts/portfolio";
import Testimonials from "../../layouts/testimonials";
import About from "../../layouts/about";
import Contact from "../../layouts/contact";
import Clock from "../common/clock/clock";

import Button from "../common/button/button";

const Layout = () => {
    const container = document.querySelector(".container");
    const navigate = useNavigate();
    const [screen, setScreen] = useState("Home");

    const handleMouseEnter = (event) => {
        event.preventDefault();

        navigate(`/${screen.toLowerCase()}`, { replace: true });

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
                        <Button
                            content="Home"
                            name="Home"
                            handleMouseEnter={handleMouseEnter}
                            handleOnClick={handleOnClick}
                            style={{ "--i": "0.1s" }}
                            className="link"
                        />
                    </li>
                    <li>
                        <Button
                            content="Services"
                            name="Services"
                            handleMouseEnter={handleMouseEnter}
                            handleOnClick={handleOnClick}
                            style={{ "--i": "0.15s" }}
                            className="link"
                        />
                    </li>
                    <li>
                        <Button
                            content="Portfolio"
                            name="Portfolio"
                            handleMouseEnter={handleMouseEnter}
                            handleOnClick={handleOnClick}
                            style={{ "--i": "0.2s" }}
                            className="link"
                        />
                    </li>
                    <li>
                        <Button
                            content="Testimonials"
                            name="Testimonials"
                            handleMouseEnter={handleMouseEnter}
                            handleOnClick={handleOnClick}
                            style={{ "--i": "0.25s" }}
                            className="link"
                        />
                    </li>
                    <li>
                        <Button
                            content="About"
                            name="About"
                            handleMouseEnter={handleMouseEnter}
                            handleOnClick={handleOnClick}
                            style={{ "--i": "0.3s" }}
                            className="link"
                        />
                    </li>
                    <li>
                        <Button
                            content="Contact"
                            name="Contact"
                            handleMouseEnter={handleMouseEnter}
                            handleOnClick={handleOnClick}
                            style={{ "--i": "0.35s" }}
                            className="link"
                        />
                    </li>
                </ul>
            </div>
            {setComponent()}
            <Clock />
        </>
    );
};

export default Layout;
