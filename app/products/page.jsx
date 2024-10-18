
export default function Product() {
    return (

        <>
            <div className='bg-sky-200 h-screen w-full grid place-content-center'>
                <div className='h-full'>
                    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-3xl shadow-xl md:flex-row md:max-w-3xl p-6 max-sm:overflow-y-hidden">

                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' alt="abrigo" />
                        <div className="flex flex-col justify-between p-5 leading-normal gap-4">
                            <div>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900">Name of the product</h5>
                                <p className="mb-3 font-semibold text-slate-900 text-lg">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <hr className='border border-gray-300'></hr>
                            </div>
                            <div className='CATEGORY'>
                                <label className='flex flex-col gap-2'>
                                    <h6 className='font-medium text-lg'>Category</h6>
                                    <p>Name of category</p>
                                </label>
                            </div>
                            <div className='PRICE'>
                                <div className='bg-gray-500 py-3 px-2 text-white rounded-md text-lg'>
                                    <h5>$ 80.00</h5>
                                </div>
                            </div>
                            <div className='ICONS'>
                                <div className='flex gap-1'>
                                    <div className='SHOP flex border rounded-lg py-1 px-2 bg-blue-700 text-white gap-1 hover:bg-blue-600 cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                        </svg>
                                        <h6>Add to Cart</h6>
                                    </div>
                                    <div className='FAVORITE flex border rounded-lg py-1 px-2 bg-gray-300 gap-1 cursor-pointer hover:bg-gray-400'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                        <h6>Add to Wish list</h6>

                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


        </>

    )
}
