// import { UnprotectedRoutes, unprotectedRoutesData } from './UnprotectedRoutes'
// import {ProtectedRoutes, protectedRoutesData} from './ProtectedRoutes'
import { Routes, Route, Navigate } from 'react-router-dom'
import RoutesProtector from './RouteProtector'
import { AuthProvider } from '../Contexts/AuthProvider'
import { AccountProvider } from '../Contexts/AccountProvider'
import Usermanagement from '../Pages/UserManagement/UserManagement'
import Onboarding from '../Components/Onboarding'
import Awsservices from '../Components/Awsservices'
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
import DashboardOutlet from '../Outlets/DashboardOutlet'
import ModifyUserOutlet from '../Outlets/ModifyUserOutlet'
import AddUser from '../Pages/UserManagement/AddUser'
import EditUser from '../Pages/UserManagement/EditUser'
import CostExplorerOutlet from '../Outlets/CostExplorerOutlet'
import Core from '../Pages/CostExplorer/Core'
import { SideFiltersProvider } from '../Contexts/SideFiltersProvider'

const CustomRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<AccountProvider />}>
          <Route element={<RoutesProtector />}>
            <Route path='dashboard' element={<Dashboard/>}>
              <Route element={<DashboardOutlet />}>
                <Route path='user-management'>
                  <Route index element={<Usermanagement/>}/>
                  <Route path='add-user' element={<AddUser/>}/>
                  <Route path='edit-user' element={<EditUser/>} ></Route>
                </Route>
                <Route path='onboarding' element={<Onboarding />}></Route>
                <Route path='aws-services' element={<Awsservices />}></Route>
                <Route element={<SideFiltersProvider/>}>
                  <Route path='cost-explorer' element={<CostExplorerOutlet/>}>
                    <Route index element={<Core/>}></Route>
                  </Route>
                </Route>
              </Route>
            </Route>
            {/* {protectedRoutesData.map((data)=><Route key={data.key} path={data.path} element={data.element}/>)} */}
          </Route>
          <Route path='login' element={<Login/>}/>
          <Route path='/' element={<Navigate to="/login" replace />}/>
          {/* {unprotectedRoutesData.map((data) => <Route key={data.key} path={data.path} element={data.element} />)} */}
        </Route>
      </Routes>
    </AuthProvider>

    // <AuthProvider>
    //   <Routes>
    //     {UnprotectedRoutes}
    //     {ProtectedRoutes}
    //   </Routes>
    // </AuthProvider>
  )
}

export default CustomRoutes