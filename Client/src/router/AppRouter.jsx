import { Navigate, Route, Router, Routes, useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { LoginPage } from "../scenes/loginPage"
import {Dashboard} from "../scenes/dashboardPage"
import { VoterPage } from "../scenes/VoterPage"
import { Layout } from "../scenes/layout"
import { useAuthStore } from "../hooks"
import { UrnaPage } from "../scenes/UrnaPage"
import { VotePage } from "../scenes/VotePage"


export const AppRouter = () =>{
    const {status,checkAuthToken} = useAuthStore();

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
                            <Route path="/urna" element={<UrnaPage />} />
                            <Route path="/buscarelector" element={<VotePage />} />
                            <Route path="/*" element={ <Navigate to="/" /> } />
                            </Route>
                        </>
                    )
            }
            </Routes>
    )
}