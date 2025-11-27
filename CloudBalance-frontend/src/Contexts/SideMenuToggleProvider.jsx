import React, { createContext, useContext, useState } from 'react'
import { Outlet } from 'react-router-dom';

const SideMenuToggleContext = createContext();

const useSideMenuContext = () => {
  return useContext(SideMenuToggleContext);
}

const SideMenuToggleProvider = ({children}) => {

  const [fullMenu,setFullMenu] = useState(true);

  return (
    <SideMenuToggleContext.Provider value={{fullMenu,setFullMenu}}>
      {children}
    </SideMenuToggleContext.Provider>
  )
}

export  {SideMenuToggleProvider,useSideMenuContext}