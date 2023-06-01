import { BrowserRouter } from "react-router-dom";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { AppRouter } from "./router/AppRouter";
import { themeSettings } from "./theme";
import { useAuthStore } from "./hooks";

export const ElectionsApp =()=>{
    const {mode} = useAuthStore();
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <AppRouter/>
            </ThemeProvider>
        </BrowserRouter>
    )
}