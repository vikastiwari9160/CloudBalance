import React, { useState } from 'react'

const ModifyUserOutlet = (props) => {

    const [data, setData] = useState({
        firstName: props.firstName || '',
        lastName: props.lastName || '',
        email: props.email || '',
        role: props.role,
        password: ''
    });

    const handleOnChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="p-6 min-h-screen ">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">{props.title}</h1>
            <form className='bg-white p-8 rounded-xl shadow-lg '
                onSubmit={(e) => {
                    e.preventDefault();
                    props.handleSubmit(data);
                }}>
                <div className='w-fit'>
                    <div className='grid grid-cols-2 gap-x-8 gap-y-6 mb-6'>
                        <div className='flex flex-col'>
                            <label
                                htmlFor="firstName"
                                className='mb-2 text-sm font-bold text-gray-700'
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                name='firstName'
                                id='firstName'
                                value={data.firstName || ''}
                                onChange={handleOnChange}
                                placeholder='Enter First Name'
                                className='w-90 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out'
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="lastName"
                                className='mb-2 text-sm font-medium text-gray-700'
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                name='lastName'
                                id='lastName'
                                value={data.lastName || ''}
                                onChange={handleOnChange}
                                placeholder='Enter Last Name'
                                className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out'
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="email"
                                className='mb-2 text-sm font-medium text-gray-700'
                            >
                                Email ID <span className='text-red-600'>*</span>
                            </label>
                            <input
                                type="email"
                                name='email'
                                id='email'
                                value={data.email || ''}
                                onChange={handleOnChange}
                                placeholder='Enter Email ID'
                                className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label
                                htmlFor="RoleSelector"
                                className='mb-2 text-sm font-medium text-gray-700'
                            >
                                User Role <span className='text-red-600'>*</span>
                            </label>
                            <select
                                name="role"
                                id="RoleSelector"
                                value={data.role}
                                onChange={handleOnChange}
                                className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white appearance-none transition duration-150 ease-in-out'
                            >
                                <option value="user">User</option>
                                <option value="readonly">Read Only</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="password"
                                className='mb-2 text-sm font-medium text-gray-700'
                            >
                                Password <span className='text-red-600'>*</span>
                            </label>
                            <input
                                type="text"
                                name='password'
                                id='password'
                                value={data.password || ''}
                                onChange={handleOnChange}
                                placeholder='Enter Password'
                                className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out'
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className='w-full py-3 mt-4 text-white font-semibold bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200 ease-in-out shadow-md'
                    >
                        {props.buttonText}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ModifyUserOutlet