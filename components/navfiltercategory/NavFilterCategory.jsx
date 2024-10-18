'use client'
import React from 'react'
import axios from "axios";


async function fetchData(url) {
    const rs = await fetch(url)
    const json = await rs.json()
    console.log(json)
    return json
  }

export default async function NavbarFilterCategory() {

const {data : categories} = await axios.get('https://fakestoreapi.com/products/categories',
    {});



  return (
    <nav className="flex flex-row rounded-2xl w-[62%] h-16 justify-between items-center mt-5 ml-10 bg-sky-500 text-white">
            <form className="flex flex-row justify-between"> 
                <input type="text" className="rounded-xl h-8 w-[55%] text-sm md:w-[70%] ml-8 border-1 shadow-lg hover:border-cyan-400" placeholder='  Search product by name'/>
                <div className="w-0 md:w-64"></div>
                <select name="categories" className="shadow-lg text-sm justify-end md:ml-28 ml-2 h-8 text-slate-600 rounded-md w-[20%] md:w-[30%] mr-10 md:mr-2">
                   <option value="Todas">Todas</option>
                            {  categories &&  categories.map((cat,i) =>
                                <option key={i} value={cat}>{cat}</option>
                            )}
                </select>
            </form>
      </nav>
  )
}




