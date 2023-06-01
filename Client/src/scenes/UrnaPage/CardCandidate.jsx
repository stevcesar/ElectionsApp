import { Box,Card,CardActionArea, CardContent, CardMedia, Grid, Typography ,useTheme} from "@mui/material"
import { getEnvVariables } from "../../helpers/getEnvVariables";
import { useVoteStore } from "../../hooks/useVoteStore";
import { useEffect } from "react";

export const CardCandidate = ({_id,picturePath, firstName, lastName, politicalParty, isSelected, onClick,election})=>{
    const {VITE_API_URL} = getEnvVariables();
    const {startSetVote,vote} = useVoteStore();
    const theme = useTheme();
    const handleClick =() =>{
        startSetVote({candidate: _id, election})
        if(isSelected){
            return onClick(null);
        }
        onClick(_id);
    }
    return(
        <Card
            sx={{
                display: 'flex', 
                maxWidth:300,     
                backgroundColor: isSelected? "green": theme.palette.background.alt,        
                m: "1rem 0",
            }}>
            <CardActionArea onClick={handleClick}>
                <Grid container justifyContent="center">
                    <Grid item xs={6} alignItems="center" alignContent="center">
                        <CardMedia 
                                component= "img"
                                sx={{width: 150}}
                                image ={`${VITE_API_URL}/assets/${picturePath}`}
                                alt="Imagen de Candidato"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CardContent >
                            {(firstName === 'Nulo' || firstName ==="En Blanco") ? (
                                <Typography variant="h5" textAlign="center">
                                    {`Voto ${firstName}`}
                                </Typography>
                            ):(
                                <>
                                    <Typography variant="h5" >
                                        Nombre
                                    </Typography>
                                    <Typography mb="3px" variant="h5" fontSize={12} >
                                        {firstName}
                                    </Typography>
                                    <Typography variant="h5" >
                                        Apellido
                                    </Typography>
                                    <Typography mb="3px" variant="h5" fontSize={12}>
                                        {lastName}
                                    </Typography>
                                    <Typography variant="h5" >
                                        Partido 
                                    </Typography>
                                    <Typography mb="3px" variant="h5" fontSize={12}>
                                        {politicalParty}
                                    </Typography>
                                    </>
                            )
                            }
                            
                        </CardContent>
                    </Grid>                        
                </Grid>
                {isSelected && (
                    <Typography zIndex={9999} p={0.5}align="center" variant="h5">Seleccionado</Typography>
                )}
            </CardActionArea>
        </Card>
    )
}