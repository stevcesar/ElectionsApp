import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';
import { useAuthStore } from '../hooks';


const {VITE_API_URL} = getEnvVariables();
const eletionApi = axios.create({
    baseURL: VITE_API_URL
});

//Interceptors
eletionApi.interceptors.request.use(config=>{
    
    config.headers ={
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
   
    return config
})

export default eletionApi;