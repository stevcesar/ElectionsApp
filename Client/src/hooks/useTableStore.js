import { useDispatch, useSelector } from "react-redux";
import eletionApi from "../api/electionApi";
import { setTable, unsetTable, clearErrorMessageTable } from "../store";

export const useTableStore =()=>{
    const {table,errrMessageTable} = useSelector(state => state.table);
    const { user } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startGetTable = async()=>{
        
        try {
            const {data} = await eletionApi.get(`/api/table/${user.table}`);
            delete data.ok;
            dispatch(setTable(data.table));
        } catch (err) {
            dispatch(unsetTable('Error en tabla'));
        }
    }
    const startUpdateTableVoting = async(voting) =>{
        try {
            const {data} = await eletionApi.patch(`/api/table/update/voting/${user.table}/${voting}`)
            delete data.ok;
            dispatch(setTable(data.table));
        } catch (err) {
            dispatch(unsetTable('Error en tabla'));
        }
    }

    return{
        //* Properties
        table,
        errrMessageTable,

        //*Methods
        startGetTable,
        startUpdateTableVoting,
    }
}