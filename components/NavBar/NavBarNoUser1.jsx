import Link from 'next/link'
import React from 'react'

export default function NavBarNoUser1() {
  return (
    <nav className='bg-sky-400 w-full h-16 flex items-center overflow-x-auto'>
    <div className='flex items-center gap-x-2 ms-10'>
        <figure>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
            </svg>
        </figure>
        <h2 className='text-slate-700 text-3xl font-medium me-4'>FAKESTORE</h2>
    </div>
    <div className='flex  items-center w-full justify-between me-8'>
    <ul className='flex gap-x-4'>
        <Link href="/">
        <li className='text-lg font-medium'>Home</li>
        </Link>
        <Link href="/products">
        <li className='text-lg font-medium'>Products</li>
        </Link>
    </ul>
    <ul className='flex items-center justify-end gap-x-4'>
        <Link href="/cart">
        <li className='cursor-pointer text-white'>
            <figure>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>

            </figure>
        </li>
        </Link>
        <Link href="/auth/login">
        <li className='text-lg font-medium text-white'>Log in</li>
        </Link>
        <Link href="/auth/register">
        <li className=''>
            <button className='bg-slate-800 text-xl p-2 text-white font-medium rounded-lg hover:bg-slate-600  focus:bg-sky-600'>
            Registrarse
            </button>
        </li>
        </Link>
        <li className='cursor-pointer text-white '>
            <figure>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                </svg>


            </figure>
        </li>
    </ul>
    </div>
</nav>
  )
}
