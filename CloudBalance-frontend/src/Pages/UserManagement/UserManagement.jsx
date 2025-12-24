import { useNavigate } from 'react-router-dom';


import Switch from '@mui/material/Switch';

import AddIcon from '@mui/icons-material/Add';
import ReplayIcon from '@mui/icons-material/Replay';
import EditIcon from '@mui/icons-material/Edit';
import FilterListAltIcon from '@mui/icons-material/FilterListAlt';
import SortIcon from '@mui/icons-material/Sort';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import SwapVertIcon from '@mui/icons-material/SwapVert';


const Usermanagement = () => {

  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const usersData = await axios.get("/api/user-management");
        if (usersData.data) {
          setUsers(currUsers => currUsers.splice(0, currUsers.length, ...usersData.data))
        }
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])

  const handleAddUser = () => {
    navigate('add-user');
  }

  const handleEdit = (userData) => {
    navigate('edit-user', { state: { userData } });
  }


  return (
    <div className='w-fit'>
      <div className=' pb-1 text-2xl font-bold' >User</div>
      <div className='bg-white p-1'>
        <div className='Table-top-headings'>
          <div className='flex p-2'>
            <button className='flex bg-purple-950 p-2 text-white cursor-pointer ' onClick={handleAddUser}>
              <AddIcon />
              <p className='font-bold'>Add New User</p>
            </button>
            <button className='flex  p-2 cursor-pointer'>
              <ReplayIcon />
              <p>
                Reset Filters
              </p>
            </button>
          </div>
        </div>
        <table className='border-separate border-spacing-0.5'>
          <thead >
            <tr className=''>
              <th className='px-3 py-2  bg-sky-100 text-left text-sky-950'>
                <div className='flex flex-row justify-between gap-5'>
                  First Name
                  <div>
                    <FilterListAltIcon className='cursor-pointer' />
                    <SortIcon className='cursor-pointer' />
                  </div>
                </div>
              </th>
              <th className='px-3 py-2  bg-sky-100 text-left text-sky-950'>
                <div className='flex flex-row justify-between gap-5'>
                  Last Name
                  <div>
                    <FilterListAltIcon className='cursor-pointer' />
                    <SortIcon className='cursor-pointer' />
                  </div>
                </div>
              </th>
              <th className='px-3 py-2  bg-sky-100 text-left text-sky-950'>
                <div className='flex flex-row justify-between gap-5' >
                  Email ID
                  <div>
                    <FilterListAltIcon className='cursor-pointer' />
                    <SortIcon className='cursor-pointer' />
                  </div>
                </div>
              </th>
              <th className='px-3 py-2  bg-sky-100 text-left text-sky-950'>
                <div className='flex flex-row justify-between gap-5'>
                  Roles
                  <div>
                    <FilterListAltIcon className='cursor-pointer' />
                  </div>
                </div>
              </th>
              <th className='px-3 py-2  bg-sky-100 text-left text-sky-950'>
                <div className='flex flex-row justify-between gap-5'>
                  Last Login
                  <div>
                    <SortIcon className='cursor-pointer' />
                  </div>
                </div>
              </th>
              <th className='px-3 py-2  bg-sky-100 text-left text-sky-950'>
                <div className='flex flex-row justify-between gap-5'>
                  Actions
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              console.log(user);
              return (
                <tr key={index} className={`py-8 hover:bg-sky-200 ${index % 2 == 0 ? 'bg-sky-50' : ''}`}>
                  <td className='px-5 py-1 text-sm text-left text-sky-800'>{user?.firstName}</td>
                  <td className='px-5 py-1 text-sm text-left text-sky-800'>{user?.lastName}</td>
                  <td className='px-5 py-1 text-sm text-left text-sky-800'>{user?.email}</td>
                  <td className='px-5 py-1 text-sm text-left text-sky-800 flex justify-around gap-3'>
                    <p key={index} className='px-2 py-1 border-2 border-sky-800 bg-sky-100 text-sky-800 font-bold text-sm'>{(String)(user?.role).toLocaleLowerCase()}</p>
                  </td>
                  <td className='px-5 py-1 text-sm text-left'>{user?.lastlogin}</td>
                  <td className='px-5 py-1 text-sm text-left flex items-center justify-evenly gap-3 '>
                    <Switch defaultChecked />
                    <button onClick={() => { handleEdit(user) }}>
                      <EditIcon />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Usermanagement