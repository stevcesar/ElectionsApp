import { Box,Button,Typography,TextField, Grid, InputAdornment, Divider, Skeleton, Alert } from "@mui/material"
import {BadgeOutlined} from "@mui/icons-material"
import { Formik } from "formik";
import * as yup from "yup";
import FlexBetween from "../../components/FlexBetween"
import { useAuthStore, useTableStore, useVoterStore } from "../../hooks"
import { Header } from "../../components";
import { getEnvVariables } from "../../helpers/getEnvVariables";
import { useState } from "react";


const voteSchema = yup.object().shape({
    dpi: yup.string().required("Por favor ingresar el DPI").min(13,'El DPI debe ser de 13 caracteres')
})

const initialValueVote={
    dpi: "",
}

export const VotePage =()=>{
    const {user} = useAuthStore();
    const {voter,startVoter,voted,errorMessageVoter,startClearMessageVoter} = useVoterStore();
    const {startUpdateTableVoting} = useTableStore();
    const initialValuesError= {notregister: "", notable: ""};
    const [errorvoter, isErrorVoter] = useState(initialValueVote);
    const handleFormSubmit = (values)=>{        
        startVoter(values);
        startClearMessageVoter();
        isErrorVoter(initialValueVote)
    }
    const handleSubmit = ()=>{
        if(!voter.registered){
            isErrorVoter((prevErrors)=>({
                ...prevErrors,
                notregister: "El ciudadano no esta empadronado"
            }))
        }
        if(voter.table._id != user.table){
            return isErrorVoter((prevErrors)=>({
                ...prevErrors,
                notable: "El ciudadano no esta asignado a esta mesa"
            }))
        }
        startUpdateTableVoting(true);
        
        
    }
    const {VITE_API_URL} = getEnvVariables();
    return (
        <Box m="1rem 1rem" >
            <FlexBetween>
                <Header title="BUSCAR ELECTOR" subtitle="Iniciar una busqueda de elector para votar"/>
            </FlexBetween>
            <Box
                mt="20px"
                
            >
                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValueVote}
                    validationSchema={voteSchema}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        resetForm
                    })=>(
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}
                                alignItems="center"                                                            
                                >
                                <Grid item xs={12} sm={2} md={2}>
                                    <Typography variant="h5">Ingrese DPI</Typography>
                                </Grid>
                                <Grid item xs={12} sm={10} md={8}>                        
                                    <TextField 
                                        id="dpi"
                                        size="small" 
                                        name="dpi"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.dpi}
                                        error={Boolean(touched.dpi) && Boolean(errors.dpi)}
                                        helperText = {touched.dpi && errors.dpi}
                                        fullWidth 
                                        InputProps={{
                                            startAdornment:(
                                                <InputAdornment position="start">
                                                    <BadgeOutlined/>
                                                </InputAdornment>
                                            )
                                        }}                        
                                        />
                                </Grid>
                                <Grid item xs={12} sm={12} md={2}>
                                    <Button 
                                        type="submit"
                                        variant="contained" 
                                        fullWidth 
                                    >
                                        Buscar
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    )}                    
                </Formik>
            </Box>
            <Divider sx={{mt:"20px", mb:"20px"}}/>
            <Box mb="20px" display={!!errorMessageVoter ? '' : 'none'}>
                <Alert                                                                                                     
                    severity="error"
                >
                    {errorMessageVoter}
                </Alert>                        
            </Box>
            <Box mb="20px" display={!!errorvoter.notregister ? '' : 'none'}>
                <Alert                                                                                                     
                    severity="warning"
                >
                    {errorvoter.notregister}
                </Alert>                        
            </Box>
            <Box mb="20px" display={!!errorvoter.notable ? '' : 'none'}>
                <Alert                                                                                                     
                    severity="warning"
                >
                    {errorvoter.notable}
                </Alert>                        
            </Box>
            <Box>
                <Typography mb="10px" variant="h4" fontWeight="bold">Información Elector</Typography>
                <Grid container spacing={2}>
                    <Grid  
                        item
                        xs={12} sm={6} md={4}                        
                    >
                    {!(Object.keys(voter).length === 0) ? (                                                        
                        <img src={`${VITE_API_URL}/assets/${voter.picturePath}`} alt="Foto persona" style={{width: 155, height: 232}}/>                    
                    ):
                    (                    
                        <Skeleton animation="wave" variant="rectangular" width={155} height={232}/>                        
                    )}
                    <Typography mt="5px" variant="h5" fontWeight="bold">Fotografía</Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12} sm={3} md={4}
                    >
                        {!(Object.keys(voter).length === 0) ? (
                            <>
                                <Typography variant="h5" fontWeight="bold">DPI</Typography>
                                <Typography mb="10px" variant="h6">{voter.dpi}</Typography>                         
                                <Typography variant="h5" fontWeight="bold">Nombre</Typography>
                                <Typography mb="10px" variant="h6">{voter.firstName}</Typography>                         
                                <Typography variant="h5" fontWeight="bold">Apellido</Typography>
                                <Typography mb="10px" variant="h6">{voter.lastName}</Typography>
                                <Typography variant="h5" fontWeight="bold">Fecha de nacimiento</Typography>
                                <Typography mb="10px" variant="h6">{new Date(voter.birthdate).toLocaleDateString()}</Typography>                                                  
                            </>
                        ):(
                            <>
                                <Skeleton width="40%"/>
                                <Skeleton width="60%"/>
                                <Skeleton width="40%"/>
                                <Skeleton width="60%"/>
                                <Skeleton width="40%"/>
                                <Skeleton width="60%"/>
                                <Skeleton width="40%"/>
                                <Skeleton width="60%"/>
                            </>
                        )
                        }
                    </Grid>
                    <Grid
                        item
                        xs={12} sm={6} md={4}
                    >
                        {!(Object.keys(voter).length === 0) ? (
                            <>
                                <Typography variant="h5" fontWeight="bold">Empadronado</Typography>
                                <Typography mb="10px" variant="h6">{voter.registered ? "Sí" : "No"}</Typography>                         
                                <Typography variant="h5" fontWeight="bold">Centro de Votación</Typography>
                                <Typography mb="10px" variant="h6">{voter.table.center.name}</Typography>                         
                                <Typography variant="h5" fontWeight="bold">Número de Mesa</Typography>
                                <Typography mb="10px" variant="h6">{voter.table.number}</Typography>
                                <Typography variant="h5" fontWeight="bold">Votación</Typography>
                                <Typography mb="10px" variant="h6">{voted ? "Finalizada": "No iniciada"}</Typography>                                                  
                            </>
                        ):(
                            <>
                                <Skeleton width="40%"/>
                                <Skeleton width="60%"/>
                                <Skeleton width="40%"/>
                                <Skeleton width="60%"/>
                                <Skeleton width="40%"/>
                                <Skeleton width="60%"/>
                                <Skeleton width="40%"/>
                                <Skeleton width="60%"/>
                            </>
                        )
                        }
                    </Grid>
                    
                </Grid>
                <Box display="flex" justifyContent="flex-end">
                    <Button
                        onClick={handleSubmit} 
                        disabled={(Object.keys(voter).length === 0) || voted }
                        sx={{mt: "10px"}} 
                        variant="contained"
                    >Iniciar Votación</Button> 
                </Box>
            </Box>
        </Box>
    

)
}