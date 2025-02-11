'use client'
import { Infos } from './infos'
import { Inter } from 'next/font/google'
import { RegisterForm } from './registerForm'
import { useEffect, useState } from 'react'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const Registers = () => {
  const [isForm, setIsForm] = useState<boolean>(false)
  const [findForm, setFindForm] = useState<boolean>(false)
  const [findFormError, setFindFormError] = useState<boolean>(false)
  

  return (
    <>
      <section
        className='w-full flex justify-center mt-[1.6rem]'
        id='registers'
      >
        <div
          className='w-full max-w-[1042px] rounded-[10px] py-[32px] px-6 md:py-[56px] md:px-[56px]'
          style={{
            background:
              'linear-gradient(225deg, rgba(0, 72, 254, 0.2) 0%, rgba(133, 29, 134, 0.2) 100%)',
          }}
        >
          <div className='flex flex-col items-center justify-center'>
            <h2
              className={`text-center text-[20px] text-gray-200 font-bold md:text-[40px] `}
            >
              Junte-se ao time!
            </h2>
            {isForm ? (
              <p
                className={`${inter.className} text-center text-sm text-gray-200 my-6 max-w-[320px] md:mb-8 md:text-[20px] md:max-w-[435px]`}
              >
                Ficamos felizes em saber que você tem interesse em fazer parte
                do Union! Agora é só responder o nosso formulário
              </p>
            ) : (
              <p
                className={`${inter.className} text-center text-sm text-gray-200 my-6 max-w-[320px] md:mb-8 md:text-[20px] md:max-w-[435px]`}
              >
                Tem interesse em participar do Union? Confira abaixo os
                requisitos para participar
              </p>
            )}

            {findForm &&
              (findFormError ? (
                <p
                  className={`${inter.className} text-center text-sm text-gray-200 my-6 max-w-[320px] md:mb-8 md:text-[20px] md:max-w-[435px]`}
                >
                  Ficamos felizes em saber que você tem interesse em fazer parte
                  do Union! Agora é só responder o nosso formulário
                </p>
              ) : (
                <p
                  className={`${inter.className} text-center text-sm text-gray-200 my-6 max-w-[320px] md:mb-8 md:text-[20px] md:max-w-[435px]`}
                >
                  Ficamos felizes em saber que você tem interesse em fazer parte
                  do Union! Agora é só responder o nosso formulário
                </p>
              ))}
          </div>

          <div>
            {isForm ? (
              <RegisterForm setIsForm={setIsForm} setFindForm={setFindForm} setFindFormError={setFindFormError} findForm={findForm} />
            ) : (
              <Infos setIsForm={setIsForm} />
            )}
          </div>
        </div>
      </section>
    </>
  )
}
