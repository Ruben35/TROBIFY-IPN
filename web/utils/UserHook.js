import { useContext, useCallback } from 'react'
import useUserContext from '../components/modules/contexts/UserContext'

export default function useUser(){
    const {jwt, setJWT,
        userName, setUserName,
        userEmail, setUserEmail,
        userType, setUserType
      } = useUserContext();

    const login = useCallback((name,email,type,jwt) => {
        setUserName(name);
        setUserEmail(email);
        setUserType(type);
        setJWT(jwt);
        document.cookie = `jwt=${jwt}; path=/;`;
        document.cookie = `email=${email}; path=/;`;
        if (typeof window !== "undefined") {
            localStorage.setItem('user-name',name);
            localStorage.setItem('user-email',email);
            localStorage.setItem('user-type',type);
            localStorage.setItem('jwt',jwt);
        }

    }, [setUserName,setUserEmail,setUserType,setJWT] );

    const logout = useCallback(()=>{
        setUserName(null);
        setUserEmail(null);
        setUserType(null);
        setJWT(null); 
        document.cookie = 'jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
        document.cookie = 'email=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
       if (typeof window !== "undefined") {
        localStorage.removeItem('jwt');
        localStorage.removeItem('user-name');
        localStorage.removeItem('user-email');
        localStorage.removeItem('user-type');
    }
    }, [setUserName,setUserEmail,setUserType,setJWT]);

    return{
        isLogged: Boolean(jwt),
        login, 
        logout,
        userName,
        userEmail,
        userType,
        jwt
    }
}