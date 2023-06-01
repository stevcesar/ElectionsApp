import {Box, Tabs,Tab, Button, Typography, Grid, Alert} from "@mui/material";
import { useEffect, useState } from "react";
import { CandidatesPanel } from "./CandidatesPanel";
import { useCandidateStore, useTableStore, useVoteStore, useVoterStore } from "../../hooks";
import { InstructionsPage } from "./InstructionsPage";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import {useNavigate} from 'react-router-dom'

// const candidates = [
//     {
//         "_id": "1",
//         "firstName": "Luis",
//         "lastName": "Ramiro",
//         "dpi": "1234567891234",
//         "politicalParty": "Partido Politico",
//         "election": {
//             "_id": "646ebed0d3a83fd8437a6d30",
//             "name": "Presidente",
//             "enable": true
//         },
//         "picturePath": "Presidente1.jpg",
//         "enable": true
//     },
//     {
//         "_id": "2",
//         "firstName": "Pedro",
//         "lastName": "Lopez",
//         "dpi": "1234567891235",
//         "politicalParty": "Partido Rojo",
//         "election": {
//             "_id": "646ebed0d3a83fd8437a6d30",
//             "name": "Presidente",
//             "enable": true
//         },
//         "picturePath": "Presidente1.jpg",
//         "enable": true
//     },
//     {
//         "_id": "3",
//         "firstName": "Pedro",
//         "lastName": "Lopez",
//         "dpi": "1234567891235",
//         "politicalParty": "Partido Rojo",
//         "election": {
//             "_id": "646ebed0d3a83fd8437a6d30",
//             "name": "Presidente",
//             "enable": true
//         },
//         "picturePath": "Presidente1.jpg",
//         "enable": true
//     },
//     {
//         "_id": "4",
//         "firstName": "Pedro",
//         "lastName": "Lopez",
//         "dpi": "1234567891235",
//         "politicalParty": "Partido Rojo",
//         "election": {
//             "_id": "646ebed0d3a83fd8437a6d30",
//             "name": "Presidente",
//             "enable": true
//         },
//         "picturePath": "Presidente1.jpg",
//         "enable": true
//     },
//     {
//         "_id": "5",
//         "firstName": "Pedro",
//         "lastName": "Lopez",
//         "dpi": "1234567891235",
//         "politicalParty": "Partido Rojo",
//         "election": {
//             "_id": "646ebed0d3a83fd8437a6d30",
//             "name": "Presidente",
//             "enable": true
//         },
//         "picturePath": "Presidente1.jpg",
//         "enable": true
//     },
//     {
//         "_id": "6",
//         "firstName": "Pedro",
//         "lastName": "Lopez",
//         "dpi": "1234567891235",
//         "politicalParty": "Partido Rojo",
//         "election": {
//             "_id": "646ebed0d3a83fd8437a6d30",
//             "name": "Presidente",
//             "enable": true
//         },
//         "picturePath": "Presidente1.jpg",
//         "enable": true
//     },
//     {
//         "_id": "7",
//         "firstName": "Pedro",
//         "lastName": "Lopez",
//         "dpi": "1234567891235",
//         "politicalParty": "Partido Rojo",
//         "election": {
//             "_id": "646ebed0d3a83fd8437a6d30",
//             "name": "Presidente",
//             "enable": true
//         },
//         "picturePath": "Presidente1.jpg",
//         "enable": true
//     },
//     {
//         "_id": "8",
//         "firstName": "Pedro",
//         "lastName": "Lopez",
//         "dpi": "1234567891235",
//         "politicalParty": "Partido Rojo",
//         "election": {
//             "_id": "646ebed0d3a83fd8437a6d30",
//             "name": "Presidente",
//             "enable": true
//         },
//         "picturePath": "Presidente1.jpg",
//         "enable": true
//     },
//     {
//         "_id": "9",
//         "firstName": "Pedro",
//         "lastName": "Lopez",
//         "dpi": "1234567891235",
//         "politicalParty": "Partido Rojo",
//         "election": {
//             "_id": "646ebed0d3a83fd8437a6d30",
//             "name": "Presidente",
//             "enable": true
//         },
//         "picturePath": "Presidente1.jpg",
//         "enable": true
//     },
//     {
//         "_id": "10",
//         "firstName": "Pedro",
//         "lastName": "Lopez",
//         "dpi": "1234567891235",
//         "politicalParty": "Partido Rojo",
//         "election": {
//             "_id": "646ebed0d3a83fd8437a6d30",
//             "name": "Presidente",
//             "enable": true
//         },
//         "picturePath": "Presidente1.jpg",
//         "enable": true
//     },
//     {
//         "_id": "11",
//         "firstName": "Daniel",
//         "lastName": "Gutierrez",
//         "dpi": "1234567891287",
//         "politicalParty": "Partido Politico",
//         "election": {
//             "_id": "646fbdf510e940e8677f3686",
//             "name": "Alcalde",
//             "enable": true
//         },
//         "picturePath": "Alcande1.jpg",
//         "enable": true
//     },
//     {
//         "_id": "12",
//         "firstName": "Maria",
//         "lastName": "Ortiz",
//         "dpi": "1234567894873",
//         "politicalParty": "Partido Rojo",
//         "election": {
//             "_id": "646fbdf510e940e8677f3686",
//             "name": "Alcalde",
//             "enable": true
//         },
//         "picturePath": "Alcalde2.jpg",
//         "enable": true
//     }
    
