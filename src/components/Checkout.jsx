import React from 'react'
import {TrashIcon} from '@heroicons/react/24/solid';

const Checkout = () => {
  return (
    <div className='w-[25rem] m-auto text-center p-10 items-center font-lato'>
        <div className='border-GrayishBlack border-[1px] m-auto flex flex-col py-5 justify-center rounded gap-4  bg-[#fcf8f5]'>
          <p className='font-bold capitalize'>Carrito de compras</p>

            <div className='flex justify-around flex-wrap border-y-[1px] border-GrayishBlack py-2'>
                        <div>
                        <div className='flex justify-center'>
                        <img className='checkoutImg' 
                        src="https://serespensantes.com/wp-content/uploads/2020/12/1607365363_figura_anime.jpg" 
                        alt="image" />
                        </div>
                        <p className='font-bold text-Blue'>$35.99</p>
                        <p className='text-xs capitalize'>Monkey D. Luffy</p>
                        </div>
                        <div className='flex justify-center flex-col content-center text-xs'>
                          <p>Cantidad:</p>
                          <p className='text-gray-600'>1</p>
                        </div>
                        <div className='flex justify-center'>
                      <TrashIcon className='w-5 hover:text-Reddish cursor-pointer transition duration-300' title='Eliminar' />
                      </div>
            </div>
            <div className='grid grid-cols-1 gap-1'>
              <p>Total a pagar</p>
              <p className='font-bold text-green-500'>US$35.29</p>
              <button className='mx-[55px]  bg-green-500 hover:bg-green-300 capitalize'>Comprar Ya</button>
            </div>
            <div>
              <a href='#' className='text-xs capitalize'>Ver todos</a>
            </div>
        </div>
    </div>
  )
}

export default Checkout