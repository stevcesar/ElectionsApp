import { createSlice } from "@reduxjs/toolkit";

export const kpiSlice = createSlice({
    name: 'kpi',
    initialState:{

        kpis:[],
        errorMessageKpi: undefined
    },
    reducers:{
        onLoadKpi:(state,{payload})=>{
            state.kpis = payload;
            state.errorMessageKpi = undefined
        },
        onLogoutKpi:(state,{payload})=>{
            state.kpis =[],
            state.errorMessageKpi= payload
        }
    }
})

// Action creators are generated for each case reducer function
export const {onLoadKpi, onLogoutKpi} = kpiSlice.actions;