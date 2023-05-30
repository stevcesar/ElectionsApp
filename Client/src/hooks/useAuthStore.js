import {useDispatch, useSelector} from 'react-redux';
import eletionApi from '../api/electionApi';
import {onChecking, onLogin, onLogout, clearErrorMessage,setMode} from '../store';


export const useAuthStore = ()=>{
    const {status, user, errorMessage,mode} = useSelector(state =>state.auth);
    const dispatch = useDispatch();
    
    const startLogin = async({email,password}) =>{
        dispatch(onChecking());
        try {
            const{data} = await eletionApi.post('/api/auth',{email,password});
            localStorage.setItem('token',data.token);
            dispatch(onLogin({
                _id: data._id,
                firstName: data.firstName, 
                lastName: data.lastName,
                picturePath: data.picturePath,
                rol: data.rol,
                table: data.table
            }));
            
        } catch (err) {
            dispatch(onLogout('Incorrect credentials'));
        }
    }
    
    const checkAuthToken = async()=>{
        const token = localStorage.getItem('token');   
        if(!token) return dispatch(onLogout());
        try{
            const {data} = await eletionApi.get('/api/auth/renew');
            localStorage.setItem('token',data.token);
            dispatch(onLogin({
                _id: data._id,
                firstName: data.firstName, 
                lastName: data.lastName,
                picturePath: data.picturePath,
                rol: data.rol,
                table: data.table
            }));
        }catch (err) {
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const starLogout = ()=>{
        localStorage.clear();
        dispatch(onLogout());
    }

    const startMode = ()=>{
        dispatch(setMode());
    }

    const startClearErrorMessage =()=>{
        dispatch(clearErrorMessage());
    }
    
    return {
        //* Properties
        errorMessage,
        status,
        user,
        mode,
        

        //* Methods
        startLogin,
        startMode,
        starLogout,
        startClearErrorMessage,
        checkAuthToken
    }
}