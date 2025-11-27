import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import RouteProtector from './RouteProtector'
import Usermanagement from '../Components/Usermanagement'

const protectedRoutesData = [
  {key:"dashboard", path:"/dashboard", element:<Dashboard/> },
  // {key:"usermanagement", path:"/dashboard/usermanagement", element:<Dashboard><Usermanagement/></Dashboard> }
]

const ProtectedRoutes = () => {
  return (
    <Route>
      <Route Component={RouteProtector}>
        <Route path='/dashboard' Component={<Dashboard/>}></Route>
      </Route>
    </Route>
  )
}

export {ProtectedRoutes, protectedRoutesData}