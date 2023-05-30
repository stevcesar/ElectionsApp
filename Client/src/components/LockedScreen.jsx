import { Box,Button,Typography } from "@mui/material"
import {LockOutlined} from "@mui/icons-material";
import { useTableStore } from "../hooks";
export const LockedScreen = ()=>{
    const {startGetTable}= useTableStore();
    const handleSubmit = ()=>{        
        startGetTable();
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
                backgroundColor: "rgba(128, 128, 128, 0.5)",
                zIndex: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            >
                <LockOutlined fontSize="large"/>
                <Typography variant="h2" color="text.primary">
                    Votación en curso
                </Typography>
                <Typography variant="h3" color="text.primary">
                    Terminal bloqueada
                </Typography>
                <Button onClick={handleSubmit}>
                    Finalizar
                </Button>
        </Box>
    )
}
