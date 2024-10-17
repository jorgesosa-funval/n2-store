import Image from "next/image"

export default function MiniaturaCarrito() {
    return (
        <>
            <div className="z-50 bg-white p-3 w-[320px] max-h-screen text-[10px] border divide-y divide-gray-100">
                <div className="overflow-y-auto h-64 pr-4">
                    <table className="table-auto w-full divide-y divide-gray-100">
                        <thead>
                            <tr className="text-center">
                                <th className="w-[10%]">Imagen</th>
                                <th className="w-[45%]">Nombre</th>
                                <th className="w-[20%]">Precio</th>
                                <th className="w-[15%]">Cantidad</th>
                                <th className="w-[10%]"></th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100">
                            <tr>
                                <td className="flex justify-center">
                                    <Image
                                        className="rounded-xl p-1"
                                        src="https://picsum.photos/seed/picsum/200/300"
                                        width={50}
                                        height={50}
                                        alt="imagen de producto"
                                    />
                                </td>

                                <td className="max-[45%] text-center px-1">
                                    <span>Producto 1</span>
                                </td>

                                <td className="font-bold text-center">
                                    $2000
                                </td>

                                <td>
                                    <div className="flex justify-center gap-1">
                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            -
                                        </button>

                                        <span>1</span>

                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>

                                <td>
                                    <div className="flex justify-end">
                                        <button
                                            className="px-1 bg-red-600 rounded-full"
                                            type="button"
                                        >
                                            <span className="text-[8px] text-white">X</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="flex justify-center">
                                    <Image
                                        className="rounded-xl p-1"
                                        src="https://picsum.photos/seed/picsum/200/300"
                                        width={50}
                                        height={50}
                                        alt="imagen de producto"
                                    />
                                </td>

                                <td className="max-[45%] text-center px-1">
                                    <span>Producto 2</span>
                                </td>

                                <td className="font-bold text-center">
                                    $2500
                                </td>

                                <td>
                                    <div className="flex justify-center gap-1">
                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            -
                                        </button>

                                        <span>1</span>

                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>

                                <td>
                                    <div className="flex justify-end">
                                        <button
                                            className="px-1 bg-red-600 rounded-full"
                                            type="button"
                                        >
                                            <span className="text-[8px] text-white">X</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="flex justify-center">
                                    <Image
                                        className="rounded-xl p-1"
                                        src="https://picsum.photos/seed/picsum/200/300"
                                        width={50}
                                        height={50}
                                        alt="imagen de producto"
                                    />
                                </td>

                                <td className="max-[45%] text-center px-1">
                                    <span>Producto 2</span>
                                </td>

                                <td className="font-bold text-center">
                                    $2500
                                </td>

                                <td>
                                    <div className="flex justify-center gap-1">
                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            -
                                        </button>

                                        <span>1</span>

                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>

                                <td>
                                    <div className="flex justify-end">
                                        <button
                                            className="px-1 bg-red-600 rounded-full"
                                            type="button"
                                        >
                                            <span className="text-[8px] text-white">X</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="flex justify-center">
                                    <Image
                                        className="rounded-xl p-1"
                                        src="https://picsum.photos/seed/picsum/200/300"
                                        width={50}
                                        height={50}
                                        alt="imagen de producto"
                                    />
                                </td>

                                <td className="max-[45%] text-center px-1">
                                    <span>Producto 2</span>
                                </td>

                                <td className="font-bold text-center">
                                    $2500
                                </td>

                                <td>
                                    <div className="flex justify-center gap-1">
                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            -
                                        </button>

                                        <span>1</span>

                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>

                                <td>
                                    <div className="flex justify-end">
                                        <button
                                            className="px-1 bg-red-600 rounded-full"
                                            type="button"
                                        >
                                            <span className="text-[8px] text-white">X</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="flex justify-center">
                                    <Image
                                        className="rounded-xl p-1"
                                        src="https://picsum.photos/seed/picsum/200/300"
                                        width={50}
                                        height={50}
                                        alt="imagen de producto"
                                    />
                                </td>

                                <td className="max-[45%] text-center px-1">
                                    <span>Producto 2</span>
                                </td>

                                <td className="font-bold text-center">
                                    $2500
                                </td>

                                <td>
                                    <div className="flex justify-center gap-1">
                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            -
                                        </button>

                                        <span>1</span>

                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>

                                <td>
                                    <div className="flex justify-end">
                                        <button
                                            className="px-1 bg-red-600 rounded-full"
                                            type="button"
                                        >
                                            <span className="text-[8px] text-white">X</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="flex justify-center">
                                    <Image
                                        className="rounded-xl p-1"
                                        src="https://picsum.photos/seed/picsum/200/300"
                                        width={50}
                                        height={50}
                                        alt="imagen de producto"
                                    />
                                </td>

                                <td className="max-[45%] text-center px-1">
                                    <span>Producto 2</span>
                                </td>

                                <td className="font-bold text-center">
                                    $2500
                                </td>

                                <td>
                                    <div className="flex justify-center gap-1">
                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            -
                                        </button>

                                        <span>1</span>

                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>

                                <td>
                                    <div className="flex justify-end">
                                        <button
                                            className="px-1 bg-red-600 rounded-full"
                                            type="button"
                                        >
                                            <span className="text-[8px] text-white">X</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="flex justify-center">
                                    <Image
                                        className="rounded-xl p-1"
                                        src="https://picsum.photos/seed/picsum/200/300"
                                        width={50}
                                        height={50}
                                        alt="imagen de producto"
                                    />
                                </td>

                                <td className="max-[45%] text-center px-1">
                                    <span>Producto 2</span>
                                </td>

                                <td className="font-bold text-center">
                                    $2500
                                </td>

                                <td>
                                    <div className="flex justify-center gap-1">
                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            -
                                        </button>

                                        <span>1</span>

                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>

                                <td>
                                    <div className="flex justify-end">
                                        <button
                                            className="px-1 bg-red-600 rounded-full"
                                            type="button"
                                        >
                                            <span className="text-[8px] text-white">X</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="flex justify-center">
                                    <Image
                                        className="rounded-xl p-1"
                                        src="https://picsum.photos/seed/picsum/200/300"
                                        width={50}
                                        height={50}
                                        alt="imagen de producto"
                                    />
                                </td>

                                <td className="max-[45%] text-center px-1">
                                    <span>Producto 2</span>
                                </td>

                                <td className="font-bold text-center">
                                    $2500
                                </td>

                                <td>
                                    <div className="flex justify-center gap-1">
                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            -
                                        </button>

                                        <span>1</span>

                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>

                                <td>
                                    <div className="flex justify-end">
                                        <button
                                            className="px-1 bg-red-600 rounded-full"
                                            type="button"
                                        >
                                            <span className="text-[8px] text-white">X</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="flex justify-center">
                                    <Image
                                        className="rounded-xl p-1"
                                        src="https://picsum.photos/seed/picsum/200/300"
                                        width={50}
                                        height={50}
                                        alt="imagen de producto"
                                    />
                                </td>

                                <td className="max-[45%] text-center px-1">
                                    <span>Producto 2</span>
                                </td>

                                <td className="font-bold text-center">
                                    $2500
                                </td>

                                <td>
                                    <div className="flex justify-center gap-1">
                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            -
                                        </button>

                                        <span>1</span>

                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>

                                <td>
                                    <div className="flex justify-end">
                                        <button
                                            className="px-1 bg-red-600 rounded-full"
                                            type="button"
                                        >
                                            <span className="text-[8px] text-white">X</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="flex justify-center">
                                    <Image
                                        className="rounded-xl p-1"
                                        src="https://picsum.photos/seed/picsum/200/300"
                                        width={50}
                                        height={50}
                                        alt="imagen de producto"
                                    />
                                </td>

                                <td className="max-[45%] text-center px-1">
                                    <span>Producto 2</span>
                                </td>

                                <td className="font-bold text-center">
                                    $2500
                                </td>

                                <td>
                                    <div className="flex justify-center gap-1">
                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            -
                                        </button>

                                        <span>1</span>

                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>

                                <td>
                                    <div className="flex justify-end">
                                        <button
                                            className="px-1 bg-red-600 rounded-full"
                                            type="button"
                                        >
                                            <span className="text-[8px] text-white">X</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="flex justify-center">
                                    <Image
                                        className="rounded-xl p-1"
                                        src="https://picsum.photos/seed/picsum/200/300"
                                        width={50}
                                        height={50}
                                        alt="imagen de producto"
                                    />
                                </td>

                                <td className="max-[45%] text-center px-1">
                                    <span>Producto 2</span>
                                </td>

                                <td className="font-bold text-center">
                                    $2500
                                </td>

                                <td>
                                    <div className="flex justify-center gap-1">
                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            -
                                        </button>

                                        <span>1</span>

                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>

                                <td>
                                    <div className="flex justify-end">
                                        <button
                                            className="px-1 bg-red-600 rounded-full"
                                            type="button"
                                        >
                                            <span className="text-[8px] text-white">X</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="flex justify-center">
                                    <Image
                                        className="rounded-xl p-1"
                                        src="https://picsum.photos/seed/picsum/200/300"
                                        width={50}
                                        height={50}
                                        alt="imagen de producto"
                                    />
                                </td>

                                <td className="max-[45%] text-center px-1">
                                    <span>Producto 2</span>
                                </td>

                                <td className="font-bold text-center">
                                    $2500
                                </td>

                                <td>
                                    <div className="flex justify-center gap-1">
                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            -
                                        </button>

                                        <span>1</span>

                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white px-1"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>

                                <td>
                                    <div className="flex justify-end">
                                        <button
                                            className="px-1 bg-red-600 rounded-full"
                                            type="button"
                                        >
                                            <span className="text-[8px] text-white">X</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="text-end pr-4">Total pagar: <span className="font-bold">$29500</span></p>

                <button className="btn bg-black w-full h-7 rounded-md uppercase text-white mt-2 p-1">Ir al carrito</button>

            </div>
        </>
    )
}
