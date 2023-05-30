import { Button, Typography, TextField, Box} from "@mui/material"
import FlexBetween from "../../components/FlexBetween";

export const Dashboard =()=>{
    return (
            <Box m="1rem 1rem" >
                <FlexBetween>
                <Button>Dashboard</Button>
                <Typography fontSize="50px">hola</Typography>
                <TextField  fullWidth/>
                </FlexBetween>
            </Box>
        

    )
}