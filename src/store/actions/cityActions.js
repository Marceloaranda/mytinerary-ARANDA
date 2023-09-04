import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getCities, getOneCity } from "../../services/citiesQueries";

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

    }catch(err) {
        console.log(err);
    }
})

const detailCity =createAsyncThunk('detail_city', async(id)=>{
        const data = await getOneCity(id)
        return data
})



const cityActions = {add_cities, allCitiesAsync, detailCity}
export default cityActions