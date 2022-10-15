import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./components/common/page/homePage/homePage";
import Preloader from "./components/common/preloader/preloader";

const App = () => {
    const [loading, setLoading] = useState(true);
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }
    return loading ? (
        <Preloader />
    ) : (
        <div className="container" id="container">
            <div className="background" id="background">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
