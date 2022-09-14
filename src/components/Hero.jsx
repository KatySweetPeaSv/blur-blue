import React from 'react'
import AnimeGirl from '../assets/anime-girl-2.png';

const Hero = () => {
  return (
    
    <div className='w-full h-screen flex flex-col justify-between'>
      <div>

        <div className='grid md:grid-cols-2 max-w-[1240px] items-center m-auto'>
              
                  <div className='border-GrayishBlack p-8  border-2 justify-center items-center content-center'>
                    <div className='flex flex-col justify-center items-center w-full bg-GrayishBlack text-white border-white h-[25rem] p-5'>
                        <h1 className='text-center text-3xl uppercase font-bold text-Reddish'>
                          Las figuras más <span className='italic'>SUGOI</span></h1>
                        <p className='text-center pt-14 '>Figuras exclusivas, entregas rápidas en todo el país, <br /> free shipping, las mejores
                        franquicias. <br /> TODO en un solo lugar.</p>
                        <div className='flex items-center'>
                          <button className='px-4 py-2 mt-14 text-white bg-GrayishBlack'>Muéstrame</button>
                        </div>
                    </div>
                  </div>
             

                  <img className='pl-10 w-full' src={AnimeGirl} alt="ilustración chica anime" />

        </div>
      </div>

    </div>
  )
}

export default Hero