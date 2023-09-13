import { createReducer } from "@reduxjs/toolkit";
import { signUp, signIn, authenticated } from "../actions/userActions"; 

const initialState = {
    user: {
        email: "",
        _id: "",
    }
}

const userReduser = createReducer(initialState, (builder)=>{
    return builder
    .addCase(signUp.fulfilled, (state, action) => {
        return {
            ...state, user: action.payload.user
        }
    })
    .addCase(signIn.fulfilled, (state, action) => {
        return {
            ...state, user: action.payload.user
        }
    })
    .addCase(authenticated, (state, action) => {
        return {
            ...state, user: action.payload.user
        }
    })
})

export default userReduser