import React from 'react'
import  {logo} from "../assets";
import { navLinks } from '../constant/index';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className='fixed z-10 flex justify-between px-10 py-4 overflow-x-hidden bg-transparent'>
        <Link to="/" className='flex'> {/* Wrap the image with Link to root */}
            <img src={logo} className='w-28 bg-transparent'/>
        </Link>
        <div className='hidden items-center lg:flex gap-x-6 font-medium ml-40'>
            {navLinks.map(({ id, title }) => (
              <Link to={`/${id}`} key={id} className='cursor-pointer rounded-md py-[6px] px-2 font-mediun hover:bg-gray-200'>{title}</Link> 
            ))}
        </div>

        <div className='flex gap-x-4 font-medium px-12 py-4'>
          <p className="cursor-pointer rounded-md py-[6px] px-2 font-mediun hover:bg-gray-200 ">Shop</p>
          <p className="cursor-pointer rounded-md py-[6px] px-2 font-mediun hover:bg-gray-200">Account</p>
          <p className="cursor-pointer rounded-md py-[6px] px-2 font-mediun hover:bg-gray-200">Menu</p>
        </div>
    </header>
  )
}