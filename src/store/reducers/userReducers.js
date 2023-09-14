import { createReducer } from "@reduxjs/toolkit";
import { signUp, signIn, authenticated, upUser, logout } from "../actions/userActions"; 

const initialState = {
    user: null
}

const userReduser = createReducer(initialState, (builder)=>{
    return builder
    .addCase(upUser, (state,action)=>{
        return {
            ...state,
            user: action.payload
        }
    })
    .addCase(signUp.fulfilled, (state, action) => {
        
        return {
            ...state, user: action.payload
        }
    })
    .addCase(signIn.fulfilled, (state, action) => {
        
        return {
            ...state, user: action.payload
        }
    })
    .addCase(authenticated.fulfilled, (state, action) => {
        return {
            ...state, user: action.payload
        }
    })
    .addCase(logout, (state, action) => {
        return {
            ...state, user: action.null
        }
    })
})

export default userReduser