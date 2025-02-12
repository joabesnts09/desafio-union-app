'use client'
import { motion } from 'framer-motion'
import { Inter } from 'next/font/google'

interface ICardStepProps {
  num: string
  title: string
  description: string
  isReversed: boolean
  index: number
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const CardStep = ({
  num,
  title,
  description,
  isReversed,
  index,
}: ICardStepProps) => {
  return (
    <>
      <li
        className={`relative lg-plus:flex lg-plus:items-start
          ${
            isReversed
              ? 'top-auto left-[15%] flex-row-reverse lg-plus:left-0'
              : 'justify-start'
          }
        `}
      >
        <div
          className={`relative w-[205px] h-[196px] bg-[#1F1D2B] flex items-center justify-end py-6 pl-8 pr-4 border-t-[4px] border-transparent rounded-lg bg-clip-padding lg-plus:py-10 lg-plus:pl-[72px] lg-plus:pr-8 lg-plus:w-[441px] lg-plus:h-[243px] ${
            inter.className
          }
          ${isReversed ? 'lg-plus:rounded-tl-none' : 'lg-plus:rounded-tr-none'}
            
          `}
          style={{
            backgroundImage:
              'linear-gradient(#121119, #121119), linear-gradient(135deg, #7D208E, #0A45F6)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
            boxShadow: `0px 6px 34px -6px ${
              isReversed ? '#0A45F6' : '#7D208E'
            }`,
          }}
        >
          <div className='h-max'>
            <span
              className={`absolute top-[0px] text-[130px] font-bold bg-gradient-to-b from-[#7D208E] to-[#0A45F6] text-transparent bg-clip-text lg-plus:text-[200px] lg-plus:top-[-15px]
              ${
                index === 0
                  ? 'left-[-29px] lg-plus:left-[-50px]'
                  : 'left-[-50px]'
              }
              `}
            >
              {num}
            </span>
          </div>

          <motion.div
            className='flex flex-col justify-center items-center gap-[12.8px] text-center'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h3 className='text-[20px] font-bold text-gray-200 leading-[1] lg-plus:text-2xl'>
              {title}
            </h3>
            <p className='text-base text-gray-200 leading-[1.5] lg-plus:text-[22px]'>
              {description}
            </p>
          </motion.div>
        </div>
        <div
          className={`hidden relative lg-plus:flex  h-[4px] border-t-[4px] border-transparent
            ${isReversed ? 'w-[93px]' : 'w-[90px]'}
            `}
          style={{
            backgroundImage: `linear-gradient(#121119, #121119), linear-gradient(135deg, ${
              isReversed ? '#0A45F6, #7C208F' : '#3338D1, #7D208E'
            } )`,
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
          }}
        ></div>
      </li>
    </>
  )
}
