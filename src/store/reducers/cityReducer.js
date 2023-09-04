import { createReducer } from "@reduxjs/toolkit";
import cityActions from "../actions/cityActions";

const initialState = {
    cities: [],
    city: {}
}


const citiesReducer = createReducer(initialState, (builder)=> {
    return builder
    .addCase(cityActions.add_cities, (state, action)=>{
        const newState = {...state, cities: action.payload.cities}
        return newState
    })
    .addCase(cityActions.allCitiesAsync.fulfilled, (state, action)=>{
        const newState = {...state, cities: action.payload}
        return newState
    })
    .addCase(cityActions.detailCity.fulfilled, (state, action)=>{
        const newState = {...state, city: action.payload}
        return newState
    })
})
export default citiesReducer