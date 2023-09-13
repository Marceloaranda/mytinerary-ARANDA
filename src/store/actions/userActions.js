import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const signUp = createAsyncThunk ("create_user", async(body) => {
    try {
        const response = await axios.post('http://localhost:3000/api/user/register', body)
        localStorage.setItem('token', response.data.token);
        return response.data.user
    } catch (error) {
        console.log(error)
    }
})

export const signIn = createAsyncThunk ("login", async(body) => {
    try {
        const response = await axios.post('http://localhost:3000/api/user/login', body)
        localStorage.setItem('token', response.data.token);
        return response.data.user
    } catch (error) {
        console.log(error)
    }
})

export const authenticated = createAsyncThunk ("login_token", async() => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:3000/api/user/authenticated',{}, {
            headers: { 
                'Authorization': 'Bearer ' + token
            }
        })
        return {
            user: response.data.user,
            token: token
        }
    } catch (error) {
        console.log(error)
    }
})