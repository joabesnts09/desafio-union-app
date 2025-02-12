'use client'
import { Button } from '../ui/button'
import curvedRender from '../../../public/imgs/curved_render.svg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
export const PresentationUnion = () => {
  return (
    <>
      <section
        className={`w-full pt-20 pb-3 px-4 bg-[url('/imgs/hero_mobile_1.jpg')] bg-cover  bg-top md:bg-[url('/imgs/hero-desktop-v2.jpg')] lg:gap-[1.4rem]`}
      >
        <div className='w-full flex lg:items-center lg:justify-center'>
          <div
            className={`flex flex-col gap-4 mb-6 lg:w-[754px] lg:pb-[32px] lg:pt-[199px] lg-plus:pb-[130px] `}
          >
            <div>
              <motion.h1
                className='w-full max-w-[383px] text-white text-xl font-bold md:text-[42px] md:w-[550px] md:max-w-[550px] md:leading-relaxed'
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                Ganhe{' '}
                <span className='bg-gradient-to-r from-[#7D208E] to-[#0A45F6] bg-clip-text text-transparent'>
                  experiência
                </span>{' '}
                como desenvolvedor júnior
              </motion.h1>
            </div>

            <motion.p
              className='w-full max-w-[321px] text-base text-gray-200 leading-[1.5] md:text-2xl md:max-w-[650px] lg-w-full md:tracking-tight md:leading-[2.3rem]'
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              Descubra como o Union oferece um ambiente prático e imersivo para
              desenvolvedores juniors ganharem experiência de mercado, mesmo sem
              estar em uma empresa. Participe dessa experiência única e
              impulsione sua carreira como desenvolvedor!
            </motion.p>
            <motion.div
              className='w-full max-w-[343px] sm-min:w-[343px] h-[69px] mt-4 p-0 lg:w-[404px]'
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <Link href='#register'>
                <Button className='text-[22px]' text='Quero participar' />
              </Link>
            </motion.div>
          </div>

          <div className='hidden lg:flex animate-move-up-down'>
            <Image
              className='max-w-[520px] lg:w-[400px]'
              src={curvedRender}
              alt='Curved Render'
            />
          </div>
        </div>
      </section>
    </>
  )
}
