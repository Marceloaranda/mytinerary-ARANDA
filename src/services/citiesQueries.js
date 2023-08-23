import axios from "axios" 

const cities = axios.create({
    baseURL: 'http://localhost:3000',
})


export const getCities = async ( queryParams ) => {
    try {
        const {data} = await cities("/api/city"+queryParams)
        return data

    } catch (err) {
        return []
    }



}