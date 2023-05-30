import { Button, Typography, TextField, Box} from "@mui/material"
import FlexBetween from "../../components/FlexBetween";
import { useAuthStore,useTableStore} from "../../hooks";

export const UrnaPage =()=>{
    const {startUpdateTableVoting} = useTableStore();
    

    return (
            <Box m="1rem 1rem" >
                <FlexBetween>
                <Button onClick={()=>startVoting()}>Votar</Button>
                <Typography fontSize="50px">hola</Typography>
                <TextField  fullWidth/>
                <Button onClick={()=>startUpdateTableVoting(false)}>Finalizar</Button>
                </FlexBetween>
            </Box>
        

    )
}