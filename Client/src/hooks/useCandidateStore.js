import { useDispatch, useSelector } from "react-redux";
import eletionApi from "../api/electionApi";
import { onLoadCandidates, onLogoutCandidates, clearErrorMessageCandidate } from "../store";

export const useCandidateStore = ()=>{
    const {candidates,errorMessageCandidate,elections} = useSelector(state=>state.candidate)
    const dispatch = useDispatch();

    const startOnLoadCandidates = async()=>{
        try {
            const {data} = await eletionApi.get('/api/candidate');
            dispatch(onLoadCandidates(data.candidates))
        } catch (err) {
            dispatch(onLogoutCandidates("Error con los candidatos"))
        }
    }
    
    const startOnLogoutCandidates = ()=>{
        dispatch(onLogoutCandidates());
        dispatch(clearErrorMessageCandidate());
    }

    return {
         //* Properties
         candidates,
         errorMessageCandidate,
         elections,
         
         //*Methods
         startOnLoadCandidates,
         startOnLogoutCandidates,
         
    }
}