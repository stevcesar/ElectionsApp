import { Box,Button,Typography,TextField } from "@mui/material"
import FlexBetween from "../../components/FlexBetween"
import { useAuthStore, useTableStore } from "../../hooks"

export const VotePage =()=>{
    const {user} = useAuthStore();
    const {startUpdateTableVoting} = useTableStore();
    return (
        <Box m="1rem 1rem" >
            <FlexBetween>
            <Button onClick={()=>startUpdateTableVoting(true)}>Iniciar Votación</Button>
            <Typography fontSize="50px">Votante</Typography>
            <TextField  fullWidth/>
            </FlexBetween>
        </Box>
    

)
}