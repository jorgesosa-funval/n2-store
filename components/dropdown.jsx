import Link from 'next/link'
import React from 'react'

function Dropdown() {
    return (
        <div className='border rounded-2xl w-40 py-7 px-4 shadow-md bg-sky-400'>
            <li className='list-none text-slate-900 hover:underline cursor-pointer'>
                <Link href={"#"}>Profile</Link>
                </li>
            <li className='list-none text-slate-900 hover:underline cursor-pointer'>
                <Link href={""}>Lista de deseos</Link>
                </li>
            <li className='list-none text-slate-900 hover:underline cursor-pointer'>
                <Link href={"/api/auth/logout"}>Logout</Link>
                </li>
        </div>
    )
}

export default Dropdown

