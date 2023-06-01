import { createSlice } from "@reduxjs/toolkit";

export const voteSlice = createSlice({
    name: 'vote',
    initialState:{
        vote:[],
        errorMessageVote: undefined
    },
    reducers:{
        setVote:(state,{payload})=>{
           let founMatch = false;
           for(let i = 0; i<state.vote.length; i++){
                if(state.vote[i].election === payload.election && state.vote[i].candidate === payload.candidate){
                    state.vote.splice(i,1);
                    founMatch= true                    
                    break;
                }
                if(state.vote[i].election === payload.election){
                    state.vote.splice(i,1);
                }
                
           }
           if(!founMatch){
                state.vote.push(payload);
                state.errorMessageVote = undefined
           }
        },
        unsetVote: (state,{payload})=>{
            state.vote= [];
            state.errorMessageVote = payload
        }
    }
})

// Action creators are generated for each case reducer function
export const {setVote, unsetVote} = voteSlice.actions;