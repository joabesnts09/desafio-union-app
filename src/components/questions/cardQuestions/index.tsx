'use client'
import plusIcon from '../../../../public/icons/plus-icon.svg'
import lessIcon from '../../../../public/icons/less-icon.svg'
import { ReactNode, useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

interface ICardQuestionsProps {
  title: string
  text?: string
  children?: ReactNode
}
export const CardQuestions = ({
  title,
  text,
  children,
}: ICardQuestionsProps) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div className='w-full flex flex-col'>
      <div
        className={`w-full flex justify-between items-center flex-nowrap bg-gradient-to-r from-[#831E88] to-[#3C34C7] px-4 py-[20px]
          ${isActive ? 'rounded-t-[10px]' : 'rounded-[10px]'}
        `}
      >
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 50, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className='w-[270px] md:w-full md:max-w-[730px]'
        >
          <h3 className='text-lg text-gray-200 font-bold md:text-[28px]'>
            {title}
          </h3>
        </motion.div>
        <button
          onClick={handleClick}
          className='bg-transparent text-white p-2 focus:outline-none'
        >
          <Image
            className='w-[30px] h-[30px] md:w-[40px] md:h-[40px]'
            src={isActive ? lessIcon : plusIcon}
            alt='Button icon'
          />
        </button>
      </div>

      {isActive && (
        <div className='w-full flex bg-white rounded-b-[10px] md:text-2xl'>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={`${inter} w-full flex flex-col mx-4 my-[20px] text-[#282828] text-base`}
          >
            <p className=''>{text}</p>
            {children}
          </motion.div>
        </div>
      )}
    </div>
  )
}
