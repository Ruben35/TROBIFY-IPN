import { useContext, useCallback } from 'react'
import useUserContext from '../components/modules/contexts/UserContext'

export default function useUser(){
    const {jwt, setJWT} = useUserContext();

    const login = useCallback((jwt) => {
        setJWT(jwt);
        if (typeof window !== "undefined") {
            localStorage.setItem('jwt',jwt);
        }
    }, [setJWT] );

    const logout = useCallback(()=>{
       setJWT(null); 
       if (typeof window !== "undefined") {
        localStorage.removeItem('jwt');
    }
    }, [setJWT]);

    return{
        isLogged: Boolean(jwt),
        login
    }
}