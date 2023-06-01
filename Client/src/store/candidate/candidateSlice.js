import { createSlice } from "@reduxjs/toolkit";

export const candidateSlice = createSlice({
    name: 'candidate',
    initialState:{
        candidates:[],
        elections: [],
        errorMessageCandidate: undefined
    },
    reducers:{
        onLoadCandidates: (state,{payload=[]})=>{
            payload.forEach(candidate =>{
                const exists = state.candidates.some(dbCandidate => dbCandidate._id === candidate._id);
                const existselection = state.elections.some(dbElection => dbElection === candidate.election.name);
                if(!exists){
                    state.candidates.push(candidate)
                }
                if(!existselection){
                    state.elections.push(candidate.election.name)
                }
            })
            state.errorMessageCandidate = undefined
        },
        onLogoutCandidates: (state, {payload})=>{
            state.candidates= [],
            state.elections=[],
            state.errorMessageCandidate = payload
        },
        clearErrorMessageCandidate: ( state ) => {
            state.errorMessageCandidate = undefined;
        }
    }
});

// Action creators are generated for each case reducer function
export const {onLoadCandidates,onLogoutCandidates,clearErrorMessageCandidate} = candidateSlice.actions;