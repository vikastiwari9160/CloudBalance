import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'

const unprotectedRoutesData = [
  {key:'login', path:"/login", element:<Login/> },
  {key:'home',path:"/", element:<Login/> }
]

const UnprotectedRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
     </Routes>
  )
}

export {UnprotectedRoutes,unprotectedRoutesData}