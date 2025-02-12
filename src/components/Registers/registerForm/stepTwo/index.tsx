'use client'
import { motion } from 'framer-motion'
import { Progress } from '../../progress'
import { InputLabel } from '../../../ui/inputLabel/index'
import { InputCheckOrRadio } from '@/components/ui/inputCheckOrRadio'
import { useEffect, useState } from 'react'
import { Button, ButtonReverse } from '@/components/ui/button'
import { TextareaLabel } from '@/components/ui/textareaLabel'
import { TFormData, TUserFormRegister } from '@/schemas/formeSchema'
import { FieldErrors, useFormContext } from 'react-hook-form'

interface IStepTwoProps {
  prevStep: () => void
  nextStep: () => void
  register: TUserFormRegister
  errors?: FieldErrors<TFormData>
}

export const StepTwo = ({
  register,
  errors,
  nextStep,
  prevStep,
}: IStepTwoProps) => {
  const { watch } = useFormContext<TFormData>()
  const values = watch()

  const [isFormValid, setIsFormValid] = useState(false)

  const validateForm = () => {
    const isValid =
      values.profession &&
      values.timeProfession &&
      values.bestRepository &&
      values.aboutProject
    return isValid
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
          <Progress page='2' />
        </div>
        <div className='w-full flex flex-col gap-3'>
          <InputCheckOrRadio
            type='radio'
            label='Quanto tempo você estuda programação?'
            options={[
              { value: '1 ano', label: '1 ano' },
              { value: '2 anos', label: '2 anos' },
              { value: 'Mais de 3 anos', label: 'Mais de 3 anos' },
            ]}
            register={register}
            name='timeProfession'
          />

          <InputLabel
            label='Link do repositório do seu melhor projeto'
            placeholder='Qual o link para o repositório do seu melhor projeto'
            msgError={errors?.bestRepository?.message}
            register={register}
            name='bestRepository'
            watch={watch}
          />

          <TextareaLabel
            label='aboutProject'
            placeholder='Fale sobre o seu melhor projeto, nos conte como foi trabalhar nesse projeto?'
            msgError={errors?.aboutProject?.message}
            register={register}
            name='aboutProject'
            watch={watch}
          />
        </div>
        <div className='w-full flex h-[44px] mt-[18px] gap-4 md:h-[69px] md:mt-[40px]'>
          <ButtonReverse onClick={prevStep} text='Voltar' />
          <Button onClick={nextStep} text='Próximo' disabled={!isFormValid} />
        </div>
      </motion.div>
    </>
  )
}
