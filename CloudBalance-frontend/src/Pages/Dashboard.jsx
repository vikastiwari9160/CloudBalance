import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate();
    const role = 'admin';
    const currLocation = useLocation();

    useEffect(()=>{
        if(currLocation.pathname=="/dashboard" || currLocation.pathname=="/dashboard/"){
            if (role == 'admin' || role == 'readonly'){
                navigate('/dashboard/user-management');
            }
            if (role == 'uesr') navigate('cost-explorer');
        }
    },[navigate,role,currLocation]);

    return(
        <>
            <Outlet/>
        </>
    );
}

export default Dashboard