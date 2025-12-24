import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate();
    const {role} = useSelector(state=>state);
    const userRole = String(role).toLocaleLowerCase();
    const currLocation = useLocation();

    useEffect(()=>{
        if(currLocation.pathname=="/dashboard" || currLocation.pathname=="/dashboard/"){
            console.log(userRole);
            if (userRole == 'admin' || userRole == 'readonly'){
                navigate('user-management');
            }
            if (userRole == 'user') navigate('cost-explorer');
        }
    },[navigate,userRole,currLocation]);

    return(
        <>
            <Outlet/>
        </>
    );
}

export default Dashboard