import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import StatusCart from "../components/StatusCart/StatusCart"
// import Cart from "../pages/Cart/Cart"
import Home from "../pages/Home/Home"
import Stock from "../pages/Stock/Stock"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/stock" element={<Stock/>}/>
                {/* <Route path="/Cart" element={<Cart/>}/> */}
                <Route path="/Cart" element={<StatusCart/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router