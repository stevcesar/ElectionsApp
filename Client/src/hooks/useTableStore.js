import { useDispatch, useSelector } from "react-redux";
import eletionApi from "../api/electionApi";
import { setTable, unsetTable, clearErrorMessageTable } from "../store";

export const useTableStore =()=>{
    const {table,errorMessageTable} = useSelector(state => state.table);
    const { user } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startGetTable = async()=>{
        
        try {
            const {data} = await eletionApi.get(`/api/table/${user.table}`);
            dispatch(setTable(data.table));
        } catch (err) {
            dispatch(unsetTable('Error en tabla'));
        }
    }
    const startUpdateTableVoting = async(voting,voter="null") =>{
        try {
            const {data} = await eletionApi.patch(`/api/table/update/voting/${user.table}/${voting}/${voter}`)
            dispatch(setTable(data.table));
        } catch (err) {
            dispatch(unsetTable('Error en tabla'));
        }
    }

    const startUpdateTableEnable = async(enable) =>{
        try {
            const {data} = await eletionApi.patch(`/api/table/update/enable/${user.table}/${enable}`)
            dispatch(setTable(data.table));
        } catch (err) {
            dispatch(unsetTable('Error en tabla'));
        }
    }

    const startUpdateTableClose = async(close) =>{
        try {
            const {data} = await eletionApi.patch(`/api/table/update/close/${user.table}/${close}`)
            dispatch(setTable(data.table));
        } catch (err) {
            dispatch(unsetTable('Error en tabla'));
        }
    }

    const startUnSetTable = ()=>{
        dispatch(unsetTable());
        dispatch(clearErrorMessageTable());
    }

    return{
        //* Properties
        table,
        errorMessageTable,

        //*Methods
        startGetTable,
        startUpdateTableVoting,
        startUnSetTable,
        startUpdateTableEnable,
        startUpdateTableClose,
    }
}