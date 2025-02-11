'use client'

import { useEffect, useState } from 'react'
import { TFormData } from '@/schemas/formeSchema'
import { UseFormRegister, UseFormWatch } from 'react-hook-form'

interface ITextareaProps {
  label: string
  placeholder: string
  msgError?: string
  register: UseFormRegister<TFormData>
  name: keyof TFormData
  watch: UseFormWatch<TFormData>
}

export const TextareaLabel = ({
  label,
  placeholder,
  msgError,
  register,
  name,
  watch,
}: ITextareaProps) => {
  const [borderColor, setBorderColor] = useState('2px solid rgb(189, 189, 189)')
  const [isTouched, setIsTouched] = useState(false)

  useEffect(() => {
    if (!isTouched) return

    const value = watch(name)
    if (msgError || (typeof value === 'string' && value.trim() === '')) {
      setBorderColor('2px solid #EF4444')
    } else {
      setBorderColor('2px solid rgb(189, 189, 189)')
    }
  }, [watch(name), msgError, isTouched])

  return (
    <div className='w-full flex flex-col gap-3 md:gap-5 items-start'>
      <label htmlFor={name} className='text-sm text-gray-200 md:text-lg'>
        <span className='text-red-500'>*</span> {label}
      </label>

      <textarea
        className={`w-full pl-4 pr-3 py-3 border rounded-[10px] bg-transparent focus:outline-none focus:ring-2 focus:ring-transparent placeholder-[#767479]
          ${msgError && 'text-red-500'}  
        `}
        placeholder={placeholder}
        {...register(name, {
          onBlur: (e) => {
            setIsTouched(true)
            e.target.style.border = borderColor
            e.target.style.backgroundImage = 'none'
          },
        })}
        id={name}
        style={{
          height: '150px',
          resize: 'none',
          transition: 'border 0.3s ease-in-out',
          background: 'transparent',
          border: borderColor,
        }}
        onFocus={(e) => {
          e.target.style.border = '2px solid transparent'
          e.target.style.backgroundImage =
            'linear-gradient(#1F1D2B, #1F1D2B), linear-gradient(to right, #7D208E, #0A45F6)'
          e.target.style.backgroundOrigin = 'border-box'
          e.target.style.backgroundClip = 'padding-box, border-box'
        }}
      />

      {msgError && (
        <p className='text-red-500 text-xs mt-[-0.8rem]'>{msgError}</p>
      )}
    </div>
  )
}
