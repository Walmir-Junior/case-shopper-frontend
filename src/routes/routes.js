import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import StatusCart from "../components/StatusCart/StatusCart"
import Home from "../pages/Home/Home"
import NotFound from "../pages/NotFound/NotFound"
import Stock from "../pages/Stock/Stock"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/stock" element={<Stock />} />
                <Route path="/Cart" element={<StatusCart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
