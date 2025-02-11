import Image from 'next/image'
import logoUnion from '../../../public/imgs/logo-union-developers.svg'
import githubIcon from '../../../public/icons/github-icon.svg'
import linkedinIcon from '../../../public/icons/linkedin-icon.svg'
import emailIcon from '../../../public/icons/envelope-icon.svg'

export const Footer = () => {
  return (
    <>
      <footer className='flex flex-col w-full '>
        <div className='w-full flex fle-col bg-[#121119]'>
          <div className='w-full flex flex-col justify-center items-center md:flex-row md:py-[40px] md:px-[92px] md:gap-12 md:justify-between'>
            <div className='flex flex-col items-center justify-center px-4 py-6 md:max-w-[192px]'>
              <div className='max-w-[263px] md:max-w-[192px]'>
                <Image className='w-full' src={logoUnion} alt='Logo Union' />
              </div>
              <p className='text-gray-200 text-base text-center md:text-start'>
                O Union proporciona experiência para desenvolvedores juniors,
                transformando-os em profissionais preparados para o mercado.
              </p>
            </div>

            <div className='flex gap-12'>
              <div className='flex flex-col'>
                <h3 className='text-gray-200 text-lg font-bold'>Saiba mais</h3>
                <div className='flex flex-col mt-[10px] md:mt-[21px]'>
                  <a
                    className='text-base text-gray-200 hover:bg-gradient-to-r hover:from-[#831E88] hover:to-[#3C34C7] hover:bg-clip-text hover:text-transparent transition-colors duration-300'
                    href=''
                  >
                    Sobre
                  </a>
                  <a
                    className='text-base text-gray-200 hover:bg-gradient-to-r hover:from-[#831E88] hover:to-[#3C34C7] hover:bg-clip-text hover:text-transparent transition-colors duration-300'
                    href=''
                  >
                    Depoimentos
                  </a>
                </div>
              </div>

              <div className='flex flex-col'>
                <h3 className='text-gray-200 text-lg font-bold'>Duvidas</h3>
                <div className='flex flex-col mt-[10px] md:mt-[21px]'>
                  <a
                    className='text-base text-gray-200 hover:bg-gradient-to-r hover:from-[#831E88] hover:to-[#3C34C7] hover:bg-clip-text hover:text-transparent transition-colors duration-300'
                    href=''
                  >
                    FAQ
                  </a>
                  <a
                    className='text-base text-gray-200 hover:bg-gradient-to-r hover:from-[#831E88] hover:to-[#3C34C7] hover:bg-clip-text hover:text-transparent transition-colors duration-300'
                    href=''
                  >
                    Como funciona
                  </a>
                </div>
              </div>
            </div>

            <div className='flex gap-5 my-6 md:flex-col'>
              <a
                className='flex flex-col gap-3 hover:brightness-75 transition-all duration-300'
                href=''
              >
                <Image className='w-[24px]' src={emailIcon} alt='Email' />
                <p className='text-base text-gray-200'>Email</p>
              </a>

              <a
                className='flex flex-col gap-3 hover:brightness-75 transition-all duration-300'
                href=''
              >
                <Image className='w-[24px]' src={linkedinIcon} alt='Linkedin' />
                <p className='text-base text-gray-200'>Linkedin</p>
              </a>

              <a
                href=''
                className='flex flex-col gap-3 hover:brightness-75 transition-all duration-300'
              >
                <Image className='w-[24px]' src={githubIcon} alt='Github' />
                <p className='text-base text-gray-200>Github'>Github</p>
              </a>
            </div>
          </div>
        </div>

        <div className='w-full flex items-center justify-center bg-[#1F1D2B] h-[41px]'>
          <p className='text-[#BDBDBD] text-sm'>© Union Developers - 2025</p>
        </div>
      </footer>
    </>
  )
}
