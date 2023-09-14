import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const upUser = createAction( 'upUser', (user) => {
    return {
        payload: user
    }
})

export const signUp = createAsyncThunk ("create_user", async(body) => {
    try {
        const response = await axios.post('http://localhost:3000/api/user/register', body)
        localStorage.setItem('token', response.data.token);
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })

        return response.data.user
    } catch (error) {
        let errorMessage = error.response.data.message
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorMessage,
          })


        console.log("este error", error)
    }
})

export const signIn = createAsyncThunk ("login", async(body) => {
    try {
        const response = await axios.post('http://localhost:3000/api/user/login', body)
        localStorage.setItem('token', response.data.token);
        //console.log(response.data.user)
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
        
        return response.data
    } catch (error) {
        let errorMessage = error.response.data.message
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorMessage,
          })
        //console.log(error)
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
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })


        return {
            user: response.data.user,
            token: token
        }
    } catch (error) {
        let errorMessage = error.response.data.message
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorMessage,
          })


        console.log(error)
    }
})

export const logout = createAction("reset", () => {
    localStorage.removeItem('token')
    return {payload : null}
})