import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Sidebar from "../Sidebar/Sidebar"
import { getCategories } from "../../features/categories/categoriesSlice";
import { getProduct } from "../../features/products/productSlice";
import UserForm from "../../components/User/Userform";




const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getProduct())
    }, [dispatch])

    return <div className="app">
        <Header />
        <UserForm />
        <div className="container">
            <Sidebar />
            <AppRoutes />
        </div>
        <Footer />
    </div>
}

export default App