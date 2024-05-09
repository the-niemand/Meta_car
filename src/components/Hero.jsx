import React from 'react'
import { useState, useEffect } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { IoChatbubbleEllipses } from "react-icons/io5";
import { MdOutlineDoubleArrow } from 'react-icons/md'
import HeroCar from '../assets/HeroImages/heroCar.png'
import { useNavigate } from 'react-router-dom';



function Hero() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const NavToModels = () => {
    navigate("/Models")
  }

  return (
    <div className='flex relative px-[67px]'>

      <div className='w-[480px] flex flex-col gap-5 relative z-[5] max-lg:text-center max-lg:mx-auto md-lg:w-3/4'>
        <h1 className='font-[600] text-[22px]'>Plan your trip now</h1>
        <h1 className='font-[700] text-[56px] leading-[70px] max-lg:text-[37px] max-lg:leading-[45px] mt-4'>Save <span className='text-accent'>big</span> with our car rental</h1>
        <p className='font-[400] text-[16px] text-[#706f7b] mt-2'>Experience your dream car rental with unbeatable prices, unlimited mileage, flexible pick-up choices, and additional benefits.</p>
        <div className='flex max-sm:flex-col md-lg:w-3/4 gap-6 max-lg:mx-auto'>
          <a href="https://metacar-chat.onrender.com/" target='_blank'>
            <button className='px-[48px] flex justify-center py-4 gap-2 items-center bg-accent text-white text-[18px] rounded-md font-[700]'>Chat Now<IoChatbubbleEllipses /> </button></a>
          <button className='px-[48px] flex justify-center py-4 gap-2 items-center bg-black text-white text-[18px] rounded-md font-[700]' onClick={NavToModels}>Check Models <MdOutlineDoubleArrow /> </button>
        </div>
      </div>

      <img src={HeroCar} className='absolute w-[63%] right-0 -top-5 z-[3] max-lg:hidden' alt="" />


    </div>
  )
}

export default Hero
