'use client'
import errorImage from '../../../../../public/imgs/error-subscription-icon.svg'
import successImage from '../../../../../public/imgs/success-subscription-icon.svg'
import { motion } from 'framer-motion'
import { Progress } from '../../progress'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Inter } from 'next/font/google'


const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})


interface IStepFourProps {
  errorForm?: boolean
}
export const StepFour = ({ errorForm }: IStepFourProps) => {
  const [userName, setUserName] = useState<string>('')
  const [userEmail, setUserEmail] = useState<string>('')

  useEffect(() => {
    const storedData = localStorage.getItem('formData')

    if (storedData) {
      const parsedData = JSON.parse(storedData)
      setUserEmail(parsedData.email || '')
      setUserName(parsedData.name || '')
    }
  }, [])
  return (
    <>
      <motion.div
        initial={{ x: '-50vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          x: { duration: 0.2, ease: 'easeIn' },
          opacity: { duration: 0.5, ease: 'easeIn' },
        }}
        className='w-full flex flex-col'
      >
        <div className='w-full flex'>
          <Progress page='4' />
        </div>

        <div className='w-full max-w-[590px] mx-auto flex flex-col gap-3'>
          {errorForm ? (
            <div className='my-[40px] flex flex-col gap-5'>
              <Image
                className='w-[40px] h-[40px] md:w-[70px] md:h-[70px]'
                src={errorImage}
                alt='error image'
              />

              <div className='w-full flex flex-col items-center justify-center gap-5'>
                <h3 className='text-center text-[20px] text-gray-200 font-bold md:text-[32px]'>
                  Não foi possível realizar a inscrição!
                </h3>

                <p className={`${inter.className} text-center text-sm text-gray-200 md:text-[20px] `}>
                  Aconteceu um erro durante o processamento da inscrição, entre
                  em contato com nossa equipe.
                </p>
              </div>
            </div>
          ) : (
            <div className='w-full my-[40px] flex flex-col gap-5'>
              <Image
                className='mx-auto w-[40px] h-[40px] md:w-[70px] md:h-[70px]'
                src={successImage}
                alt='error image'
              />

              <div className='w-full flex flex-col items-center justify-center gap-5'>
                <h3 className='text-center text-[20px] text-gray-200 font-bold md:text-[32px]'>
                  Inscrição realizada com sucesso!
                </h3>

                <p className={`${inter.className} text-center text-sm text-gray-200 md:text-[20px]`}>
                  Obrigado <span className='font-bold'>{userName}</span> por
                  querer fazer parte do Union, em breve nossa equipe vai entrar
                  em contato pelo seu email <span className='font-bold'>{userEmail}</span>, fique atento.
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  )
}
