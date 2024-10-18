import React from 'react'
import Product from './Product'
import Link from 'next/link';
import axios from 'axios';


export default async function ListaProducto() {
    const {data}=await axios.get('https://fakestoreapi.com/products')

  return (
    <div>
            <div className='p-10 h-full grid grid-cols-4 gap-5'>
                {
                data && data.slice(0, 12).map((item, index) => (
                    
                    <Link href='/productDetails'>
                    <Product key={index} 
                    image= {item.image}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    category={item.category}
                    rate='5'
                    />
                    
                    </Link>
                ))
                }
            </div>
            <div className='justify-center flex p-5 hover:shadow-gray-500-lg '>
            <button className='flex text-slate-600'>
                Ver mas 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>

            </button>
            </div>
           
        </div>
  )
}
