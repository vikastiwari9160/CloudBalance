import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSideMenuContext } from "../Contexts/SideMenuToggleProvider";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {

    const location = useLocation();
    
    const dispatch = useDispatch();
    
    const {userName, accounts} = useSelector(state=> state);
    
    console.log(location.pathname);
    
    const options=accounts;

    const handleAccountSelection = (e) => {
        dispatch({
            type:"set_account",
            payload: e.target.value
        })
    }

    const {fullMenu,setFullMenu} = useSideMenuContext();

  return (
    <>
    <nav className="flex flex-row justify-between bg-white w-full h-16 px-10 shadow-lg shadow-gray  z-30">
        <div className="flex flex-row justify-around w-100 items-center">
            <img className="w-40 cursor-pointer" src="/src/assets/Cloudkeeper_New.svg" alt="" />
            <button className="cursor-pointer" onClick={()=>{fullMenu?setFullMenu(false):setFullMenu(true)}}>
                <MenuIcon sx={{ width:25, height:25, color:'#075985'}} />
            </button>
            <div>
                <p className="font-bold text-xs" >Accounts</p>
                <select className="w-40 border border-amber-600 cursor-pointer" name="account" id="account" onChange={handleAccountSelection}>
                    {options.map((optionData)=>{
                        return <option key={optionData.value} value={optionData.value}>{optionData.label}</option>
                    })}
                </select>
            </div>
        </div>
        <div className="flex flex-row justify-around items-center w-60 gap-5">
            <div className="flex flex-row justify-around items-center w-30 cursor-pointer" >
                <AccountCircleIcon sx={{ width:30, height:30, color:'#075985'}}/>
                <div>
                    <p className="text-xs">Welcome,</p>
                    {/*logic Need to be updated after redux */}
                    <p className="font-bold text-sm text-sky-800">{userName}</p>
                </div>
            </div>
            <div>
                <button 
                    className="
                        flex items-center space-x-1.5 
                        border-2 border-sky-800 
                        text-sky-800 
                        rounded-lg 
                        px-2 py-1 
                        transition-colors duration-200
                        cursor-pointer
                        hover:bg-sky-800 hover:text-white 
                        hover:border-sky-800
                        focus:outline-none focus:ring-2 focus:ring-sky-800 focus:ring-opacity-50
                    "
                    >
                    <LogoutIcon sx={{width:20,height:20}} color="inherit" />
                    <p className="text-sm font-bold">Logout</p>
                    </button>
            </div>
        </div>

    </nav>
        
    </>
  )
}

export default Navbar