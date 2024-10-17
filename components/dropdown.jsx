import React from 'react'

function Dropdown() {
    return (
        <div className='border rounded-2xl w-40 py-7 px-4 shadow-md bg-sky-400'>
            <li className='list-none text-slate-900 hover:underline cursor-pointer'>Profile</li>
            <li className='list-none text-slate-900 hover:underline cursor-pointer'>Lista de deseos</li>
            <li className='list-none text-slate-900 hover:underline cursor-pointer'>Logout</li>
        </div>
    )
}

export default Dropdown

