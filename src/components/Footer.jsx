import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {ImMail3} from 'react-icons/im'

function Footer() {
    
  return (
    <div className='bg-white flex gap-5 max-lg:grid max-md:block px-[67px] max-sm:px-[30px]  md-lg:grid-cols-2 py-10 relative z-[5]'>
      <div className='w-3/12 max-lg:w-full max-lg:text-center flex gap-3 flex-col justify-between'>
        <h1 className='text-xl'> <span className='font-[600]'>CAR</span> Rental</h1>
        <p className='text-[#706f7b] font-[400]'> We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
        <span className='flex gap-4 items-center font-[500] mt-4 max-lg:mx-auto'><BsFillTelephoneFill/> <span className='font-[500]'>+212 601010101</span> </span>         
        <span className='flex gap-4 items-center font-[500] max-lg:mx-auto'><ImMail3/> <span className='font-5600]'>MetaCar@gmail.com</span> </span>
      </div>
      <div className='w-3/12 max-lg:w-full flex flex-col gap-5 max-lg:text-center'>
            <h1 className='text-xl font-[600]'> WORKING HOURS </h1>
            <span>Mon - Fri: 9:00AM - 9:00PM</span>
            <span>Sat: 9:00AM - 19:00PM</span>
            <span>Sun: Still working</span>
      </div>
      <div className='w-full max-lg:w-full flex flex-col gap-5 max-lg:text-center'>
            <h1 className='text-xl font-[600]'> SUBSCRIPTION </h1>
            <p>Subscribe your Email address for latest news & updates.</p>
            <input className='p-[13px] focus:outline-none bg-[#E9E9E9]' type="text" placeholder='Enter Email Address' />
            <button className='bg-accent font-[500] text-[22px] text-white py-[13px]'>Submit</button>
      </div>
    </div>
  )
}

export default Footer
