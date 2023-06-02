import { useDispatch, useSelector } from "react-redux";
import eletionApi from "../api/electionApi";
import { onLoadKpi,onLogoutKpi } from "../store"; 
export const useKpiStore =()=>{
    const {kpis,errorMessageKpi} = useSelector(state=>state.kpi);
    const { user } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startGetVotes = async()=>{
        try {
            const {data} = await eletionApi.get(`/api/vote/${user.rol}`);
            dispatch(onLoadKpi(data.votes));
        } catch (err) {
            dispatch(onLogoutKpi("Error al cargar los KPI"))
        }
    }


    const startOnLogoutKpi =()=>{
        dispatch(onLogoutKpi());
    }


    return{
        //* Properties
        kpis,
        errorMessageKpi,

        //*Methods
        startGetVotes,
        startOnLogoutKpi,

    }
}