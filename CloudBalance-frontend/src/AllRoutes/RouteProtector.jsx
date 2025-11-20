import React from 'react'
import { useAuth } from '../Contexts/AuthProvider'
import { Outlet, useNavigate } from 'react-router-dom';

const RoutesProtector = () => {
    
    const navigate = useNavigate();
    const {isAuthenticated} = useAuth();

    if(!isAuthenticated){
        navigate('/login');
    }

    return (
        <Outlet/>
    )
}

export default RoutesProtector