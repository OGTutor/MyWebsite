import React, { useState, useRef } from "react";

import { Canvas } from "@react-three/fiber";

import Model from "./3dModel/3dModel";

import "./styles/navBar.scss";

const NavBar = () => {
    const container = document.querySelector(".container");
    const bar = useRef("");
    const [openBar, setOpenBar] = useState(false);

    const modelStyle = {
        position: "relative",
        top: "auto",
        left: "820px",
        width: "150px",
        height: "100px",
        background: "url('./media/img/neon.png') no-repeat center / contain"
    };

    const toggleActiveContainer = () => {
        container.classList.toggle("active");
        if (!openBar) {
            bar.current.classList.add("open");
            setOpenBar((prevState) => !prevState);
        } else {
            bar.current.classList.remove("open");
            setOpenBar((prevState) => !prevState);
        }
    };

    return (
        <nav className="navbar">
            <div className="menu">
                <div className="logo">
                    <div className="logo_image">
                        <div className="box_logo">
                            <Canvas
                                style={modelStyle}
                                camera={{ position: [0, 0, 5] }}
                            >
                                <Model position={[-1.5, 0, 0]} />
                                <Model
                                    position={[0, 0, 0]}
                                    rotation={[Math.PI / 4, Math.PI / 4, 0]}
                                />
                                <Model position={[1.5, 0, 0]} />
                            </Canvas>
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
                    <div className="bar" ref={bar}></div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
