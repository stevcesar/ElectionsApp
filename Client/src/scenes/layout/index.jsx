import {Box, useMediaQuery} from "@mui/material";
import { useEffect, useState } from "react";
import { Navbar,Sidebar,LockedScreen } from "../../components";
import { Outlet, useLocation } from "react-router-dom";
import { useAuthStore,useTableStore } from "../../hooks"; 
export const Layout = ()=>{
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const {user} = useAuthStore();
    const {pathname} = useLocation();
    const {startGetTable,table} = useTableStore();
    useEffect(()=>{
        startGetTable();
    },[])
    return (
        <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
            {table.voting && pathname.substring(1)!="urna" &&(
                <LockedScreen/>
            ) 
            }
            {pathname.substring(1)!="urna" ?
            (
                <>
                <Sidebar 
                isNonMobile={isNonMobile}
                drawerWidth="250px"
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                />
                <Box flexGrow={1}>
                    <Navbar
                        isSidebarOpen={isSidebarOpen}
                        setIsSidebarOpen={setIsSidebarOpen}
                    />
                    <Outlet/>                  
                </Box>
                </>
            )
            :
            (
                <Outlet/>
            )
            }
            
        </Box>
    )
}