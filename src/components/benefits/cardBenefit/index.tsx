'use client'
import { motion } from 'framer-motion'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

interface ICardBenefitsProps {
  title: string
  description: string
  imgUrl: string
  isReversed: boolean
}

export const CardBenefits = ({
  title,
  description,
  imgUrl,
  isReversed,
}: ICardBenefitsProps) => {
  return (
    <>
      <motion.div
        className={`w-full sm-min:w-[375px] flex flex-col items-center md:w-full md:gap-[5.8rem] md:items-start ${
          isReversed ? 'md:flex-row-reverse' : 'md:flex-row justify-start'
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className={`flex w-max`}>
          <Image
            className='w-[80px] md:w-[180px] lg:w-[260px] max-w-[160px]'
            src={imgUrl}
            alt={title}
            width={260}
            height={260}
          />
        </div>

        <div
          className={`w-[290px] flex flex-col mt-6 md:w-full md:gap-[2.8rem] md:justify-start md:max-w-[660px] 
    ${isReversed ? 'md:items-end md:justify-start' : 'md:items-start'}
    `}
        >
          <div className='flex justify-center'>
            <h3
              className={`text-center text-lg text-wrap text-white font-[700] md:text-[32px]
        ${isReversed ? 'md:text-end' : 'md:text-start'}
        `}
            >
              {title}
            </h3>
          </div>
          <p
            className={`${
              inter.className
            } leading-[150%] text-center text-wrap text-base text-[#D7D7D7] mt-3 md:text-2xl md:mt-0 md:max-w-[700px] ${
              isReversed ? 'md:text-end' : 'md:text-start'
            }`}
          >
            {description}
          </p>
        </div>
      </motion.div>
    </>
  )
}
