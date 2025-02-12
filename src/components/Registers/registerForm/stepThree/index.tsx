'use client'
import { motion } from 'framer-motion'
import { Progress } from '../../progress'
import { InputCheckOrRadio } from '@/components/ui/inputCheckOrRadio'
import { useEffect, useState } from 'react'
import { Button, ButtonReverse } from '@/components/ui/button'
import { TextareaLabel } from '@/components/ui/textareaLabel'
import { FieldErrors, useFormContext } from 'react-hook-form'
import { TFormData, TUserFormRegister } from '@/schemas/formeSchema'

interface IStepThreeProps {
  prevStep: () => void
  register: TUserFormRegister
  errors?: FieldErrors<TFormData>
}

export const StepThree = ({ prevStep }: IStepThreeProps) => {
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext<TFormData>()

  const values = watch()
  const [isFormValid, setIsFormValid] = useState(false)

  const validateForm = () => {
    return (
      values.whyLikePrograming &&
      values.dayToDayResponsibilities &&
      values.receiveFeedback &&
      values.aboutUnion &&
      values.whyChooseUnion &&
      values.whyPartOfUnion &&
      values.acceptTerms
    )
  }

  useEffect(() => {
    setIsFormValid(!!validateForm())
  }, [values, validateForm])

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
          <Progress page='3' />
        </div>

        <div className='w-full flex flex-col gap-3'>
          <TextareaLabel
            label='whyLikePrograming'
            name='whyLikePrograming'
            placeholder='Qual é a sua maior motivação para programar?'
            msgError={errors?.whyLikePrograming?.message}
            register={register}
            watch={watch}
          />

          <TextareaLabel
            label='dayToDayResponsibilities'
            name='dayToDayResponsibilities'
            placeholder='Como você faz para cumprir todas as suas responsabilidades do dia a dia?'
            msgError={errors?.dayToDayResponsibilities?.message}
            register={register}
            watch={watch}
          />

          <TextareaLabel
            label='receiveFeedback'
            name='receiveFeedback'
            placeholder='Nos conte como é para você receber feedback'
            msgError={errors?.receiveFeedback?.message}
            register={register}
            watch={watch}
          />

          <TextareaLabel
            label='aboutUnion'
            name='aboutUnion'
            placeholder='Como você ficou sabendo sobre o Union?'
            msgError={errors?.aboutUnion?.message}
            register={register}
            watch={watch}
          />

          <TextareaLabel
            label='whyChooseUnion'
            name='whyChooseUnion'
            placeholder='Por que você quer fazer parte do Union?'
            msgError={errors?.whyChooseUnion?.message}
            register={register}
            watch={watch}
          />

          <TextareaLabel
            label='whyPartOfUnion'
            name='whyPartOfUnion'
            placeholder='Por que você deveria fazer parte do pequeno grupo que vai ter a oportunidade de participar do Union?'
            msgError={errors?.whyPartOfUnion?.message}
            register={register}
            watch={watch}
          />

          <div className='mt-4'>
            <InputCheckOrRadio
              type='checkbox'
              label='Li e concordo com os'
              term='termos.'
              register={register}
              name='acceptTerms'
            />
          </div>
        </div>

        <div className='w-full flex h-[44px] mt-[18px] gap-4 md:h-[69px] md:mt-[40px]'>
          <ButtonReverse onClick={prevStep} text='Voltar' />
          <Button type='submit' text='Enviar' disabled={!isFormValid} />
        </div>
      </motion.div>
    </>
  )
}
