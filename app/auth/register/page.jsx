import React from 'react'

export default function Register() {
    return (
        <main className='w-full h-screen bg-gradient-to-tr from-sky-700 via-slate-300 to-sky-200'>
            <section className='w-full h-full flex justify-center items-center'>
                <form className='w-6/12 flex flex-wrap justify-center border border-sky-800 rounded-3xl p-8 bg-white bg-opacity-35' action="">
                    <div className='flex flex-wrap w-full'>

                        <div className='flex justify-between w-full'>
                            <label className='w-6/12 border border-sky-500 rounded-lg overflow-hidden h-7' htmlFor="name">
                                <input className='w-full h-full outline-none pl-2 text-sm' id='name' type="text" placeholder='Name' required />
                            </label>

                            <label className='w-5/12 h-7 border rounded-lg overflow-hidden border-sky-500' htmlFor="lastname">
                                <input className='w-full h-full pl-2 text-sm' id='lastname' type="text" placeholder='Last Name' required />
                            </label>
                        </div>

                        <label className='w-full h-7 my-4 border rounded-lg overflow-hidden border-sky-500' htmlFor="email">
                            <input className='w-full h-full pl-2 text-sm' id='email' type="text" placeholder='Email' required />
                        </label>

                        <div className='flex justify-center gap-3 w-full'>
                            <label className='h-7 border w-5/12 rounded-lg overflow-hidden text-sm border-sky-500' htmlFor="phone">
                                <input className='w-full h-full pl-2  text-sm' id='phone' type="text" placeholder='Phone Number' required />
                            </label>

                            <label className=' w-5/12 h-full border rounded-lg overflow-hidden border-sky-500' htmlFor="username">
                                <input className='w-full h-full pl-2 text-sm' id='username' type="text" placeholder='UserName' required />
                            </label>
                        </div>

                        <label className='w-full mt-5 text-xs font-semibold overflow-hidden mb-1' htmlFor="password">Password</label>
                        <input className='w-full h-7 border rounded-lg mb-3 text-sm pl-2 border-sky-500' id='password' type="text" placeholder='Password' required />


                        <label className='w-full border h-7 rounded-lg overflow-hidden border-sky-500' htmlFor="rpassword">
                            <input className='w-full h-full pl-2 text-sm border-sky-300' id='rpassword' type="text" placeholder='Password Again' required />
                        </label>

                        <span className='text-xs font-semibold mt-4'>Address</span>

                        <label className='w-full mt-1 text-xs font-semibold overflow-hidden mb-1' htmlFor="Address"></label>
                        <input className='w-full h-7 border rounded-lg mb-3 text-sm pl-2 border-sky-500' id='Address' type="text" placeholder='Street' required />

                        <div className='flex w-full h-7'>
                            <label className='text-xs font-semibold overflow-hidden mb-1' htmlFor="housenumber"></label>
                            <input className='w-3/12 h-7 border rounded-lg mb-3 text-sm pl-2 border-sky-500' id='housenumber' type="text" placeholder='Number' required />

                            <label className=' text-xs font-semibold overflow-hidden mb-1' htmlFor="city"></label>
                            <input className='w-4/12 h-7 border rounded-lg mb-3 text-sm pl-2 border-sky-500 mx-auto' id='city' type="text" placeholder='City' required />

                            <label className='text-xs font-semibold overflow-hidden mb-1' htmlFor="zcode"></label>
                            <input className='w-3/12 h-7 border rounded-lg mb-3 text-sm pl-2 border-sky-500' id='zcode' type="text" placeholder='Zipcode' required />

                        </div>

                    </div>

                    <button type='submit' className='mt-8 border w-full text-sky-400 font-semibold text-xs h-8 active:text-base rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-serif'>Click Now, Smile Forever!</button>
                </form>
            </section>

        </main>
    )
}
