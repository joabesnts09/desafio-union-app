'use client'
import { motion } from 'framer-motion'
import { Progress } from '../../progress'
import { InputLabel } from '../../../ui/inputLabel/index'
import { InputCheckOrRadio } from '@/components/ui/inputCheckOrRadio'
import { Button, ButtonReverse } from '@/components/ui/button'
import { TFormData, TUserFormRegister } from '@/schemas/formeSchema'
import { FieldErrors, useFormContext } from 'react-hook-form'
import { useEffect, useState } from 'react'

interface IStepOneProps {
  setIsForm: (boolean: boolean) => void
  nextStep: () => void
  errors?: FieldErrors<TFormData>
  register: TUserFormRegister
}

export const StepOne = ({
  errors,
  nextStep,
  setIsForm,
  register,
}: IStepOneProps) => {
  const {  watch } = useFormContext<TFormData>()

  const values = watch()

  const validateForm = () => {
    const isValid =
      values.name &&
      values.age &&
      values.email &&
      values.github &&
      values.linkedin &&
      values.profession

    return isValid
  }

  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    setIsFormValid(!!validateForm())
  }, [values])
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
          <Progress page='1' />
        </div>

        <div className='w-full flex flex-col gap-3'>
          <InputLabel
            label='Nome completo'
            placeholder='Qual seu nome completo?'
            msgError={errors?.name?.message}
            register={register}
            name='name'
            watch={watch}
          />
          <InputLabel
            label='Idade'
            placeholder='Qual sua idade?'
            register={register}
            name='age'
            msgError={errors?.age?.message}
            type='number'
            watch={watch}
          />
          <InputLabel
            label='Email'
            placeholder='Qual seu email de contato?'
            register={register}
            name='email'
            msgError={errors?.email?.message}
            type='email'
            watch={watch}
          />
          <InputLabel
            label='Github'
            placeholder='Qual seu Github'
            register={register}
            name='github'
            msgError={errors?.github?.message}
            watch={watch}
          />
          <InputLabel
            label='Linkedin'
            placeholder='Qual seu Linkedin'
            register={register}
            name='linkedin'
            msgError={errors?.linkedin?.message}
            watch={watch}
          />
          <InputCheckOrRadio
            type='radio'
            label='Onde você gosta mais de trabalhar?'
            options={[
              { value: 'Frontend', label: 'Frontend' },
              { value: 'Backend', label: 'Backend' },
            ]}
            register={register}
            name='profession'
          />
        </div>

        <div className='w-full flex h-[44px] mt-[18px] gap-4 md:h-[69px] md:mt-[40px]'>
          <ButtonReverse onClick={() => setIsForm(false)} text='Voltar' />

          <Button onClick={nextStep} text='Próximo' disabled={!isFormValid} />
        </div>
      </motion.div>
    </>
  )
}
