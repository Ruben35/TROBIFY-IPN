import React, { useContext, createContext, useState } from 'react';

//Context
export const UserContext = createContext(null);

//Provider
export const UserContextProvider = ({ children }) => {
  const [jwt, setJWT] = useState(
    () => {
      if (typeof window !== "undefined") {
        const token=localStorage.getItem('jwt');
        if(token)
          document.cookie = `jwt=${token}; path=/;`;
        
        return token;
      }
    }
  );

  const [userName, setUserName] = useState(
    () => {
      if (typeof window !== "undefined") {
        return localStorage.getItem('user-name')
      }
    }
  );

  const [userEmail, setUserEmail] = useState(
    () => {
      if (typeof window !== "undefined") {
        return localStorage.getItem('user-mail')
      }
    }
  );

  const [userType, setUserType] = useState(
    () => {
      if (typeof window !== "undefined") {
        return localStorage.getItem('user-type')
      }
    }
  );

  return <UserContext.Provider 
    value={{jwt, setJWT,
      userName, setUserName,
      userEmail, setUserEmail,
      userType, setUserType
    }}> {children} 
  </UserContext.Provider>;
}

export function useUserContext() {
  const context = useContext(UserContext);

  if(!context){
    console.error('Error deploying User Context!!!');
  }

  return context;
}

export default useUserContext;