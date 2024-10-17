import React from 'react'

export default function Product({ title, image, price, description, rate }) {
  return (
    <div className='w-64 h-80 rounded-3xl shadow-lg ease-in duration-300 hover:scale-105'>
      <img src={image} className='w-full h-52' />
      <div className='p-5'>
        <div className='flex justify-between'>
          <h2 className='font-bold text-3xl'>{title}</h2>
          <h2 className='fon-normal text-2xl'>{price}</h2>
        </div>
        <div className='flex justify-between'>
          <h3 className='font-normal text-lg'>{description}</h3>
          <div className='flex items-center justify-center'>
            <h3>{rate}</h3>
            <span className="text-amber-400 text-3xl mb-1">★</span>
          </div>
        </div>
      </div>
    </div>
  )
}
