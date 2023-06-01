import { Navigate, Route, Router, Routes, useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { LoginPage } from "../scenes/loginPage"
import {Dashboard} from "../scenes/dashboardPage"
import { VoterPage } from "../scenes/VoterPage"
import { Layout } from "../scenes/layout"
import { useAuthStore,useTableStore } from "../hooks"
import { UrnaPage } from "../scenes/UrnaPage"
import { VotePage } from "../scenes/VotePage"
import { StartTablePage } from "../scenes/startTablePage"
import { CloseTablePage } from "../scenes/closeTablePage"


export const AppRouter = () =>{
    const {status,checkAuthToken,user} = useAuthStore();
    const {table} = useTableStore();

    useEffect(()=>{
        checkAuthToken();
    },[])

    if(status==='checking'){
        return(
            <h3>Cargando..</h3>
        )
    }
    return(     
            <Routes>
                {
                ( status === 'not-authenticated')  
                    ? (
                        <>
                            <Route path="/auth/*" element={ <LoginPage /> } />
                            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
                        </>
                    )
                    : (
                        <>
                            <Route element={ <Layout /> }>
                            <Route path="/" element={ <Navigate to ="/dashboard" replace/> } />
                            <Route path="/dashboard" element={<Dashboard />} />
                            {/* PRESIDENTE RUTES */}
                            {!table.close && (
                                (user.rol === 'Presidente' && table.enable === false)? (
                                    <Route path="/iniciarmesa" element={<StartTablePage/>}/>
                                ):(
                                    <>
                                    <Route path="/cerrarmesa" element={<CloseTablePage/>}/>
                                    <Route path="/urna" element={<UrnaPage />} />
                                    <Route path="/buscarelector" element={<VotePage />} />
                                    </>
                                )
                            )}                            
                            <Route path="/*" element={ <Navigate to="/" /> } />
                            </Route>
                        </>
                    )
            }
            </Routes>
    )
}