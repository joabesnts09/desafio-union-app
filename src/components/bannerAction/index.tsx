'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import curvedRender from '../../../public/imgs/curved_render.svg'

export const BannerAction = () => {
  const [isBlinking, setIsBlinking] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 100)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section
        className={`w-full flex justify-center items-center mt-14 md:mt-[15.5rem] px-4 bg-cover bg-no-repeat bg-[url('/imgs/bgActionMobile.png')] lg-plus:h-[695px] lg-plus:bg-[url('/imgs/bgActionDesktop.png')] lg-plus:mt-0`}
      >
        <div className='w-full flex items-center justify-center mt-[1.3rem] px-4 pt-[85px] pb-[50px] lg-plus:mt-[9.75rem]'>
          <div className='w-full flex items-center justify-center flex-col pb-[40px] bg-[#1F1D2B] rounded-[10px] shadow-[rgba(0,_0,_0,_0.25)_0px_4px_10px_0px] md:max-w-[415px] lg-plus:w-[1224px] lg-plus:max-w-[1224px] lg-plus:h-[321px] lg-plus:flex-row'>
            <div className='w-full max-w-[290px] relative top-[-40px] animate-move-up-down lg-plus:max-w-[520px] lg-plus:top-0'>
              <Image
                className='w-full lg-plus:max-w-[520px] transform scale-x-[-1] lg:w-[400px] lg-plus:w-[511px] max-lg-plus:w-[511px]'
                src={curvedRender}
                alt='Curved Render'
              />
            </div>

            <div className='flex flex-col items-center px-2 w-full max-w-[290px] lg-plus:py-10 lg-plus:pl-6 lg-plus:pr-8 lg-plus:w-[713px] lg-plus:max-w-[713px]'>
              <h2 className='text-2xl text-gray-200 font-bold text-center leading-[1.7] sm-min:text-[28px] lg-plus:leading-[1.2] lg-plus:text-[32px]'>
                Vivencia na prática, ambiente imersivo, desafios e muito mais!
              </h2>

              <h3
                className={`text-2xl text-[#EB5757] font-bold text-center my-[2.4rem] leading-[1.1] sm-min:text-[28px] lg-plus:my-8
                  ${isBlinking ? 'opacity-0' : 'opacity-100'}`}
              >
                Inscreva-se já! Vagas limitadas
              </h3>

              <a href='h-[47px] w-full lg-plus:h-[69px] lg-plus:w-[422px]'>
                <Button
                  className='max-w-[300px] lg-plus:max-w-[422px] lg-plus:w-[422px] lg-plus:h-[69px]'
                  text='Inscreva-se agora'
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
