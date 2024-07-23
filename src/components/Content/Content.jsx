import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet, faTemperatureThreeQuarters, faWind } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Content = (props) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-row mb-1'>
            <p className='text-8xl text-zinc-200 font-semibold'>{props.temp}</p>
            <p className='text-3xl text-zinc-300 font-semibold mt-4'>&deg;c</p>
        </div>
        <div className='flex justify-center'>
            <p className='text-lg text-zinc-400 font-normal tracking-wider first-letter:uppercase'>{props.description}</p>
        </div>

        <div className='flex flex-row justify-evenly items-center w-60 h-20 mx-auto bg-zinc-800 rounded-2xl mt-12'>
            <div className='flex flex-col items-center gap-1'>
                <FontAwesomeIcon icon={faTemperatureThreeQuarters} size='sm' style={{color: "#c42929",}} />
                <p className='text-xs text-zinc-300 font-sans font-bold'>{props.feels}&deg;c</p>
                <p className='text-xs text-zinc-400 font-sans'>Sensação T.</p>
            </div>
            <div className='flex flex-col items-center gap-1'>
                <FontAwesomeIcon icon={faWind} size='sm' style={{color: "#e4e4e7",}} />
                <p className='text-xs text-zinc-300 font-sans font-bold'>{props.wind} km/h</p>
                <p className='text-xs text-zinc-400 font-sans'>Vento</p>
            </div>
            <div className='flex flex-col items-center gap-1'>
                <FontAwesomeIcon icon={faDroplet} size='sm' style={{color: "#386dce",}} />
                <p className='text-xs text-zinc-300 font-sans font-bold'>{props.humidity}%</p>
                <p className='text-xs text-zinc-400 font-sans'>Umidade</p>
            </div>
        </div>
    </div>
  )
}

export default Content