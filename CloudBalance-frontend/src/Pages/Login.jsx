import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthProvider';

const Login = () => {

  const navigate = useNavigate();

  const {isAuthenticated, setisAuthenticated} = useAuth();

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
    if(data.Email==="CkerAdmin" && data.Password==="Admin" ){
      localStorage.setItem('isAuthenticated',true);
      localStorage.setItem('role','admin');
      setisAuthenticated(true);
      navigate('/dashboard');
    }else if(data.Email=='CkerUser' && data.Password=='User'){
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
      <div className=" min-h-screen">
        <div className="mx-auto mt-48 bg-white p-6 rounded-lg w-96 ">
          <img 
            src="/src/assets/Cloudkeeper_New.svg" 
            alt="CloudKeeper Logo" 
            className=" w-40 h-20 mx-auto " 
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
            <input 
              type="text" 
              id="Password" 
              name="Password" 
              onChange={formDataChange} 
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            {invalid?<p className='text-red-600'>User Not Found!</p>:''}
            <button 
              type="submit" 
              className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login