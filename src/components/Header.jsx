import React from 'react'
import logo from '../assets/Frame 1.png'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {


  const [open, setOpen] = useState(false)

  const navs = ["Home", "About", "Models", "Testimonials", "Our Team", "Contact"]
  return (
    <nav className='h-[100px] w-max-full justify-between gap-4 z-10 pt-[13px] px-[67px] max-sm:px-[30px] flex items-center relative z-3' >
      <img src={logo} className='h-[51px] max-sm:h-[34px] md-lg:h-[40px]' alt="" />

      {/* md:flex md:items-center md:pb-0 pb-12 absolute md:static md:justify-between bg-white md:z-auto z-[-1] left-0 w-full md:w-full md:pl-0 pl-9  ${open ? 'top-[100px] ':'top-[-500px]'}` */}
      <div className={`max-lg:flex-col max-lg:top-[100px] max-lg:bg-white max-lg:shadow-lg ${open ? 'max-lg:left-[0px]' : 'max-lg:left-[-100vw]'} max-lg:pb-7 max-lg:absolute max-lg:z-[-1] transition-left duration-[700ms] ease-in flex w-full`}>
        <ul className='flex font-[500]  max-lg:text-center w-7/12 justify-between mx-auto max-lg:mx-auto max-lg:flex-col max-sm:w-11/12' >

          {
            navs.map((nav) => {
              return (
                <NavLink onClick={() => { setOpen(false) }} to={nav === "Home" ? "" : `/${nav}`} style={({ isActive }) => isActive ? { color: "#FF4D30" } : null} className='cursor-pointer delay-[200ms] transition-colors ease hover:text-accent py-5 '>{nav}</NavLink>
              )
            })
          }
        </ul>

        <a href='https://metacar-chat.onrender.com/' target="_blank" className='flex  items-center justify-center gap-2 bg-accent text-white max-lg:w-9/12 px-[32px] py-[8px] rounded-md max-lg:py-5 cursor pointer'>
          <button>Chat now</button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>

        </a>


      </div>

      {open ? <FaXmark onClick={() => {
        setOpen(!open)
      }} className='lg:hidden cursor-pointer text-[27px]' /> : <FaBars onClick={() => {
        setOpen(!open)
      }} className='lg:hidden cursor-pointer text-[27px]' />}

    </nav>
  )
}

export default Header
