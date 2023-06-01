import { useDispatch,useSelector } from "react-redux";
import { setVote,unsetVote } from "../store";
import eletionApi from "../api/electionApi";
import Swal from 'sweetalert2';

export const useVoteStore =()=>{
    const {vote,errorMessageVote}= useSelector(state=>state.vote);
    const dispatch = useDispatch();

    const startSetVote = (voto)=>{
        dispatch(setVote(voto));
    }

    const statUnsetVote= ()=>{
        dispatch(unsetVote());
    }

    const startSendVotes=async(voter,candidates)=>{
        try {
            const newcandidates = candidates.map(({candidate})=>({candidate}))
            await eletionApi.post('/api/vote/create',{voter,candidates: newcandidates});
            Swal.fire({
                icon: 'success',
                title:'Exito',
                text: 'Se grabaron tus votaciones',
                inputLabel: 'SuccessVote'
            });
        } catch (err) {
            dispatch(unsetVote("No se logro grabar los votos"));
            Swal.fire({
                icon: 'error',
                title:'Error',
                text: 'No se logro guardar los votos',
                inputLabel: 'ErrorVote'
            }).then(()=>{
                window.location.reload();
            });
        }
    }

    return {
        //* Properties
        vote,
        errorMessageVote,

        //* Methods
        startSetVote,
        statUnsetVote,
        startSendVotes,
    }
}