import React from "react";
import PropTypes from "prop-types";

import "./button.scss";

const Button = ({ content, name, handleMouseEnter, handleOnClick, style }) => {
    return (
        <div className="btn">
            <a
                onMouseEnter={(event) => handleMouseEnter(event)}
                onClick={(event) => handleOnClick(event)}
                name={name}
                style={style}
                className="button"
            >
                <span className="button__line button__line--top"></span>
                <span className="button__line button__line--right"></span>
                <span className="button__line button__line--bottom"></span>
                <span className="button__line button__line--left"></span>
                {content}
            </a>
        </div>
    );
};

Button.propTypes = {
    content: PropTypes.string,
    name: PropTypes.string,
    handleMouseEnter: PropTypes.func,
    handleOnClick: PropTypes.func,
    style: PropTypes.object
};

export default Button;
