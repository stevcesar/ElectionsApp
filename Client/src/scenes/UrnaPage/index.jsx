import {Box, Tabs,Tab, Button} from "@mui/material";
import { useState } from "react";
import { CandidatesPanel } from "./CandidatesPanel";
import { useTableStore } from "../../hooks";
import { InstructionsPage } from "./InstructionsPage";

const candidates = [
    {
        "_id": "1",
        "firstName": "Luis",
        "lastName": "Ramiro",
        "dpi": "1234567891234",
        "politicalParty": "Partido Politico",
        "election": {
            "_id": "646ebed0d3a83fd8437a6d30",
            "name": "Presidente",
            "enable": true
        },
        "picturePath": "Presidente1.jpg",
        "enable": true
    },
    {
        "_id": "2",
        "firstName": "Pedro",
        "lastName": "Lopez",
        "dpi": "1234567891235",
        "politicalParty": "Partido Rojo",
        "election": {
            "_id": "646ebed0d3a83fd8437a6d30",
            "name": "Presidente",
            "enable": true
        },
        "picturePath": "Presidente1.jpg",
        "enable": true
    },
    {
        "_id": "3",
        "firstName": "Pedro",
        "lastName": "Lopez",
        "dpi": "1234567891235",
        "politicalParty": "Partido Rojo",
        "election": {
            "_id": "646ebed0d3a83fd8437a6d30",
            "name": "Presidente",
            "enable": true
        },
        "picturePath": "Presidente1.jpg",
        "enable": true
    },
    {
        "_id": "4",
        "firstName": "Pedro",
        "lastName": "Lopez",
        "dpi": "1234567891235",
        "politicalParty": "Partido Rojo",
        "election": {
            "_id": "646ebed0d3a83fd8437a6d30",
            "name": "Presidente",
            "enable": true
        },
        "picturePath": "Presidente1.jpg",
        "enable": true
    },
    {
        "_id": "5",
        "firstName": "Pedro",
        "lastName": "Lopez",
        "dpi": "1234567891235",
        "politicalParty": "Partido Rojo",
        "election": {
            "_id": "646ebed0d3a83fd8437a6d30",
            "name": "Presidente",
            "enable": true
        },
        "picturePath": "Presidente1.jpg",
        "enable": true
    },
    {
        "_id": "6",
        "firstName": "Pedro",
        "lastName": "Lopez",
        "dpi": "1234567891235",
        "politicalParty": "Partido Rojo",
        "election": {
            "_id": "646ebed0d3a83fd8437a6d30",
            "name": "Presidente",
            "enable": true
        },
        "picturePath": "Presidente1.jpg",
        "enable": true
    },
    {
        "_id": "7",
        "firstName": "Pedro",
        "lastName": "Lopez",
        "dpi": "1234567891235",
        "politicalParty": "Partido Rojo",
        "election": {
            "_id": "646ebed0d3a83fd8437a6d30",
            "name": "Presidente",
            "enable": true
        },
        "picturePath": "Presidente1.jpg",
        "enable": true
    },
    {
        "_id": "8",
        "firstName": "Pedro",
        "lastName": "Lopez",
        "dpi": "1234567891235",
        "politicalParty": "Partido Rojo",
        "election": {
            "_id": "646ebed0d3a83fd8437a6d30",
            "name": "Presidente",
            "enable": true
        },
        "picturePath": "Presidente1.jpg",
        "enable": true
    },
    {
        "_id": "9",
        "firstName": "Pedro",
        "lastName": "Lopez",
        "dpi": "1234567891235",
        "politicalParty": "Partido Rojo",
        "election": {
            "_id": "646ebed0d3a83fd8437a6d30",
            "name": "Presidente",
            "enable": true
        },
        "picturePath": "Presidente1.jpg",
        "enable": true
    },
    {
        "_id": "10",
        "firstName": "Pedro",
        "lastName": "Lopez",
        "dpi": "1234567891235",
        "politicalParty": "Partido Rojo",
        "election": {
            "_id": "646ebed0d3a83fd8437a6d30",
            "name": "Presidente",
            "enable": true
        },
        "picturePath": "Presidente1.jpg",
        "enable": true
    },
    {
        "_id": "11",
        "firstName": "Daniel",
        "lastName": "Gutierrez",
        "dpi": "1234567891287",
        "politicalParty": "Partido Politico",
        "election": {
            "_id": "646fbdf510e940e8677f3686",
            "name": "Alcalde",
            "enable": true
        },
        "picturePath": "Alcande1.jpg",
        "enable": true
    },
    {
        "_id": "12",
        "firstName": "Maria",
        "lastName": "Ortiz",
        "dpi": "1234567894873",
        "politicalParty": "Partido Rojo",
        "election": {
            "_id": "646fbdf510e940e8677f3686",
            "name": "Alcalde",
            "enable": true
        },
        "picturePath": "Alcalde2.jpg",
        "enable": true
    }
    
]


export const UrnaPage =()=>{
    const [value, setValue]= useState(0);
    const handleChange = (event,newValue)=>{
        setValue(newValue)
    }
    
    const {startGetTable,table} = useTableStore();
    const handleStartVote=()=>{
        startGetTable();
        console.log(table.voting);
    }
    
    return (
         <Box sx={{ width: '100%' }}>
            <Box padding={1}>
                <Button variant="contained" onClick={handleStartVote}>Comenzar Votación</Button>
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} >
                    <Tab label="Instrucciones" disabled={!table.voting}/>
                    <Tab label="Presidente" disabled={!table.voting}/>
                    <Tab label="Item Two"  disabled={!table.voting}/>
                    <Tab label="Item Three" disabled={!table.voting}/>
                </Tabs>
            </Box>
            <InstructionsPage value ={value} index={0}/>
            <CandidatesPanel value={value} index={1}>{candidates.filter((objet)=>objet.election.name === "Presidente")}</CandidatesPanel>
            <CandidatesPanel value={value} index={2}>Adios</CandidatesPanel>
            </Box>
    )
}