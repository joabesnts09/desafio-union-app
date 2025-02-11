import { useEffect, useState } from 'react'
import { UseFormRegister, UseFormWatch } from 'react-hook-form'
import { TFormData } from '@/schemas/formeSchema'

interface IInputProps {
  label: string
  placeholder: string
  msgError?: string
  type?: string
  register: UseFormRegister<TFormData>
  name: keyof TFormData
  watch: UseFormWatch<TFormData>
}

export const InputLabel = ({
  label,
  placeholder,
  msgError,
  type = 'text',
  register,
  name,
  watch,
}: IInputProps) => {
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

      <div className='relative w-full'>
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          {...register(name, {
            onBlur: (e) => {
              setIsTouched(true)
              e.target.style.border = borderColor
              e.target.style.backgroundImage = 'none'
            },
          })}
          className={`
            w-full pl-4 pr-3 py-3 border-[2px] rounded-[10px] bg-transparent 
            focus:outline-none transition-all duration-300
            focus:border-transparent focus:ring-2 focus:ring-transparent
            placeholder-[#767479]

            ${msgError && 'text-red-500'}
          `}
          style={{ border: borderColor }}
          onFocus={(e) => {
            e.target.style.border = '2px solid transparent'
            e.target.style.backgroundImage =
              'linear-gradient(#1F1D2B, #1F1D2B), linear-gradient(to right, #7D208E, #0A45F6)'
            e.target.style.backgroundOrigin = 'border-box'
            e.target.style.backgroundClip = 'padding-box, border-box'
          }}
        />
      </div>

      {msgError && (
        <span className='text-sm text-red-500 mt-[-0.8rem]'>{msgError}</span>
      )}
    </div>
  )
}
