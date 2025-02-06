import { Button } from '../ui/button'
import curvedRender from '../../../public/imgs/curved_render.svg'
import Image from 'next/image'
export const PresentationUnion = () => {
  return (
    <>
      <div
        className={`w-full pt-14 pb-3 px-4 bg-[url('/imgs/hero_mobile_1.jpg')] bg-cover  bg-top md:bg-[url('/imgs/hero-desktop-v2.jpg')] lg:gap-[1.4rem]`}
      >
        <div className='w-full flex lg:items-center lg:justify-center'>
          <div className={`flex flex-col gap-4 mb-6 lg:w-[754px] lg:pb-[32px] lg:pt-[199px] lg-plus:pb-[130px] `}>
            <div>
              <h1 className='w-[383px] text-white text-xl font-bold md:text-[42px] md:w-[550px] md:leading-relaxed'>
                Ganhe{' '}
                <span className='bg-gradient-to-r from-[#7D208E] to-[#0A45F6] bg-clip-text text-transparent'>
                  experiência
                </span>{' '}
                como desenvolvedor júnior
              </h1>
            </div>

            <p className='w-[321px] text-base text-gray-200 leading-[1.5] md:text-2xl md:w-[650px] lg-w-full md:tracking-tight md:leading-[2.3rem]'>
              Descubra como o Union oferece um ambiente prático e imersivo para
              desenvolvedores juniors ganharem experiência de mercado, mesmo sem
              estar em uma empresa. Participe dessa experiência única e
              impulsione sua carreira como desenvolvedor!
            </p>

            <a className='w-[343px] h-[69px] mt-4 p-0 lg:w-[404px]' href='#'>
              <Button className='text-[22px]' text='Quero participar' />
            </a>
          </div>

          <div className='hidden lg:flex animate-move-up-down'>
            <Image className='max-w-[520px]' src={curvedRender} alt='Curved Render' />
          </div>
        </div>
      </div>
    </>
  )
}
