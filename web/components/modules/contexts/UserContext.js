import React, { useContext, createContext, useState } from 'react';

//Context
export const UserContext = createContext(null);

//Provider
export const UserContextProvider = ({ children }) => {
  const [jwt, setJWT] = useState(
    () => {
      if (typeof window !== "undefined") {
        localStorage.getItem('jwt')
      }
    }
  );

  return <UserContext.Provider value={{jwt, setJWT}}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  const context = useContext(UserContext);

  if(!context){
    console.error('Error deploying User Context!!!');
  }

  return context;
}

export default useUserContext;