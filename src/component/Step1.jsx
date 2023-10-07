import React from 'react'
import { useContext } from 'react'
import { StapperContext } from '../Contexts/StepperContext'

const Step1 = () => {
  const {userData , setUserData} = useContext(StapperContext)

  const handleChange = (e)=>{
    const {name , value} = e.target;
    setUserData({...userData, [name]: value})
  }
  return (
    <div className='px-10'>
      <h2 className='text-center font-bold text-3xl text-green-600'>Your Details</h2>
      <p className='text-base leading-6 text-center text-gray-600 mb-6'>please put about your information!</p>
      <p className='text-base leading-6 text-black mb-2'>Name</p>
      <input type="text" name="name" id="" onChange={handleChange} value={userData['name'] || ''} className='w-full rounded-md p-4 placeholder:text-gray-400 text-green-600 outline-none focus:outline-green-600 mb-6' placeholder='username' required/>
      <div className='w-full flex flex-col lg:flex-row items-start lg:items-center gap-6'>
        <div>
        <p className='text-base leading-6 text-black mb-2'>Email</p>
      <input type="email" name="email" id="" value={userData['email'] || ''} onChange={handleChange} className='w-full rounded-md p-4 placeholder:text-gray-400 text-green-600 outline-none focus:outline-green-600' placeholder='email' required/>
        </div>
        <div>
        <p className='text-base leading-6 text-black mb-2'>Resume</p>
      <input type="file" name="file" id="" value={userData['file' || '']}  onChange={handleChange} className='w-full rounded-md p-4 placeholder:text-gray-400 text-green-600 outline-none focus:outline-green-600' placeholder='email' required/>
        </div>
        <div>
        <p className='text-base leading-6 text-black mb-2'>Phone Number</p>
      <input type="tel" name="tel" id="" value={userData['tel'] || ''} onChange={handleChange} className='w-full rounded-md p-4 placeholder:text-gray-400 text-green-600 outline-none focus:outline-green-600' placeholder='number' required/>
        </div>
      </div>
      <p className='text-base leading-6 text-black mb-2'>Address</p>
      <input type="text" name="text" id="" value={userData['text'] || ''} onChange={handleChange} className='w-full rounded-md p-4 placeholder:text-gray-400 text-green-600 outline-none focus:outline-green-600 mb-6' placeholder='Address' required/>
      <p className='text-base leading-6 text-black mb-2'>Message (optional)</p>
      <textarea name="message" onChange={handleChange} id="" cols="30" rows="10" className='w-full resize-none rounded-md p-4 placeholder:text-gray-400 text-green-600 outline-none focus:outline-green-600 mb-6' placeholder='message...!' value={userData['message'] || ''}></textarea>
    </div>
  )
}

export default Step1
