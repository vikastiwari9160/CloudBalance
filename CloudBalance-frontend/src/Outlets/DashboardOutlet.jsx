import React from 'react'
import Navbar from '../Components/Navbar'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'
import { SideMenuToggleProvider } from '../Contexts/SideMenuToggleProvider'
import { breadcrumbsEnum } from '../Enums/Breadcrumbs'
import { UrlEnums } from '../Enums/UrlEnum'

const DashboardOutlet = () => {

  const currLocation = useLocation();
  const breadcrumbs = currLocation.pathname.split('/')
    .map(dir => {
      return breadcrumbsEnum[dir];
    })
    .filter(dir => {
      return dir !== "" && dir !== undefined
    });


  return (
    <SideMenuToggleProvider>
      <div className=' h-screen w-screen flex justify-between items-center flex-col'>
        <Navbar />
        <div className='flex justify-start items-center grow overflow-hidden h-full w-full'>
          <Sidebar />
          <div className='flex-1 flex-col h-full '>
            <div className='overflow-y-scroll pb-10 grow bg-[#f2f2f2] h-full px-2 py-2' >
              <div className='p-2' >
                {breadcrumbs.map((dir, index) => {
                  return (
                    <React.Fragment key={index}>
                      < Link to={UrlEnums[dir]} className='inline-block text-xl font-bold' >{dir}</Link>
                      {(index < breadcrumbs.length - 1)?<p className=' px-2 inline-block text-xl font-bold'> &gt; </p>:''}
                    </React.Fragment>
                  )
                })}
              </div>
              <Outlet />
            </div>
            <div className='grow relative'>
              <div className='absolute bottom-0 bg-white w-full' >
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SideMenuToggleProvider >
  )
}

export default DashboardOutlet