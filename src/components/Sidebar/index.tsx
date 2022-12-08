import React from 'react';

import { TiHome } from 'react-icons/ti';
import { BsSearch } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';

import Avatar from '../Avatar';

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between bg-[#0b0b0b] pt-[5rem] px-[2rem]">
      <div>
        <div className='hidden lg:block'>
          <h1 className="text-[2rem] font-bold text-white mb-[3rem] ml-[1rem]">
            <span className="text-primary-100">Face</span>Smash
          </h1>
        </div>

        <div className='block lg:hidden'>
          <h1 className="text-6xl text-center font-bold text-white mb-[3rem]">
            <span className="text-primary-100">F</span>
          </h1>
        </div>

        <ul className="space-y-12 text-xl">
          {/* VscHome */}
          <li className="nav-item">
            <TiHome className="text-3xl text-center" /> <span className='hidden lg:block'>Home</span>
          </li>
          <li className="nav-item">
            <BsSearch className="text-3xl" /> <span className='hidden lg:block'>Search</span>
          </li>
          <li className="nav-item">
            <Avatar
              url={
                'https://lh3.googleusercontent.com/ogw/AOh-ky2wAgtbl4h_XUEs5x-5xfgBLXa_Aq0k6ahwaOxCgw=s32-c-mo'
              }
            />{' '}
            <span className='hidden lg:block'>Profile</span>
          </li>
        </ul>
      </div>
      <div className="group">
        <ul>
          <li className="nav-item">
            <RxHamburgerMenu className="text-3xl group-hover:scale-110 transition-transform ease-in-out duration-300" />{' '}
            <span>More</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
