import { NavLink } from 'react-router-dom';
import Plamb from '../../assets/carefinderlogo.svg';
import { useRef, useState } from 'react';
// import {} from '@heroicons/react'

const LandingNavBar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <div className='sm:flex sm:items-center sm:justify-between px-10'>
      {/* Logo Here */}
      <div className='flex justify-between items-center'>
        <a href='#' className='flex items-center space-x-2'>
          <img src={Plamb} width={70} />
          <span className='font-extrabold text-xl text-primary'>Carefinder'nFly</span>
        </a>
        <span className='sm:hidden block mx-2 cursor-pointer' onClick={toggleMenu}>
          {open ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
            </svg>
          )}
        </span>
      </div>

      {/* Nav BAr Here */}

      <nav
        className={`flex flex-col items-start sm:flex-row z-[1] sm:z-auto sm:static absolute bg-white w-full left-0 sm:w-auto sm:py-0 py-4 sm:pl-0 pl-7 sm:opacity-100 ${
          open ? 'opacity-100 top-[80px]' : 'opacity-0 top-[-400px]'
        } transition-all ease-in duration-500`}
        ref={navRef}
      >
        <NavLink to='/' className='px-4 py-2 text-slate-500 font-bold '>
          Home
        </NavLink>
        <NavLink to='#' className='px-4  py-2 text-slate-500 font-bold '>
          Featured
        </NavLink>
        <NavLink to='#' className='px-4  py-2 text-slate-500 font-bold '>
          About
        </NavLink>
        <NavLink to='/add-a-hospital' className='px-4  py-2 text-slate-500 font-bold '>
          Add a Hospital
        </NavLink>
        <NavLink to='/admin' className='px-4 text-slate-500 font-bold bg-primary py-2 rounded-md text-white '>
          Login
        </NavLink>
      </nav>
    </div>
  );
};

export default LandingNavBar;
