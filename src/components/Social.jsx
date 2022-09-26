import React from 'react'
import {Logos} from './Things';


export const Social = ({Logos}) => {
  return (
	<div className='text-cyan-300'>
		{Logos.map(Logo=>(
			<span key={Logo.name} className='p-2 cursor-pointer inline-flex items-center rounded-full bg-cyan-600 mx-1.5 text-xl hover:text-cyan-500 hover:bg-blue-600 duration-300'>
				<ion-icon name={Logo.name}/>
			</span>
		))}
	</div>
  )
}
