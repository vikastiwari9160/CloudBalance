import { BrowserRouter } from 'react-router-dom'
import './App.css'
import CustomRoutes from './AllRoutes/Routes'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  useEffect(()=>{
    axios.defaults.baseURL="http://localhost:8080";
    axios.defaults.withCredentials=true;
  },[])

  return (
    <>
    <BrowserRouter>
      <CustomRoutes/>
    </BrowserRouter>
    </>
  )
}

export default App
