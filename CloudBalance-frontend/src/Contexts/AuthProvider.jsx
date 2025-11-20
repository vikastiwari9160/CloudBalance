import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext();

const useAuth= ()=>{
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {

    const [isAuthenticated,setisAuthenticated] = useState(()=>{
        return localStorage.getItem("isAuthenticated")===true?true:false;
    });

    // useEffect(()=>{
    //     setisAuthenticated(()=>localStorage.getItem("isAuthenticated")===true?true:false;)
    // },[isAuthenticated])

    return (
        <AuthContext.Provider value={{isAuthenticated,setisAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, useAuth}