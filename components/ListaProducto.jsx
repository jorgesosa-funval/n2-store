import React from 'react'
import Product from './Product'
import Link from 'next/link';
const products = new Array(15).fill(null);
export default function ListaProducto() {
  return (
    <div>
            <div className='p-10 h-full grid grid-cols-4 gap-5'>
                {products.slice(0, 12).map((_, index) => (
                    <Link href='/productDetails'><Product key={index} 
                    image='https://picsum.photos/200/300?random=1'
                    title='title'
                    price='precio'
                    description='descripcion'
                    rate='5'
                    />
                    </Link>
                ))}
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
