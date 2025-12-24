import { NavLink } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { useSideMenuContext } from '../Contexts/SideMenuToggleProvider';
import { useSelector } from 'react-redux';


const Sidebar = () => {

  const {fullMenu} =useSideMenuContext();

  const {role} = useSelector(state=>state);
  const userRole = String(role).toLocaleLowerCase();
  
  const prevPath = "/dashboard/"; 

  const links = [
    {key:"UserManagement", to:"user-management", label:"User Management", allowed:["admin","readonly"] ,element:<PersonIcon sx={{width:20, height:20}}/>},
    {key:"onboarding", to:"onboarding", label:"Onboarding", allowed:["admin"], element:<AddIcon sx={{width:20, height:20}}/>},
    {key:"costexplorer", to:"cost-explorer", label:"Cost Explorer", allowed:["admin","readonly","user"] ,element:<AttachMoneyIcon sx={{width:20, height:20}}/>},
    {key:"awsservices", to:"aws-services", label:"AWS Services",allowed:["admin","readonly","user"], element:<DesignServicesIcon sx={{width:20, height:20}}/>},
  ]
  return (
    <>
      <div className={`${fullMenu?'w-60':'w-10'}w-60 p-2 h-full flex flex-col gap-1 bg-white border-r-2 border-gray-200`}>
        {links.map((link)=>{
          if(link.allowed.includes(userRole)){
            return(
              <NavLink key={link.key} to={prevPath+link.to} className={({isActive})=>`h-10 w-full flex items-center rounded-lg  ${isActive?'bg-sky-200':'hover:bg-gray-100'}`} >
                  <div className='flex items-center justify-center gap-3 p-3' >
                    <div >{link.element}</div>
                    { fullMenu? link.label :''}
                  </div>
              </NavLink>
            )
          }
        })}
      </div>
    </>
  )
}

export default Sidebar