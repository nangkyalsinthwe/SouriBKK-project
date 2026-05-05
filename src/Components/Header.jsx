import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import login from '../assets/login.png'
import cart from '../assets/cart.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeStyles = {
    color: "#F199B9",
    textDecoration: "underline",
    textUnderlineOffset: "8px"
  }

  return (
    <header className='bg-[#ffe576] sticky top-0 z-100'>
      <div className='flex items-center justify-between px-6 md:px-10 h-24 md:h-32'>

        <Link to="/" className='font-souri text-[3rem] md:text-[5rem] text-[#F199B9] leading-none'>
          SOURI
        </Link>

        <nav className='hidden md:flex items-center gap-10'>
          <NavLink to="/aboutus" style={({ isActive }) => isActive ? activeStyles : null} className="font-black text-2xl uppercase italic hover:text-[#F199B9] transition">
            About Us
          </NavLink>
          <NavLink to="/products" style={({ isActive }) => isActive ? activeStyles : null} className="font-black text-2xl uppercase italic hover:text-[#F199B9] transition">
            Products
          </NavLink>
          <Link to="/profile">
            <img src={login} className="w-12 h-12 object-contain" alt="profile" />
          </Link>
          <Link to="/carts">
            <img src={cart} className="w-12 h-12 object-contain" alt="cart" />
          </Link>
        </nav>

        <button className='md:hidden text-[#F199B9] focus:outline-none' onClick={() => setIsOpen(true)}>
          <Menu size={40} strokeWidth={3} />
        </button>
      </div>

      {isOpen && (
        <div
          className='fixed inset-0 bg-black/50 backdrop-blur-sm z-150 transition-opacity'
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`
        fixed top-0 right-0 h-full w-72 bg-[#ffe576] z-200 shadow-2xl p-8 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <button className='absolute top-6 right-6 text-[#F199B9]' onClick={() => setIsOpen(false)}>
          <X size={40} strokeWidth={3} />
        </button>

        <nav className='flex flex-col gap-10 mt-20'>
          <NavLink
            to="/aboutus"
            onClick={() => setIsOpen(false)}
            className="font-black text-3xl uppercase italic border-b-2 border-amber-500 pb-2"
          >
            About Us
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => setIsOpen(false)}
            className="font-black text-3xl uppercase italic border-b-2 border-amber-500 pb-2"
          >
            Products
          </NavLink>

          <div className='flex gap-10 mt-6 pt-6'>
            <Link to="/profile" onClick={() => setIsOpen(false)}>
              <img src={login} className="w-14" alt="profile" />
            </Link>
            <Link to="/carts" onClick={() => setIsOpen(false)}>
              <img src={cart} className="w-14" alt="cart" />
            </Link>
          </div>
        </nav>

        <div className='absolute bottom-10 left-8  font-souri text-2xl text-[#F199B9]/50'>
          SOURI BKK
        </div>
      </div>
    </header>
  )
}

export default Header