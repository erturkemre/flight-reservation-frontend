import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Reservations from "../pages/Reservations";

const PageContent = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="my-reservations" element={<div><Reservations/></div>} />
        </Routes>
    );
}

export default PageContent;