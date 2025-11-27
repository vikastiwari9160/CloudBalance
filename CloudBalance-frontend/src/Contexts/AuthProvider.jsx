import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

const useAuth= ()=>{
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {

    const result = localStorage.getItem("isAuthenticated");

    const [isAuthenticated,setisAuthenticated] = useState(()=>{
        return result==="true"?true:false;
    });

    return (
        <AuthContext.Provider value={{isAuthenticated,setisAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, useAuth}