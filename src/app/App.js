import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/ui/layout";
import HomePage from "./components/common/page/homePage/homePage";
import ServicesPage from "./components/common/page/servicesPage/servicesPage";
import PortfolioPage from "./components/common/page/portfolioPage/portfolioPage";
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
                <Route index element={<HomePage />} />
                <Route path="services" element={<ServicesPage />} />
                <Route path="portfolio" element={<PortfolioPage />} />
                <Route path="*" element={<HomePage />} />
            </Route>
        </Routes>
    );
};

export default App;
