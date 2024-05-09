import {configureStore} from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import categoriesSlice from "./categories/categoriesSlice";
import productSlice from "./products/productSlice";
import UserSlice from "./user/userSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productSlice,
        user: UserSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    }, 
    middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
    devTools: true,
})