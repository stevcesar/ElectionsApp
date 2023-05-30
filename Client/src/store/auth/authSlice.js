import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'authenticated','not-authenticated',
        mode: "light",
        user: {},
        errorMessage: undefined
    },
    reducers: {
        setMode:(state)=>{
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        onChecking: ( state ) => {
            state.status = 'checking';
            state.errorMessage = undefined;
        },
        onLogin: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        onLogout: ( state, { payload } ) => {
            state.status = 'not-authenticated';
            state.user   = {};
            state.errorMessage = payload;
        },
        clearErrorMessage: ( state ) => {
            state.errorMessage = undefined;
        }
    }
});


// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, clearErrorMessage, setMode} = authSlice.actions;