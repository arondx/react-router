import React from 'react'
import { NavLink } from 'react-router-dom'
import { IconClose } from './IconClose'
import { IconHome } from './IconHome'
import { IconAbout } from './IconAbout'

export const SideNavbar = (props) => {
    const { showSideNavbar, setShowSideNavbar } = props;
    const handleHideSideNavbar = () => {
        setShowSideNavbar(false);
    }
    const showSideNavbarClass = showSideNavbar ? ' flex' : ' hidden';

  return (
    <div className={`${showSideNavbarClass} inset-0 absolute`}>
        <div className=' basis-2/4 bg-sky-50'>
            <div onClick={handleHideSideNavbar}>
                <a className='flex h-14 px-4 py-4 gap-2 bg-sky-600 text-sky-50 hover:bg-sky-900'>
                    <IconClose />
                    <span>Close Menu</span>
                </a>
                <NavLink to='/' className='flex px-4 py-2 gap-2 hover:bg-sky-300 hover:text-sky-50'>
                    <IconHome />
                    <span>Home</span>
                </NavLink>
                <NavLink to='/about' className='flex px-4 py-2 gap-2 hover:bg-sky-300 hover:text-sky-50'>
                    <IconAbout />
                    <span>About</span>
                </NavLink>
            </div>
        </div>
        <div className=' basis-2/4 bg-zinc-400 opacity-50 cursor-pointer'
        onClick={handleHideSideNavbar}>
        Overlay
        </div>
    </div>
  )
}
