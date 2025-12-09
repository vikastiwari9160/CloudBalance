import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

import TuneIcon from '@mui/icons-material/Tune';
import { useSideFilter } from '../Contexts/SideFiltersProvider';

const CostExplorerOutlet = () => {

  const {isOpen,setIsOpen} = useSideFilter();

  const GroupBy = ["Service","Instant Type", "Accout ID", "Usage Type", "Platform", "Region"]

  return (
    <div className='pb-10 pt-3'>
      <div className='flex flex-row justify-between'>
        <div>
          <h1 className='text-2xl font-bold'>
            Cost Explorer
          </h1>
          <p className='text-xs'>How to always be aware of cost changes and history.</p>
        </div>
      </div>
      
      <hr className='text-gray-300 my-2' />

      <div className='flex flex-col bg-white '>
        <div className='flex flex-row justify-between px-3 py-3 bg-gray-200'>
          <div className='flex flex-row gap-3 items-center '>
            <h3 className='text-xs font-bold'>Group By:</h3>
            {GroupBy.map(item=>{
              return(
                <NavLink>
                  <div className='border font-semibold border-blue-600 text-xs text-blue-600 px-2 py-0.5 '>{item}</div>
                </NavLink>
              )
            })}
          </div>
          <button className='border border-blue-600 text-blue-600 px-1 py-0.5' onClick={()=>{setIsOpen(!isOpen)}}>
            <TuneIcon/>
          </button>
        </div>
        <Outlet/>
      </div>
    </div>
  )
}

export default CostExplorerOutlet