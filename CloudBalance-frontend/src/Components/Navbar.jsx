import { useAccount } from "../Contexts/AccountProvider";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {

    const {setAccount} = useAccount();

    const options=[
        {label:"Account 1", value:"Accoint 1"},
        {label:"Account 2", value:"Accoint 2"}
    ]

    const handleAccountSelection = (e) => {
        setAccount(e.target.value);
    }

  return (
    <>
    <nav className="flex flex-row justify-between h-16 px-10 shadow-lg shadow-gray">
        <div className="flex flex-row justify-around w-100 items-center">
            <img className="w-40" src="/src/assets/Cloudkeeper_New.svg" alt="" />
            <MenuIcon sx={{ width:25, height:25, color:'#075985'}} />
            <div>
                <p className="font-bold text-xs" >Accounts</p>
                <select className="w-40 border border-amber-600" name="account" id="account" onChange={handleAccountSelection}>
                    {options.map((optionData)=>{
                        <option value={optionData.value}>{optionData.label}</option>
                    })}
                </select>
            </div>
        </div>
        <div className="flex flex-row justify-around items-center w-60">
            <div className="flex flex-row justify-around items-center w-30" >
                <AccountCircleIcon sx={{ width:30, height:30, color:'#075985'}}/>
                <div>
                    <p className="text-xs">Welcome,</p>
                    {/*logic Need to be updated after redux */}
                    <p className="font-bold text-sm text-sky-800">CkerAdmin</p>
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