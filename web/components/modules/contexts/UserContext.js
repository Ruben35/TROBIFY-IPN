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
        const email= localStorage.getItem('user-email');
        if(email)
          document.cookie= `email=${email}; path=/;`

        return email;
      }
    }
  );

  const [userType, setUserType] = useState(
    () => {
      if (typeof window !== "undefined") {
        const type= localStorage.getItem('user-type');
        if(type)
          document.cookie= `type=${type}; path=/;`

        return type;  
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