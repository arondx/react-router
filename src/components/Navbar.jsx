import React from 'react'
import { NavLink } from 'react-router-dom'
import { IconHamburguer } from './IconHamburguer'

export const Navbar = (props) => {

    const { setShowSideNavbar } = props;
    const handleShowSideNavbar = () => {
        setShowSideNavbar(true);
    }

    const activeLink = ' text-lg p-2 bg-sky-600';
    const inactiveLink = ' text-base p-2';

    let currentPath;
    switch (window.location.pathname) {
        case '/':
            currentPath = 'Home';
            break;
        case '/about':
            currentPath = 'About';
            break;
        default:
            currentPath = 'Home';
    }

  return (
    <nav className='flex justify-between sm:max-2xl:justify-between items-center h-14 bg-sky-500 text-sky-50 p-3 font-semibold'>
      
        <button className='sm:max-2xl:hidden' type='button'
          onClick={handleShowSideNavbar}>
          <IconHamburguer />
        </button>

        <span className='sm:max-2xl:hidden p-2'>
          {currentPath}
        </span>
  
        <div className='max-sm:hidden'>
          <NavLink to='/' className={({ isActive }) => isActive ? activeLink : inactiveLink}>Home</NavLink>
          <NavLink to='/about' className={({ isActive }) => isActive ? activeLink : inactiveLink}>About</NavLink>
        </div>
      
        <div>
          <img className=' h-9 w-9 rounded-full' src="/src/assets/profile-picture.svg" alt="" />
        </div>

    </nav>
  )
}
