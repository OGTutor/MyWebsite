import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./components/common/page/homePage/homePage";

const App = () => {
    return (
        <div className="container" id="container">
            <div class="background" id="background">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
