import { Box, useTheme, Typography, Grid, TextField, Container, CssBaseline, Paper, Button, Link, Divider, Alert} from "@mui/material"
import { useAuthStore} from "../../hooks"
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";


const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("required"),
    password: yup.string().required("required")
})

const initialValueLogin ={
    email: "",
    password: "",
}

export const LoginPage = ()=>{
    const theme = useTheme();
    const {errorMessage, startLogin,mode,startClearErrorMessage,user} = useAuthStore();
    const navigate = useNavigate();
    const handleFormSubmit = (values)=>{        
        startLogin(values);
        startClearErrorMessage();
        navigate("/");
    }
    return(
        
        <Container component="main" maxWidth="lg">
            <Box
                sx={{marginTop: 10}}
            >
                <Grid container spacing={0}
                    
                    sx={{
                        borderRadius: "10px 10px 10px 10px",
                        boxShadow: 4,
                        backgroundColor: theme.palette.background.alt 
                    }}>
                    <Grid
                        item                        
                        xs={12}
                        sm= {6}
                        md={5}
                        elevation={6}
                        sx={{borderRightColor: "primary"}}                                            
                    >
                        <Box paddingTop="30px" paddingLeft="30px" display="flex" flexDirection="row" alignItems="center">
                            <img src={mode =="light" ? "/assets/tseb.png" : "/assets/tsew.png"}  width="60px" height="60px"></img>
                            <Typography marginLeft="10px" variant="h1" color="#0075BE" fontWeight="500">TSE</Typography>
                        </Box>
                        <Box
                            sx={{
                                my: 5,
                                mx: 4,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}                            
                        >
                            
                            <Typography component="h1" variant="h3">
                                    Iniciar Sesión
                            </Typography>
                            <Formik
                                onSubmit={handleFormSubmit}
                                initialValues={initialValueLogin}
                                validationSchema={loginSchema}
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
                                        <Box                                        
                                        sx={{mt: 1}}
                                        >
                                            <TextField
                                                margin="normal"
                                                fullWidth
                                                id= "email"
                                                label= "Correo electronico"
                                                name = "email"
                                                autoComplete="email"                                                
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.email}
                                                error={Boolean(touched.email) && Boolean(errors.email)}
                                                helperText= {touched.email && errors.email}
                                            />
                                            <TextField
                                                margin="normal"
                                                fullWidth
                                                id= "password"
                                                label= "Contraseña"
                                                name = "password"
                                                type="password"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.password}
                                                error={Boolean(touched.password) && Boolean(errors.password)}
                                                helperText= {touched.password && errors.password}
                                            />
                                            <Box display={!!errorMessage ? '' : 'none'}>
                                                <Alert                                                                                                     
                                                    severity="error"
                                                >
                                                    {errorMessage}
                                                </Alert>                        
                                            </Box>                                            
                                            <Button
                                                type= "submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{mt: 3, mb: 2}}
                                                >
                                                Iniciar Sesión
                                            </Button>
                                        
                                            <Grid container>
                                                <Grid item xs>
                                                    <Link href="#" variant="body2">
                                                    Forgot password?
                                                    </Link>
                                                </Grid>
                                                <Grid item>
                                                    <Link href="#" variant="body2">
                                                    {"Don't have an account? Sign Up"}
                                                    </Link>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </form>
                                )}                                
                            </Formik>
                        </Box>
                    </Grid>                     
                    <Grid
                        item
                        xs={false}
                        sm={6}
                        md={7}
                         
                    >
                        <Box sx={{display: {xs : 'none', sm: 'block'}}}>
                            <Typography  paddingTop="30px" paddingLeft="30px" variant="h3" color="primary">¡Bienvenido!</Typography>
                            <Typography paddingTop="10px" paddingLeft="30px" variant="h5" >Inicia sesión para ingresar al sistema y ver las opciones.</Typography>
                            <Box
                                width="100%"                            
                                sx={{                            
                                position: "relative",
                                overflow: "hidden",                                                    
                                }}
                            >
                                <img
                                src="/assets/login.png"
                                alt="Login"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",                                            
                                }}
                                
                                />
                            </Box>  
                        </Box>
                                             
                    </Grid>                    
                </Grid>
            </Box>
        </Container>
        
    );
  };
            