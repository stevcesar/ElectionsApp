import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    Typography,
    useTheme,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import {
    HomeOutlined,
    TableRestaurantOutlined,
    CancelPresentationOutlined,
    PersonSearchOutlined,
    EditOutlined,
    HowToVoteOutlined,
    AccountCircleOutlined,
    AutoFixHighOutlined,
    Person4Outlined,
    Diversity3Outlined,
    DrawOutlined,
    ChevronLeft,
    ChevronRightOutlined
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import { useEffect, useState } from "react";
import { getEnvVariables } from "../helpers/getEnvVariables";
import { useAuthStore } from "../hooks";

const navItems =[
    {
        text: "Dashboard",
        icon: <HomeOutlined/>,
        rol: ["Admin","Presidente"],
        pathname: "Dashboard"
    },
    {
        text: "Mesa Autoridades",
        icon: null,
        rol: ["Presidente"],
        pathname: "MesaAutoridades"
    },
    {
        text: "Iniciar Mesa",
        icon: <TableRestaurantOutlined/>,
        rol: ["Presidente"],
        pathname: "IniciarMesa"
    },
    {
        text: "Cerrar Mesa",
        icon: <CancelPresentationOutlined/>,
        rol: ["Presidente"],
        pathname: "CerrarMesa"
    },
    {
        text: "Elector",
        icon: null,
        rol: ["Presidente"],
        pathname: "Elector"
    },
    {
        text: "Buscar elector",
        icon: <PersonSearchOutlined/>,
        rol: ["Presidente"],
        pathname: "BuscarElector"
    },
    {
        text: "Empadronar",
        icon: null,
        rol: ["Empadronador"],
        pathname: "Empadronar"
    },
    {
        text: "Actualizar Empa",
        icon: <EditOutlined/>,
        rol: ["Empadronador"],
        pathname: "ActualizarEmpa"
    },
    {
        text: "Votación",
        icon: null,
        rol: ["Presidente"],
        pathname: "Votacion"
    },
    {
        text: "Urna",
        icon: <HowToVoteOutlined/>,
        rol: ["Presidente"],
        pathname: "Urna"
    },
    {
        text: "Usuarios",
        icon: null,
        rol: ["Admin"],
        pathname: "Usuarios"
    },
    {
        text: "Crear Usuario",
        icon: <AccountCircleOutlined/>,
        rol: ["Admin"],
        pathname: "CrearUsuario"
    },
    {
        text: "Modificar Usuario",
        icon: <AutoFixHighOutlined/>,
        rol: ["Admin"],
        pathname: "ModificarUsuario"
    },
    {
        text: "Candidatos",
        icon: null,
        rol: ["Admin"],
        pathname: "Candidatos"
    },
    {
        text: "Crear Candidatos",
        icon: <Person4Outlined/>,
        rol: ["Admin"],
        pathname: "CrearCandidatos"
    },
    {
        text: "Modificar Candidatos",
        icon: <DrawOutlined/>,
        rol: ["Admin"],
        pathname: "ModificarCandidatos"
    },
    {
        text: "Partidos Políticos",
        icon: null,
        rol: ["Admin"],
        pathname: "PatidosPoliticos"
        
    },
    {
        text: "Crear Partidos",
        icon: <Diversity3Outlined/>,
        rol: ["Admin"],
        pathname: "CrearPartidos"
    },
    {
        text: "Modificar Partidos",
        icon: <DrawOutlined/>,
        rol: ["Admin"],
        pathname: "ModificarPatidos"
    }  
]

export const Sidebar =({
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile
}) =>{
    const {pathname} = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();
    const roluser = "Presidente";
    
    

    useEffect(()=>{
        setActive(pathname.substring(1));
    },[pathname]);

    return(
        <Box component="nav">
            {isSidebarOpen && (
                <Drawer
                    open={isSidebarOpen}
                    onClose={()=>setIsSidebarOpen(false)}
                    variant="persistent"
                    anchor="left"
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            color: theme.palette.secondary[200],
                            backgroundColor: theme.palette.background.alt,
                            boxSizing: "border-box",
                            borderWidth: isNonMobile ? 0 : "2px",
                            width: drawerWidth,
                        }
                    }}
                >
                    <Box width="100%">
                        <Box m="1.5rem 2rem 2rem 3rem">
                            <FlexBetween color={theme.palette.secondary.main}>
                                <Box display="flex" alignItems="center" gap="0.5rem">
                                    <Typography variant="h5" fontWeight="bold">
                                        Opciones
                                    </Typography>
                                </Box>
                                {!isNonMobile && (
                                    <IconButton onClick={()=>setIsSidebarOpen(!isSidebarOpen)}>
                                        <ChevronLeft />        
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List>
                            {navItems.map(({text,icon,rol,pathname})=>{
                                if(!icon && rol.includes(roluser)){
                                    return (
                                        <Typography key={text} sx={{m: "2rem 0 0.5rem 2.5rem"}}>
                                            {text}        
                                        </Typography>
                                    );
                                }
                                const lcText = pathname.toLowerCase();
                                if (icon && rol.includes(roluser)){
                                    return(
                                        <ListItem key={text} disablePadding>
                                            <ListItemButton
                                                onClick={()=>{
                                                    navigate(`/${lcText}`);
                                                    setActive(lcText)
                                                }}
                                                sx={{
                                                    backgroundColor:
                                                        active === lcText
                                                            ? theme.palette.secondary[300]
                                                            : "transparent",
                                                    color: 
                                                        active === lcText
                                                            ? theme.palette.primary[600]
                                                            : theme.palette.secondary[100],
                                                }}
                                            >
                                                <ListItemIcon
                                                    sx={{
                                                        ml: "2rem",
                                                        color: 
                                                            active === lcText
                                                                ? theme.palette.primary[600]
                                                                : theme.palette.secondary[200]
                                                    }}
                                                >
                                                    {icon}
                                                </ListItemIcon>
                                                <ListItemText primary={text}/>
                                                {active === lcText && (
                                                    <ChevronRightOutlined sx={{ml: "auto"}} />
                                                )}
                                            </ListItemButton>
                                        </ListItem>
                                    );
                                }
                                
                            })}
                        </List>
                    </Box>
                </Drawer>
            )}
        </Box>
    )
}