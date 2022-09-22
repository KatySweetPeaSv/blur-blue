import React from 'react'
import {ShoppingCartIcon} from '@heroicons/react/24/solid';
import Logo from '../assets/logo.png';

const Navbar = () => {

  

  return (
    <div className='w-screen z-10 bg-GrayishBlack fixed drop-shadow-lg'>
        <div className='flex justify-between items-center w-full h-full px-2  text-white'>
                            <div className='py-5'>
                              <img className='w-[9rem] cursor-pointer' src={Logo} alt="company logo" />
                            </div>
                        <div className='flex items-center '>
                                    <ul className='flex'>
                                        <li className='font-oswald'>Figuras</li>
                                        <li className='font-oswald'>Franquicias</li>
                                        <li className='font-oswald'>Pre-Ordenes</li>
                                        <li className='font-oswald'>Recién Llegadas</li>
                                        <li className='font-oswald'>Ofertas</li>
                                    </ul>
                        </div>
                        <div className='flex items-center'>
                            <div className='mr-4 flex'> 
                            < ShoppingCartIcon className=' w-7 mr-8 text-white cursor-pointer' title='Carrito'  />
                            <a href="#" className='pCounter ml-[-44px] mb-[38px] text-center text-xs'>0</a>
                            </div>
                            
                            <button className='px-4 py-2 mr-4 font-oswald'>Ingresar</button>
                            <button className='px-4 py-2 mr-4 font-oswald'>Registrarme</button>
                        </div>
        </div>
    </div>
  )
}

export default Navbar