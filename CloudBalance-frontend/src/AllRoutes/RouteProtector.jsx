import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

const RoutesProtector = () => {

    // const navigate = useNavigate();
    // const {loggedIn} = useSelector();
    const { loggedIn } = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        (async () => {
            try {
                const userData = await axios.get("/api/auth/me");
                if (userData.data && userData.data.active) {
                    dispatch({
                        type: "set_loggedIn"
                    });
                    dispatch({
                        type: "set_user",
                        payload: {
                            username: `${!userData.data.firstName ? '' : userData.data.firstName} 
                    ${!userData.data.LastName ? '' : userData.data.LastName}`,
                            role: userData.data.role,
                            accounts: userData.data.accounts
                        }
                    })
                }
            } catch (error) {
                dispatch({
                    type: "set_loggedOut"
                })
                navigate('/login');
                console.log(error);
            }
        }
        )()

    }, [loggedIn, dispatch, navigate])

    return (
        <Outlet />
    )
}

export default RoutesProtector