// ]


export const UrnaPage =()=>{
    const [value, setValue]= useState(0);
    const navigate = useNavigate();
    const [complete,isComplete] = useState(true);
    const handleChange = (event,newValue)=>{
        setValue(newValue)
    }
    const {startGetTable,table,startUpdateTableVoting} = useTableStore();
    const {voter,startVoter,startUnsetVoter} = useVoterStore();
    const {candidates,elections}= useCandidateStore();
    const {vote,startSendVotes,statUnsetVote} = useVoteStore();
    useEffect(()=>{
        startUnsetVoter();
        statUnsetVote();
    },[])

    useEffect(()=>{
        if(table.voter !== "null" && !!table.voter){
            startVoter({dpi: table.voter});
            isComplete(false);
        }
    },[table])
    
    const handleStartVote=()=>{
        startGetTable();
    }
    const handleEndVote=()=>{
        if(elections.length !== vote.length){
            Swal.fire({
                icon: 'info',
                title:'Oops...',
                text: 'No haz completado todas las elecciones',
                inputLabel: 'InfoVote'
            })
        }else{
            startSendVotes(voter._id,vote);
            startUpdateTableVoting(false)
            startUnsetVoter();
            statUnsetVote();
            setValue(0);
            isComplete(true);
        }
            
    }
    
    return (
         <Box sx={{ width: '100%' }}>
            <Grid container padding={1} spacing={2} sx={{justifyContent: "space-between"}}>
                <Grid item xs={12} sm={3} md={3}>
                    <Button fullWidth variant="contained" onClick={handleStartVote}>Comenzar Votación</Button>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    {!(Object.keys(voter).length === 0) && (
                        <Typography textAlign="center" variant="h5">{`Estoy votando: ${voter.firstName} ${voter.lastName} DPI ${voter.dpi}`}</Typography>                                            
                    )
                    }
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <Button disabled={complete} fullWidth variant="contained" onClick={handleEndVote}>Finalizar Votación</Button>
                </Grid>
            </Grid>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} >
                    <Tab label="Instrucciones" disabled={!table.voting}/>
                    <Tab label="Presidente" disabled={!table.voting}/>
                    <Tab label="Alcalde"  disabled={!table.voting}/>
                </Tabs>
            </Box>
            <InstructionsPage value ={value} index={0}/>
            <CandidatesPanel value={value} index={1}>{candidates.filter((objet)=>objet.election.name === "Presidente")}</CandidatesPanel>
            <CandidatesPanel value={value} index={2}>{candidates.filter((objet)=>objet.election.name === "Alcalde")}</CandidatesPanel>
            </Box>
    )
}