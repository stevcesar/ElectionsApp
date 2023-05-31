import { Box,Typography } from "@mui/material"
import { useAuthStore,useTableStore } from "../../hooks";

export const InstructionsPage =({value,index})=>{
    const {mode} = useAuthStore();
    return (
        <div
            role="tabpanel"
            hidden= {value!==index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            <Box padding={2} >
                <Box padding="15px" display="flex" flexDirection="row" alignItems="center">
                    <img src={mode =="light" ? "/assets/tseb.png" : "/assets/tsew.png"}  width="60px" height="60px"></img>
                    <Typography marginLeft="10px" variant="h1" color="#0075BE" fontWeight="500">TSE</Typography>
                </Box>
                <Typography variant="h3" mb={1} fontWeight={500}>¿Cómo Votar?</Typography>
                <Typography fontSize={15}>* Para comenzar a votar haz clic en el botón "Comenzar Votación"</Typography>
                <Typography fontSize={15}>* Luego se habilitaran las pestañas para cada elección</Typography>
                <Typography fontSize={15}>* Elige al candidato que prefieras con un clic sobre él y pondrá de color verde con la palabra "Seleccionado"</Typography>
                <Typography fontSize={15}>* Si cambias de opinión puedes cambiar de elección haciendo click sobre el que elegiste o sobre otro candidato</Typography>
            </Box>
        </div>
    )
}