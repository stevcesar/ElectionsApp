import { Box, Button, Grid, Typography } from "@mui/material"
import FlexBetween from "../../components/FlexBetween"
import { Header } from "../../components"
import { useAuthStore, useTableStore} from "../../hooks"

export const CloseTablePage =()=>{
    const {user} = useAuthStore();
    const {table,startUpdateTableClose} = useTableStore();
    const handleClick = ()=>{
        startUpdateTableClose(true);
    }
    return(
        <Box m="1rem 1rem">
        <FlexBetween>
            <Header title="CERRAR MESA" subtitle="Para cerrar la mesa lea el acta y luego clic en Cerrar"/>
        </FlexBetween>
        <Box
        mt="20px"
        >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Button onClick={handleClick} disabled={!table.enable} variant="contained" sx={{backgroundColor: "red", color: "white"}}>Cerrar</Button>
                </Grid>
                <Grid item xs={12}>
                    <Box borderColor="primary" border={1} padding={1}>
                        <Typography>{`Fecha: ${new Date().toLocaleDateString('es-Es',{day: 'numeric', month:'long',year:'numeric'})} Ciudad de Guatemala`}</Typography>
                        <Typography>{`Hora: ${new Date().getHours()}:${new Date().getMinutes()}`}</Typography>
                        <Typography>{`Lugar: Ciudad de Guatemala`}</Typography>
                        <Typography>{`Asistentes: Presidente ${user.firstName} ${user.lastName}`}</Typography>
                        <Typography mt="20px">{`Desarrollo: Se da por finalizada la mesa No.${table.number} del Centro de votación: ${table.center.name}`}</Typography>
                        <Typography mt="40px">{`TRIBUNAL SUPREMO ELECTORAL`}</Typography>
                    </Box>
                </Grid>
            </Grid> 
        </Box>
               
        </Box>
    )
}