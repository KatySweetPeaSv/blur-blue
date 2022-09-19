import React from 'react'
import {data} from '../data/data.js';

function ProductDetails() {
  return (
    <div className='max-w-[1240px] m-auto px-4 mt-[-5rem] pt-5 font-lato'>
        <div className='grid grid-cols-2 text-center items-start '>
                <div className='flex justify-center flex-col gap-5'  key={data[0].id}>
                    <div className='border-[1px] border-GrayishBlack flex justify-center shadow-lg'>
                    <img className='ProductDetailsImg' src={data[0].image} alt="imagen" />
                    </div>
                    <h3>Envio</h3>
                    <h3>Entregas</h3>
                    <h3>Devoluciones</h3>
                </div>

            <div className='flex flex-col ml-[2rem]  bg-[#fcf8f5] rounded-sm'>
                            <div className='flex flex-col gap-5'>
                                <h1 className='text-3xl capitalize mt-4'>figura de {data[0].name}</h1>
                                <h2 className='text-4xl uppercase text-LightBlue mb-[2rem]'>{data[0].price}</h2>
                                
                            </div>
                            
                            <div className='flex justify-around mb-[2rem]'>
                                <h3 className='uppercase'><span className='text-gray-500'>Franquicia:</span><br/><span className='font-bold text-GrayishBlack'>{data[0].franchise}</span></h3>
                                <h3 className='uppercase'><span className='text-gray-500'>Marca:</span><br/><span className='font-bold text-GrayishBlack'>{data[0].brand}</span> </h3>
                                <h3 className='uppercase'><span className='text-gray-500'>Lanzamiento:</span><br/><span className='font-bold text-GrayishBlack'>{data[0].release_date}</span></h3>
                            </div>

                            <div className='grid grid-cols-2 my-5'>
                                <h3> <span className='text-gray-500'>Dimensiones:</span><br/> <span className='text-xs text-GrayishBlack font-medium'>{data[0].dimensions}</span> </h3>
                                <h3> <span className='text-gray-500'>Escala:</span><br/> <span className='text-xs text-GrayishBlack font-medium'>{data[0].scale}</span> </h3>
                                <h3 className='mt-3'> <span className='text-gray-500'>Material:</span><br/> <span className='text-xs text-GrayishBlack font-medium'>{data[0].material}</span> </h3>
                                <h3 className='mt-3'> <span className='text-gray-500'>Estado:</span><br/> <span className='text-xs text-GrayishBlack font-medium'>Nuevo</span></h3>
                            </div>

                            <div className='text-center py-2'>
                                <p className='text-2'>Cantidad:</p>
                                <div className='counter flex justify-center pt-2'>
                                <button className='px-2 py-1 font-bold'>-</button>
                                <input className='w-12 border-LightBlue rounded-md mx-1 text-sm text-center
                                                placeholder-gray-600 focus:outline-LightBlue
                                                focus:border-LightBlue focus:ring-1 
                                                focus:ring-LightBlue ' type="text" placeholder='0' name='#OfItems'/>
                                <button className='px-2 py-1 font-bold'>+</button>
                                </div>

                            <div className='flex flex-col justify-center items-center p-4'>
                                <button className='px-4 py-2 mt-3'>Agregar a Carrito</button>
                                <button className='px-12 py-2 mt-3  bg-green-500 hover:bg-green-300'>Comprar</button>
                                </div>
                            </div>

            </div>
        </div>
    </div>
  )
}

export default ProductDetails