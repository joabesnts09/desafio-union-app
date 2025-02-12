'use client'
import { motion } from 'framer-motion'

export interface ICardPilar {
  title: string
  description: string
}

export const CardPilar = ({ title, description }: ICardPilar) => {
  return (
    <>
      <motion.div
        className='w-full max-w-[341px] lg:min-w-[397px] lg:max-w-[397px] lg-plus:max-w-[635.2px] bg-gradient-to-r from-[#7D208E] to-[#0A45F6] rounded-[10px] group hover:shadow-[0px_8px_20px_15px_#7D208E] text-gray-300 hover:text-black'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <header className='w-full  flex items-center justify-center py-5 px-14 rounded-t-[10px] lg:py-10 lg:px-[92px] group-hover:bg-white  transition-all'>
          <h3 className='text-2xl font-bold lg:text-[32px]'>{title}</h3>
        </header>

        <div className='w-full h-max p-4 bg-gradient-to-b from-[#21203C] to-[#261E37] rounded-b-[10px]'>
          <p className='text-base text-gray-200 text-center lg:text-lg'>
            {description}
          </p>
        </div>
      </motion.div>
    </>
  )
}
