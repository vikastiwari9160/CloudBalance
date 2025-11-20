import React, { createContext, useContext, useState } from 'react'
import { Outlet } from 'react-router-dom';

const AuthContext = createContext();

const useAccount= ()=>{
    return useContext(AuthContext);
}

const AccountProvider = () => {

    const [account,setAccount] = useState("select an account");

    console.log("in Account Provider");

  return (
    <AuthContext.Provider value={{account,setAccount}}>
        <Outlet/>
    </AuthContext.Provider>
  )
}

export {AccountProvider, useAccount}