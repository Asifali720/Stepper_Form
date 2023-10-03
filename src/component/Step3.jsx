import React from 'react'
import { useContext } from 'react'
import { StapperContext } from '../Contexts/StepperContext'

const Step3 = () => {
  const {userData , setUserData} = useContext(StapperContext)

  const handleChange = (e)=>{
    const {name , value} = e.target;
    setUserData({...userData, [name]: value})
  }
  return (
    <div className='px-10'>
    <h2 className='text-center font-bold text-3xl text-green-600'>Your Educational Details</h2>
    <p className='text-base leading-6 text-center text-gray-600 mb-6'>please put about your information!</p>
    <p className='text-base leading-6 text-black mb-2'>Institude Name</p>
    <input type="text" name="" id="" onChange={handleChange} className='w-full rounded-md p-4 placeholder:text-gray-400 text-green-600 outline-none focus:outline-green-600 mb-6' placeholder='Institude Name'/>
    <div className='w-full flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-6'>
      <div>
      <p className='text-base leading-6 text-black mb-2'>Started Date</p>
    <input type="date" name="" id="" onChange={handleChange} className='w-full rounded-md p-4 placeholder:text-gray-400 text-green-600 outline-none focus:outline-green-600' placeholder='date'/>
      </div>
      <div>
      <p className='text-base leading-6 text-black mb-2'>End Date</p>
    <input type="date" name="" id="" onChange={handleChange} className='w-full rounded-md p-4 placeholder:text-gray-400 text-green-600 outline-none focus:outline-green-600' placeholder='date'/>
      </div>
    </div>
    <div className='w-full flex items-center gap-6'>
     <select className='w-full rounded-md p-4 bg-white placeholder:text-gray-400 text-green-600 outline-none focus:outline-green-600 mb-6'>
      <option value="">Degree</option>
      <option value="Matriculation">Matriculation</option>
      <option value="Intermediate">Intermediate</option>
      <option value="Graduation">Graduation</option>
      <option value="Master">Master</option>
     </select>
     <select className='w-full rounded-md p-4  bg-white placeholder:text-gray-400 text-green-600 outline-none focus:outline-green-600 mb-6'>
      <option value="">Status</option>
      <option value="Pass">Pass</option>
      <option value="waiting Result">waiting Result</option>
      <option value="Going on">Going on</option>
     </select>
    </div>
  </div>
  )
}

export default Step3
