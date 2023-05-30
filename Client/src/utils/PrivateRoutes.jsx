import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../hooks";
import { useEffect, useState } from "react";


export const PrivateRoutes = ({isAuth, children})=>{
  
    if (!isAuth) {
        return <Navigate to="/login" replace />
      }
      return children
}

