import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import "./styles/main.scss";
import "./styles/logoGlitch.scss";
import "./styles/logo.css";
import "./styles/scrollNeon.css";

import App from "./app/App";

const root = ReactDOM.createRoot(document.getElementById("background"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
