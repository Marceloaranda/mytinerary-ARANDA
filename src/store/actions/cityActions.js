import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getCities } from "../../services/citiesQueries";

const add_cities = createAction('add_cities', (array)=>{
    return {
        payload: {
            cities: array
        } 
    }
})

const allCitiesAsync = createAsyncThunk('all_cities_async', async(query)=>{
    try {
        const data = await getCities(query)
        return data

    }catch(e) {
        console.log(e);
    }
})



const cityActions = {add_cities, allCitiesAsync}
export default cityActions