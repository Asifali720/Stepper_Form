import clsx from 'clsx'
import React from 'react'

const SteeperControl = ({handleOnClick, step, currentStep}) => {
  console.log(step);
  return (
    <div className='flex items-center justify-between px-6 py-4'>
      <button onClick={()=>handleOnClick()} className={clsx('py-3 px-6 rounded-full bg-green-600  text-white font-medium', currentStep === 1 ?'opacity-50 cursor-not-allowed':'')}>Back</button>
      <button onClick={()=>handleOnClick('next')} className='py-3 px-6 rounded-full bg-green-600 text-white font-medium'>{currentStep === step.length -1 ? 'confirm':'next'}</button>
    </div>
  )
}

export default SteeperControl
