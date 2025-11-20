import React from 'react'
import {UnprotectedRoutes, unprotectedRoutesData} from './UnprotectedRoutes'
import {ProtectedRoutes, protectedRoutesData} from './ProtectedRoutes'
import { Routes, Route } from 'react-router-dom'
import RoutesProtector from './RouteProtector'
import { AuthProvider } from '../Contexts/AuthProvider'
import { AccountProvider } from '../Contexts/AccountProvider'

const CustomRoutes = () => {
  return (

    <AuthProvider>
      <Routes>
        <Route element={<AccountProvider/>}>
          <Route element={<RoutesProtector/>}>
            {protectedRoutesData.map((data)=><Route key={data.key} path={data.path} element={data.element}/>)}
          </Route>
        </Route>
        {unprotectedRoutesData.map((data)=><Route key={data.key} path={data.path} element={data.element}/>)}
      </Routes>
    </AuthProvider>


    // <Routes>
      // <UnprotectedRoutes/>
      // <ProtectedRoutes/>
    // </Routes>
  )
}

export default CustomRoutes