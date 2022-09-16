import React, {useState} from 'react';
import {data} from '../data/data.js';

const CardGrid = () => {
  const [cards, Setcard] = useState(data);

  return (
      <div className='max-w-[1240px] m-auto px-4 bg-Beige mt-[-5rem]'>
        <h1 className='text-4xl font-anton text-center py-10 '>Figuras más vendidas</h1>

        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between gap-10'>

                {/* Filter Type */}
                  <div>
                        <p className='font-bold text-DeepGray'>Filtrar por Franquicia:</p>
                        <div className='flex justify-between flex-wrap mt-2'>
                          <button className='border-Reddish text-Reddish bg-white font-thin hover:bg-Reddish hover:text-white m-2 px-4'>One Piece</button>
                          <button className='border-Reddish text-Reddish bg-white font-thin hover:bg-Reddish hover:text-white m-2 px-4'>Kimetsu No Yaiba</button>
                          <button className='border-Reddish text-Reddish bg-white font-thin hover:bg-Reddish hover:text-white m-2 px-4'>Shigeki No Kyojin</button>
                          <button className='border-Reddish text-Reddish bg-white font-thin hover:bg-Reddish hover:text-white m-2 px-4'>Bleach</button>
                          <button className='border-Reddish text-Reddish bg-white font-thin hover:bg-Reddish hover:text-white m-2 px-4'>Death Note</button>
                        </div>
                  </div>

                  {/* Filter Price */}
                  <div>
                      <p className='font-bold text-DeepGray'>Filtrar por precio ($):</p>
                      <div className='flex justify-between flex-wrap mt-2'>
                        <button className='border-Reddish text-Reddish bg-white font-thin hover:bg-Reddish hover:text-white m-2 px-4'>1 - 100</button>
                        <button className='border-Reddish text-Reddish bg-white font-thin hover:bg-Reddish hover:text-white m-2 px-4'>100 - 200</button>
                        <button className='border-Reddish text-Reddish bg-white font-thin hover:bg-Reddish hover:text-white m-2 px-4'>200 - 400</button>
                        <button className='border-Reddish text-Reddish bg-white font-thin hover:bg-Reddish hover:text-white m-2 px-4'>500+</button>
                      </div>
                  </div>
        </div>
        {/* ==============================*/}
                <div>
                  {/*Display cards [8]*/}
                  <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 pt-4'>
                    {cards.map((card, index) => (
                        <div className='border-GrayishBlack border-[1px] cardShadow flex flex-col flex-wrap p-3 font-lato' key={index}>
                          {/* Image */}
                          <img className='cardRatio' src={card.image} alt={card.name} />
                              {/* Product Details */}
                              <div className='border-GrayishBlack border-t-[1px] text-center py-2'>
                                        <h3 className='uppercase font-bold text-GrayishBlack'>{card.name}</h3>
                                        <p className=' capitalize text-xs text-gray-600'>{card.category}</p>
                                        <p className=' text-black text-2xl py-2 font-bold'>{card.price}</p>

                                        {/* Checkout Options */}
                                        <p className='text-2'>Cantidad</p>
                                        <div className='counter flex justify-center pt-2'>
                                        <button className='px-2 py-1 font-bold'>-</button>
                                        <input className='w-12 border-LightBlue rounded-md mx-1 text-sm text-center
                                        placeholder-gray-600 focus:outline-LightBlue focus:border-LightBlue focus:ring-1 
                                        focus:ring-LightBlue ' type="text" placeholder='0' />
                                        <button className='px-2 py-1 font-bold'>+</button>
                                    </div>
                                        <button className='px-4 py-2 mt-3'>Agregar al Carrito</button>
                                        <button className='px-12 py-2 mt-3 bg-green-500 hover:bg-green-300'>Comprar</button>
                              </div>
                        </div> 

                    ))}
                    {cards.map((card, index) => (
                        <div className='border-GrayishBlack border-[1px] cardShadow flex flex-col flex-wrap p-3 font-lato' key={index}>
                          {/* Image */}
                          <img className='cardRatio' src={card.image} alt={card.name} />
                              {/* Product Details */}
                              <div className='border-GrayishBlack border-t-[1px] text-center py-2'>
                                        <h3 className='uppercase font-bold text-GrayishBlack'>{card.name}</h3>
                                        <p className=' capitalize text-xs text-gray-600'>{card.category}</p>
                                        <p className=' text-black text-2xl py-2 font-bold'>{card.price}</p>

                                        {/* Checkout Options */}
                                        <p className='text-2'>Cantidad</p>
                                        <div className='counter flex justify-center pt-2'>
                                        <button className='px-2 py-1 font-bold'>-</button>
                                        <input className='w-12 border-LightBlue rounded-md mx-1 text-sm text-center
                                        placeholder-gray-600 focus:outline-LightBlue focus:border-LightBlue focus:ring-1 
                                        focus:ring-LightBlue ' type="text" placeholder='0' />
                                        <button className='px-2 py-1 font-bold'>+</button>
                                    </div>
                                        <button className='px-4 py-2 mt-3'>Agregar al Carrito</button>
                                        <button className='px-12 py-2 mt-3 bg-green-500 hover:bg-green-300'>Comprar</button>
                              </div>
                        </div> 

                    ))}
                  </div>

                </div>
      </div>
     
  )
}

export default CardGrid