import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/cityReducer";
import userReduser from "./reducers/userReducers";

export const store = configureStore({
    reducer:{
        citiesReducer: citiesReducer,
        userReducer: userReduser
    }
})