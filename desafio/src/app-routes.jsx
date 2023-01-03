import React from "react"
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login-page/login-page";
import MainPage from "./pages/main-page/main-page";

export default function AppRoutes (props) {

    return(
       
        <Routes>
            <Route path="/" element={<MainPage />} /><Route path="/login" element={<LoginPage />} exact />
        </Routes>
    )
}