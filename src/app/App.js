import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/ui/layout";

import Home from "./layouts/home";
import Services from "./layouts/services";
import Portfolio from "./layouts/portfolio";
import Testimonials from "./layouts/testimonials";

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
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="testimonials" element={<Testimonials />}></Route>
                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    );
};

export default App;
