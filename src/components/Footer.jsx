import React from 'react';
import ItContain from './ItContain';
import Social from './Social';

const Footer =() =>{
	return <footer className="bg-[#1e40af] text-white">
		<div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#3b82f6] py-7 '></div>
		<h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'><span className='text-cyan-400'>Las Figuras</span>Más Amadas Por Todos</h1>
		<div><input type="text" placeholder="Coloque su e-mail" className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none'></input>
		<button className='bg-cyan-300 hover:bg-cyan-800 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full'>Enviar info</button>
		</div>
		<ItContain />
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center text-cyan-700 text-sm pb-8'>
			<span>Ⓒ 2022 Mitzu No KoKyú by Kodigo. Todos los Derechos Reservados.</span>
			<span>Términos - Políticas</span>
			<Social/>
		</div>
		
	</footer>
}
