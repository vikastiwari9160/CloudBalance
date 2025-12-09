import React, { createContext, useContext, useState } from 'react'
import { Outlet } from 'react-router-dom';

const SideFilterContext = createContext();

const useSideFilter = () =>{
  return useContext(SideFilterContext);
}

const SideFiltersProvider = () => {
  const [isOpen,setIsOpen] = useState(false);

  return(
    <SideFilterContext.Provider value={{isOpen,setIsOpen}}>
      <Outlet/>
    </SideFilterContext.Provider>
  )

}

export {SideFiltersProvider, useSideFilter}