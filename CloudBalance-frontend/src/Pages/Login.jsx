import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthProvider';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Footer from '../Components/Footer';

const Login = () => {

  const navigate = useNavigate();

  const {isAuthenticated, setisAuthenticated} = useAuth();

  const {ShowPassword,setShowPassword} = useState(false);

  useEffect(()=>{
    if(isAuthenticated){
      navigate('/dashboard');
    }
  },[isAuthenticated,navigate])
  
  const [invalid,setInvalid] = useState(false);

  const [data, setData] = useState({
    Email:'',
    Password:''
  });

  const formDataChange = (e) => {
    setData({
      ...data, 
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    // Hardcoded user for now 
    console.log(data.Email +""+ data.Password)
    if(data.Email==="CkerAdmin@cloudkeeper.com" && data.Password==="Admin" ){
      localStorage.setItem('isAuthenticated',true);
      localStorage.setItem('role','admin');
      setisAuthenticated(true);
      navigate('/dashboard');
    }else if(data.Email=='CkerUser@cloudkeeper.com' && data.Password=='User'){
      localStorage.setItem('isAuthenticated',true);
      localStorage.setItem('role','user');
      setisAuthenticated(true);
      navigate('/dashboard');
    }else{
      setInvalid(true);
    }
    
    console.log("form Submitted");
  }

  return (
    <>
      <div>
        <div className="mx-auto mt-56 bg-white p-6 rounded-lg w-96 ">
          <img 
            src="/src/assets/Cloudkeeper_New.svg" 
            alt="CloudKeeper Logo" 
            className=" w-60 h-30 mx-auto " 
          />
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <label htmlFor="Email" className="text-gray-700">Email</label>
            <input 
              type="text" 
              id="Email" 
              name="Email" 
              onChange={formDataChange} 
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <label htmlFor="Password" className="text-gray-700">Password</label>
            {/* <div className="border border-gray-300 p-2 rounded-md relative focus:outline-none focus:ring-2 focus:ring-blue-500" ></div> */}
            <input 
              type="text" 
              id="Password" 
              name="Password" 
              onChange={formDataChange} 
              className="border border-gray-300 p-2 rounded-md relative focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            {/* <div className=' inline-block absolute right-3 '>
              {ShowPassword?<RemoveRedEyeIcon/>:<VisibilityOffIcon/>}
            </div> */}
            {invalid?<p className='text-red-600'>User Not Found!</p>:''}
            <button 
              type="submit" 
              className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
          </form>
        </div>
        <div className='w-full bg-gray-100 fixed bottom-0'>
          <div className='flex justify-between mx-5 my-1'>
            <p className='px-2 py-1 font-light text-sm '>Have Questions ? <span className=' text-blue-600 '>Talk to our team</span> </p>
            <p className='px-2 py-1 font-light text-sm'>CloudKeeper 2025 | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login