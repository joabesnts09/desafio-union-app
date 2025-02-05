'use client'

import Image from 'next/image'
import logoUnion from '../../../public/imgs/logo-union-developers.svg'
import { useState } from 'react'
import { NavItem } from './navItem'

export const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('Benefícios') 

  const menuItems = [
    { name: 'Sobre', href: '#' },
    { name: 'Pilares', href: '#' },
    { name: 'Benefícios', href: '#' },
    { name: 'Etapas', href: '#' },
    { name: 'Depoimentos', href: '#' },
    { name: 'Dúvidas', href: '#' },
  ]

  return (
    <>
      <header className='w-full bg-[#121119] text-white py-4 px-3 relative lg:p-0'>
        <div className='w-full flex items-center justify-between lg:justify-around lg:my-0 lg:py-[22px] lg:w-full'>
          <div className='w-[220px] lg:w-[265px] lg:max-w-[265px]'>
            <Image
              className='w-full'
              src={logoUnion}
              alt='Logo Union'
              width={265}
              height={40}
              priority
            />
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='ml-4 relative w-[25px] h-[25px] flex flex-col justify-center items-center z-50 lg:hidden'
          >
            <span
              className={`bg-white h-[2px] w-full absolute transition-all duration-500 ${
                menuOpen
                  ? 'translate-y-[12px] w-[0px] opacity-0'
                  : '-translate-y-[6px] w-full'
              }`}
            ></span>
            <span
              className={`bg-white h-[2px] w-full absolute transition-all duration-200 ${
                menuOpen ? 'rotate-45' : 'translate-y-0'
              }`}
            ></span>
            <span
              className={`bg-white h-[2px] w-full absolute transition-all duration-200 ${
                menuOpen ? '-rotate-45' : 'translate-y-[6px]'
              }`}
            ></span>
          </button>
          <nav
            className={`absolute top-full left-0 w-full bg-[#121119] text-white flex flex-col items-start pt-[40px] pl-[20px] pb-[20px] lg:items-center lg:p-0 lg:w-max
          ${
            menuOpen ? 'block' : 'hidden'
          } lg:static lg:flex lg:flex-row lg:items-center lg:gap-6 lg:pb-0`}
          >
            <ul className='flex w-full gap-1 flex-col lg:flex-row lg:gap-6 lg:w-max lg:items-center relative'>
              {menuItems.map((item, index) => (
                <NavItem
                  key={index}
                  label={item.name}
                  isActive={activeItem === item.name}
                  onClick={setActiveItem}
                />
              ))}
            </ul>

            <div className='mt-4 lg:mt-0 lg:hidden'>
              <button className='w-[180px] h-[59px] lg:w-[167px] lg-plus:w-[300px] bg-blue-500 text-white px-4 py-2 rounded'>
                <p>Junte-se a nós</p>
              </button>
            </div>
          </nav>
          <div className='mt-4 lg:mt-0 hidden lg:flex'>
            <button className='w-[180px] h-[59px] lg:w-[167px] lg-plus:w-[300px] bg-blue-500 text-white px-4 py-2 rounded'>
              <p>Junte-se a nós</p>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
