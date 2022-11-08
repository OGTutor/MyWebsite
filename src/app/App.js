import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/ui/layout";

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
        <Routes>
            <Route path="/" element={<Layout />} />
        </Routes>
    );
};

export default App;
