import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/cityReducer";


export const store = configureStore({
    reducer:{
        citiesReducer: citiesReducer
    }
})