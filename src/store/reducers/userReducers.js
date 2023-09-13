import { createReducer } from "@reduxjs/toolkit";
import { signUp, signIn, authenticated, upUser } from "../actions/userActions"; 

const initialState = {
    user: {}
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
    .addCase(authenticated, (state, action) => {
        return {
            ...state, user: action.payload
        }
    })
})

export default userReduser