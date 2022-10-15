import React from "react";

import "./button.scss";

const Button = () => {
    return (
        <div className="btn">
            <a className="button">
                <span className="button__line button__line--top"></span>
                <span className="button__line button__line--right"></span>
                <span className="button__line button__line--bottom"></span>
                <span className="button__line button__line--left"></span>
                Neon Button
            </a>
        </div>
    );
};

export default Button;
