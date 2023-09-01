import { createAction } from "@reduxjs/toolkit";

const add_cities = createAction('add_cities', (array)=>{
    return {
        payload: {
            cities: array
        } 
    }
})


const cityActions = {add_cities}
export default cityActions