import React from 'react';
import axios from 'axios';
import AuthLayout from '@/components/Layouts/AuthLayout';

export default async function page() {
    const idUsuario = 1;

    const response = await axios.get('https://fakestoreapi.com/carts');
    const carritos = response.data;

    const carritoUsuario = carritos.find(carrito => carrito.userId === idUsuario);

    const obtenerDetallesProducto = async (idProducto) => {
        const respuestaProducto = await axios.get(`https://fakestoreapi.com/products/${idProducto}`);
        return respuestaProducto.data;
    };

    const promesasDetallesProducto = carritoUsuario.products.map(producto => obtenerDetallesProducto(producto.productId));

    const detallesProductos = await Promise.all(promesasDetallesProducto);

    console.log(detallesProductos)

    const montoTotal = detallesProductos.reduce((total, producto, index) => {
        return total + (producto.price * carritoUsuario.products[index].quantity);
    }, 0);

    return (
        <AuthLayout>
            <div className="p-6 max-w-4xl mx-auto bg-sky-500 shadow-md rounded-lg">
                <h1 className="text-2xl font-bold mb-6 text-center text-slate-900">Carrito del Usuario ID: {idUsuario}</h1>
                <div className="mt-4">
                    {detallesProductos.map((producto, index) => (
                        <div key={producto.id} className="flex items-center mb-4 p-4 bg-sky-200 rounded-lg shadow">
                            <img src={producto.image} alt={producto.title} className="w-20 h-20 object-cover mr-4 rounded-md" />
                            <div className="flex-1">
                                <p className="font-semibold text-slate-900">{producto.title}</p>
                                <p className="text-sm text-slate-800">Cantidad: {carritoUsuario.products[index].quantity}</p>
                                <p className="text-sm text-slate-800">Precio: ${producto.price}</p>
                                <p className="text-sm text-slate-800">Subtotal: ${(producto.price * carritoUsuario.products[index].quantity)}</p>
                                <button className="bg-sky-900 hover:bg-sky-800 active:bg-sky-700 rounded-lg flex justify-center items-center text-white text-sm px-4 py-2 transition duration-300 ease-in-out shadow-md hover:shadow-lg mt-5">
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <h2 className="text-xl font-bold mt-4 text-slate-900">Total a Pagar: ${montoTotal}</h2>
            </div>
        </AuthLayout>
    );
}
