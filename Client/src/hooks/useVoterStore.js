import { useDispatch, useSelector } from "react-redux";
import eletionApi from "../api/electionApi";
import { setVoter,unsetVoter,clearErrorMessageVoter } from "../store"; 

export const useVoterStore = ()=>{
    const {voter,errorMessageVoter,voted} = useSelector(state=>state.voter)
    const dispatch = useDispatch();

    const startVoter = async({dpi}) =>{
        try {
            const {data} = await eletionApi.get(`/api/voter/${dpi}`);
            dispatch(unsetVoter());
            dispatch(setVoter(data))
        } catch (error) {
            dispatch(unsetVoter('Error no existe el votante'))
        }
    }

    const startUnsetVoter =()=>{
        dispatch(unsetVoter());
    }

    const startClearMessageVoter =()=>{
        dispatch(clearErrorMessageVoter());
    }

    return {
        //* Properties
        voter, 
        errorMessageVoter,
        voted,

        //* Methods
        startVoter,
        startUnsetVoter,
        startClearMessageVoter,
    }
}