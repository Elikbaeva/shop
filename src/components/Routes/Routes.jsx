import React from "react";
import { Route,Routes } from "react-router-dom"
import { ROUTES } from "../../utils/routes"
import Home from "../Home/Home";
import SingleProduct from "../Products/SingleProduct";
import Profile from "../Profile/Profile";
import SingleCatecory from "../Categories/SingleCategory"
import Cart from "../Cart/Cart";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />}/>
            <Route path={ROUTES.PRODUCT} element={<SingleProduct />}/>
            <Route path={ROUTES.PROFIlE} element={<Profile />}/>
            <Route path={ROUTES.CATEGORY} element={<SingleCatecory />}/>
            <Route path={ROUTES.CART} element={<Cart />}/>
        </Routes>
    )
}

export default AppRoutes