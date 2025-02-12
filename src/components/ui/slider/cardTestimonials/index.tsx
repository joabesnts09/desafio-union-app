import linkedinIcon from '../../../../../public/icons/linkedin-icon.svg'
import githubIcon from '../../../../../public/icons/github-icon.svg'
import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})


interface ICardTestimonialsProps {
  imgUrl: string
  name: string
  description: string
  linkedinUrl: string
  githubUrl: string
  isSuper?: boolean
}

export const CardTestimonials = ({
  imgUrl,
  name,
  description,
  isSuper,
  linkedinUrl,
  githubUrl,
}: ICardTestimonialsProps) => {
  return (
    <>
      <div
        className={`w-[261px] bg-[#1F1D2B] rounded-[10px] border-[2px] border-transparent bg-clip-padding md:w-[286px] md:h-[550] lg-plus:my-auto 
          
        ${
          isSuper
            ? 'lg-plus:w-[398px] lg-plus:h-max'
            : 'lg-plus:w-[286px] lg-plus:h-max'
        }
          `}
        style={{
          backgroundImage:
            'linear-gradient(#1F1D2B, #1F1D2B), linear-gradient(to right, #7D208E, #0A45F6)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }}
      >
        <div className='px-1 py-6 md:px-4 md:pt-6 md:pb-4'>
          <div className='flex flex-col items-center justify-center'>
            <div
              className='w-[94px] h-[94px] rounded-full border-[3px] border-transparent bg-clip-padding flex items-center justify-center'
              style={{
                backgroundImage:
                  'linear-gradient(#1F1D2B, #1F1D2B), linear-gradient(135deg, #7D208E, #0A45F6)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}
            >
              <img
                className='w-[90px] h-[90px] rounded-full'
                src={imgUrl}
                alt='Image Profile'
              />
            </div>

            <h3
              className={`${inter.className} text-[28px] font-bold  mt-[18px]
              ${isSuper ? 'mt-[24px]' : ''}
              `}
            >
              {name}
            </h3>
          </div>

          <div className='my-6'>
            <p
              className={`text-base text-center text-gray-200 md:leading-[1.5] lg:h-[240px] lg-plus:h-max
              ${
                isSuper
                  ? 'lg-plus:text-2xl lg-plus:leading-[150%]'
                  : 'lg-plus:text-base'
              }
              `}
            >
              {description}
            </p>
          </div>

          <div className='flex gap-[1.7rem] items-center justify-center'>
            <a
              className='w-[60px] h-[60px] flex flex-col items-center justify-center hover:brightness-75 transition-all duration-300'
              href={linkedinUrl}
              target='_blank'
            >
              <Image src={linkedinIcon} alt='Linkedin' />
              <span>Linkedin</span>
            </a>

            <a
              className='w-[60px] h-[60px] flex flex-col items-center justify-center hover:brightness-75 transition-all duration-300'
              href={githubUrl}
              target='_blank'
            >
              <Image src={githubIcon} alt='GitHub' />
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
