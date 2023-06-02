import { useTheme,Button, Typography, TextField, Box,useMediaQuery, Grid} from "@mui/material"
import {PeopleAltOutlined} from '@mui/icons-material'
import FlexBetween from "../../components/FlexBetween";
import { BreakdownChart, Header, StatBox } from "../../components";
import { useKpiStore } from "../../hooks";

export const Dashboard =()=>{
    const theme = useTheme();
    const {startGetVotes} = useKpiStore();
    const handleClick=()=>{
        startGetVotes();
    }
    return (
            <Box m="1rem 1rem" >
                <FlexBetween>
                    <Header title="DASHBOARD" subtitle="Indicadores"/>
                </FlexBetween>
                <Box mt="20px">
                    <Button onClick={handleClick} variant="contained">Actualizar</Button>
                </Box>
                <Grid container spacing={2} mt="20px">
                    <Grid item xs={12} sm={12} md={6}>
                        <Grid container spacing={2} 
                            
                        >
                            <Grid item xs={6}>
                                <StatBox 
                                    title="Total empadronados"
                                    value ={10}
                                    increase="+15%"
                                    description="Personas empadronadas"
                                    icon={
                                        <PeopleAltOutlined 
                                            sx={{color: theme.palette.secondary[300], fontSize: "26px"}}
                                        />
                                    }
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <StatBox 
                                    title="Total empadronados"
                                    value ={10}
                                    increase="+15%"
                                    description="Personas empadronadas"
                                    icon={
                                        <PeopleAltOutlined 
                                            sx={{color: theme.palette.secondary[300], fontSize: "26px"}}
                                        />
                                    }
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <StatBox 
                                    title="Total empadronados"
                                    value ={10}
                                    increase="+15%"
                                    description="Personas empadronadas"
                                    icon={
                                        <PeopleAltOutlined 
                                            sx={{color: theme.palette.secondary[300], fontSize: "26px"}}
                                        />
                                    }
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <StatBox 
                                    title="Total empadronados"
                                    value ={10}
                                    increase="+15%"
                                    description="Personas empadronadas"
                                    icon={
                                        <PeopleAltOutlined 
                                            sx={{color: theme.palette.secondary[300], fontSize: "26px"}}
                                        />
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box
                            height="100%"
                            backgroundColor={theme.palette.background.alt}
                            p="1rem"
                            borderRadius="0.55rem"
                        >
                            <Typography variant="h6">
                                Total Votos
                            </Typography>
                            <BreakdownChart type="hola"/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        

    )
}