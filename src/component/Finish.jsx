import React from 'react'
import finishIcon from '../assets/icons8-done.svg'

const Finish = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col items-center'>
        <img src={finishIcon} alt="" className='w-full max-w-[200px]'/>
        <h2 className='text-center font-bold text-3xl text-green-600 flex items-center'>Congradulations! &#127881;</h2>
      <p className='text-base leading-6 text-center text-gray-600 mb-6'>Your appliction submited We let you know if your application will accept &#128515;</p>
      <a href="/">
      <button className='py-3 px-6 rounded-full bg-green-600 text-white hover:bg-green-400 font-medium'>Done</button>
        </a> 
      
      </div>
    </div>
  )
}

export default Finish
