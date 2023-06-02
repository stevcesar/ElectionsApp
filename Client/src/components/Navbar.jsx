import { useState } from "react";
import {
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    SettingsOutlined,
    ArrowDropDownOutlined,
} from "@mui/icons-material";
import  FlexBetween  from "./FlexBetween";
import { useAuthStore,useCandidateStore,useTableStore,useVoterStore,useVoteStore,useKpiStore } from "../hooks";
import {
    AppBar,
    Button,
    Box,
    Typography,
    IconButton,
    InputBase,
    Toolbar,
    Menu,
    MenuItem,
    useTheme
} from "@mui/material";
import { getEnvVariables } from "../helpers/getEnvVariables";
import { useNavigate } from "react-router-dom";

export const Navbar = ({isSidebarOpen, setIsSidebarOpen})=>{
    const {startMode,user,mode,starLogout} =useAuthStore();
    const {startUnsetVoter} = useVoterStore();
    const {startOnLogoutCandidates} = useCandidateStore();
    const {startUnSetTable}= useTableStore();
    const {statUnsetVote}= useVoteStore();
    const {startOnLogoutKpi}= useKpiStore();
    const theme = useTheme();
    const [anchorEl,setAnchorEl] = useState(null);
    const IsOpen= Boolean(anchorEl);
    const navigate = useNavigate();
    const handleClose = ()=> setAnchorEl(null);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const hadleSubmit = ()=>{
        starLogout(),
        startUnsetVoter();
        startOnLogoutCandidates();
        startUnSetTable();
        statUnsetVote();
        startOnLogoutKpi();
        navigate("/login")

    }
    const {VITE_API_URL} = getEnvVariables();

    return(
        <AppBar
            sx={{
                position: "static",
                background: theme.palette.background.alt ,
                boxShadow: "none"
            }}
        >
            <Toolbar sx={{justifyContent: "space-between"}}>
                {/* LEFT SIDE */}
                <FlexBetween>
                    <IconButton onClick={()=>setIsSidebarOpen(!isSidebarOpen)}>
                        <MenuIcon/>
                    </IconButton>
                    <Box 
                        component="img" 
                        alt="" 
                        src={`${mode =="light" ? "/assets/tseb.png" : "/assets/tsew.png"}`}
                        height="32px"
                        width="32px"
                        sx={{objectFit: "cover"}}
                    />
                    <Typography marginLeft="10px" variant="h3" color="primary" fontWeight="500">TSE</Typography>
                </FlexBetween>
                {/* RIGHT SIDE */}
                <FlexBetween>
                    <IconButton onClick={()=>startMode()}>
                        {mode === "dark" ? (
                            <DarkModeOutlined sx={{fontSize: "25px"}}/>
                        ):(
                            <LightModeOutlined sx={{fontSize: "25px"}}/>
                        )
                        }                        
                    </IconButton>
                    <IconButton>
                            <SettingsOutlined sx={{fontSize: "25px"}}/>
                    </IconButton>
                    <FlexBetween>
                        <Button
                            onClick={handleClick}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                textTransform: "none",
                                gap: "1rem"
                            }}
                        >
                            <Box 
                                component="img"
                                alt="profile"
                                src={`${VITE_API_URL}/assets/${user.picturePath}`}
                                height="32px"
                                width="32px"
                                borderRadius="50%"
                                sx={{objectFit: "cover"}}
                            />
                            <Box textAlign="left">
                                <Typography 
                                    fontWeight="bold"
                                    fontSize="0.85rem"
                                    sx={{color: theme.palette.secondary[100]}}
                                >
                                    {`${user.firstName} ${user.lastName}`}
                                </Typography>
                                <Typography
                                    fontSize="0.75rem"
                                    sx={{color: theme.palette.secondary[200]}}
                                >
                                    {user.rol}
                                </Typography>                                
                            </Box>
                            <ArrowDropDownOutlined 
                                sx={{color: theme.palette.secondary[300],fontSize:"25px"}}
                            />
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open = {IsOpen}
                                onClose={handleClose}
                                anchorOrigin={{vertical: "bottom", horizontal: "center"}}
                            >
                                <MenuItem onClick={()=>hadleSubmit()}>Log Out</MenuItem>
                            </Menu>
                    </FlexBetween>
                </FlexBetween>
            </Toolbar>
        </AppBar>
    );
}
