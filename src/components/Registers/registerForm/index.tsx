'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema, TFormData } from '../../../schemas/formeSchema'
import { StepOne } from './stepOne'
import { StepTwo } from './stepTwo'
import { StepThree } from './stepThree'
import { StepFour } from './stepFour'

interface IFormProps {
  setIsForm: (boolean: boolean) => void
  setFindFormError: (boolean: boolean) => void
  setFindForm: (boolean: boolean) => void
  findForm: boolean
}

export const RegisterForm = ({ setIsForm, setFindForm, findForm }: IFormProps) => {
  const [step, setStep] = useState(1)

  const methods = useForm<TFormData>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
  })

  const { formState: { errors }, register, handleSubmit } = methods

  const nextStep = () => setStep(step + 1)

  const prevStep = () => setStep(step - 1)

  const onSubmit = (data: TFormData) => {
    const key = "formData";
  
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key)
    }
    setFindForm(true)
    setStep(0)
    localStorage.setItem(key, JSON.stringify(data))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='w-full flex'
    >

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full flex'>
          {step === 1 && (
            <StepOne
              setIsForm={setIsForm}
              nextStep={nextStep}
              register={register}
              errors={errors}
            />
          )}
          {step === 2 && (
            <StepTwo
              register={register}
              errors={errors}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 3 && (
            <StepThree
              register={register}
              errors={errors}
              prevStep={prevStep}
            />
          )}
          {findForm && (
            <StepFour
            errorForm={false}
            />
          )}
        </form>
      </FormProvider>
    </motion.div>
  )
}
