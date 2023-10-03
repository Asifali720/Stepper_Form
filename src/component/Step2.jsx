import React from 'react'
import { useContext } from 'react'
import { StapperContext } from '../Contexts/StepperContext'

const Step2 = () => {
  const {userData , setUserData} = useContext(StapperContext)

  const handleChange = (e)=>{
    const {name , value} = e.target;
    setUserData({...userData, [name]: value})
  }
  return (
    <div className='px-10'>
      <h2 className='text-center font-bold text-3xl text-green-600'>Your Previous Job Experience</h2>
      <p className='text-base leading-6 text-center text-gray-600 mb-6'>please put about your information!</p>
      <p className='text-base leading-6 text-black mb-2'>Company Name</p>
      <input type="text" name="" id="" onChange={handleChange} className='w-full rounded-md p-4 placeholder:text-gray-400 text-green-600 outline-none focus:outline-green-600 mb-6' placeholder='company name'/>
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
        <option value="">Current Salary</option>
        <option value="15k">15k</option>
        <option value="30k">30k</option>
        <option value="50k">50k</option>
        <option value="75k">75k</option>
       </select>
       <select className='w-full rounded-md p-4  bg-white placeholder:text-gray-400 text-green-600 outline-none focus:outline-green-600 mb-6'>
        <option value="">Current Salary</option>
        <option value="15k">15k</option>
        <option value="30k">30k</option>
        <option value="50k">50k</option>
        <option value="75k">75k</option>
       </select>
      </div>
      <p className='text-base leading-6 text-black mb-2'>Reason of leave</p>
      <textarea name="" id="" cols="30" rows="10" className='w-full resize-none rounded-md p-4 placeholder:text-gray-400 text-green-600 outline-none focus:outline-green-600 mb-6' placeholder='message...!'></textarea>
    </div>
  )
}

export default Step2
