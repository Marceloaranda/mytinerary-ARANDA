import { createReducer } from "@reduxjs/toolkit";
import cityActions from "../actions/cityActions";

const initialState = {
    cities: []

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

})
export default citiesReducer