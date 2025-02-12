'use client'

import Image from 'next/image'
import logoUnion from '../../../public/imgs/logo-union-developers.svg'
import { useEffect, useState } from 'react'
import { NavItem } from './navItem'
import { Button } from '../ui/button'
import Link from 'next/link'

export const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('')
  const [scrolled, setScrolled] = useState(false)

  const menuItems = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Pilares', href: '#pilares' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Etapas', href: '#etapas' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Dúvidas', href: '#duvidas' },
  ]
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0) 

      for (const item of menuItems) {
        const section = document.querySelector(item.href)
        if (section) {
          const { top, height } = section.getBoundingClientRect()
          if (top <= 100 && top + height > 100) {
            setActiveItem(item.name)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <>
      <header className={`fixed z-[999] w-full bg-[#121119] text-white py-4 px-3 lg:p-0 ${scrolled ? 'shadow-md' : ''}`}>
        <div className='w-full flex items-center justify-between lg:justify-around lg:my-0 lg:py-[22px] lg:w-full'>
          <Link href='#'>
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
          </Link>

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
            className={`z-50 absolute top-full left-0 w-full bg-[#121119] text-white flex flex-col items-start pt-[40px] pl-[20px] pb-[20px] lg:items-center lg:p-0 lg:w-max
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
                  link={item.href}
                />
              ))}
            </ul>

            <Link href='#register' className='mt-4 mb-4 w-[190px] h-[59px] lg:w-[167px] lg-plus:w-[300px] lg:mt-0 lg:hidden'>
              <Button className='text-lg tracking-wider' onClick={() => setMenuOpen(false)} text='Junte-se a nós'/>
            </Link>
          </nav>
          <Link href='#register' className='mt-4 hidden lg:mt-0 w-[180px] h-[59px] lg:w-[167px] lg-plus:w-[300px] lg:flex'>
            <Button text='Junte-se a nós'/>
          </Link>
        </div>
      </header>
    </>
  )
}
