'use client'
import React,{useState, useEffect} from 'react'
import axios from "axios";


export default function NavbarFilterCategory() {


  const [categories, SetCategories] = useState([]); 

  useEffect(() => {
    // Usa axios para hacer una solicitud al archivo JSON
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories'); 
        SetCategories(response.data); 
        console.log(response.data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    fetchCategories();
  }, []); // Ejecuta el 

/*const {data : categories} = await axios.get('https://fakestoreapi.com/products/categories',
    {});*/



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




