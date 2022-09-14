import React from 'react'
import {ShoppingCartIcon} from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <div className='w-screen z-10 bg-GrayishBlack fixed drop-shadow-lg'>
        <div className='flex justify-between items-center w-full h-full px-2  text-white'>
                        <div className='flex items-center '>
                            <h1 className='text-2xl font-bold mr-14 sm:text-3xl cursor-pointer'>Mizu No KoKyú</h1>
                                    <ul className='flex'>
                                        <li>Figuras</li>
                                        <li>Franquicias</li>
                                        <li>Pre-Ordenes</li>
                                        <li>Recién Llegadas</li>
                                        <li>Ofertas</li>
                                    </ul>
                        </div>
                        <div className='flex items-center'>
                            <div className='mr-4'> < ShoppingCartIcon className=' w-7 mr-4 text-white' /> </div>
                            <button className='px-4 py-2 mr-4'>Ingresar</button>
                            <button className='px-4 py-2 mr-4'>Registrarme</button>
                        </div>
        </div>
    </div>
  )
}

export default Navbar