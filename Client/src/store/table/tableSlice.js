import { createSlice } from "@reduxjs/toolkit";

export const tableSlice = createSlice({
    name: 'table',
    initialState:{
        table: {},
        errorMessageTable: undefined
    },
    reducers:{
        setTable: (state,{payload}) =>{
            state.table = payload,
            state.errorMessageTable = undefined
        },
        unsetTable: (state,{payload})=>{
            state.table = {},
            state.errorMessageTable = payload
        },
        clearErrorMessageTable: ( state ) => {
            state.errorMessageTable = undefined;
        }
    }
})

// Action creators are generated for each case reducer function
export const {setTable,unsetTable,clearErrorMessageTable} = tableSlice.actions;