import { Box,Button,Grid,Typography,useTheme } from "@mui/material"
import {LockOutlined} from "@mui/icons-material";
import { useTableStore,useVoterStore } from "../hooks";

export const LockedScreen = ()=>{
    const {startGetTable,table}= useTableStore();
    const {startVoter,voter}= useVoterStore();
    const handleSubmit = ()=>{        
        startGetTable();
        startVoter({dpi:voter.dpi})
    }
    return(
        <Box
            flexDirection="column"
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(50, 50, 50, 0.9)",
                zIndex: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            >
                <LockOutlined fontSize="large" sx={{color: "white"}}/>
                <Typography variant="h2" color="white">
                    Votación en curso
                </Typography>
                <Typography variant="h3" color="white">
                    Terminal bloqueada
                </Typography>
                <Button sx={{mt:"10px"}} variant="contained" onClick={handleSubmit}>
                    Finalizar
                </Button>
        </Box>
    )
}
