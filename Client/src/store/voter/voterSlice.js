import { createSlice } from "@reduxjs/toolkit";

export const voterSlicer = createSlice({
    name: 'voter',
    initialState:{
        voter: {},
        voted: false,
        errorMessageVoter: undefined
    },
    reducers: {
        setVoter: (state,{payload})=>{
            state.voter = payload.voter;
            state.voted = payload.voted;
            state.errorMessageVoter= undefined;
        },
        unsetVoter: (state, {payload})=>{
            state.voter = {},
            state.voted = undefined
            state.errorMessageVoter = payload
        },
        clearErrorMessageVoter: ( state ) => {
            state.errorMessageVoter = undefined;
        }
    }
});

// Action creators are generated for each case reducer function
export const {setVoter, unsetVoter, clearErrorMessageVoter} = voterSlicer.actions;