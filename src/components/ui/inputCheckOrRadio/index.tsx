'use client'
import { TFormData } from '@/schemas/formeSchema'
import { useFormContext, UseFormRegister } from 'react-hook-form'

interface IInputProps {
  label?: string
  msgError?: string
  type?: string
  options?: { value: string; label: string }[]
  term?: string
  register: UseFormRegister<TFormData>
  name: keyof TFormData
}

export const InputCheckOrRadio = ({
  label,
  msgError,
  type = 'text',
  options = [],
  term,
  register,
  name,
}: IInputProps) => {
  const { watch } = useFormContext<TFormData>()
  const isCheckOrRadio = type === 'radio' || type === 'checkbox'
  const isChecked = watch(name) ?? false

  return (
    <div
      className={`w-full flex gap-3 md:gap-5
    ${!label && 'gap-0 mt-[-1.3rem]'}
    ${
      type === 'checkbox'
        ? 'flex-row-reverse items-center justify-end'
        : 'flex-col items-start'
    }
    `}
    >
      {type === 'radio' && (
        <label className='text-sm text-gray-200 md:text-lg'>
          {!isCheckOrRadio && <span className='text-red-500'>*</span>} {label}
        </label>
      )}

      {type === 'radio' && options.length > 0 ? (
        <div className='flex flex-col gap-2'>
          {options.map((option, index) => (
            <label
              key={index}
              className='flex items-center gap-2 text-gray-200'
            >
              <input
                className='appearance-none w-[20px] h-[20px] border-[1px] p-2 border-white rounded-full checked:ring-2 checked:ring-offset-2 checked:ring-transparent checked:ring-offset-transparent transition-all duration-300 checked:bg-gradient-to-r checked:from-purple-700 checked:to-blue-600'
                type='radio'
                value={option.value}
                {...register(name)}
              />
              {option.label}
            </label>
          ))}
        </div>
      ) : (
        <>
          <label className='text-sm text-gray-200 md:text-lg'>
            <p className='text-center font-bold text-base text-gray-200 md:text-[20px]'>
              {label} <span className='underline'>{term}</span>
            </p>
          </label>

          <label className='relative inline-flex items-center cursor-pointer'>
            <input
              type='checkbox'
              className='sr-only peer'
              {...register(name)}
              checked={isChecked as boolean}
            />
            <div
              className='w-10 h-10 flex items-center justify-center border-2 transition-all duration-300 peer-focus:outline-none'
              style={{
                borderImage: 'linear-gradient(to right, #7D208E, #0A45F6) 1',
                background: isChecked
                  ? 'linear-gradient(to right, #7D208E, #0A45F6)'
                  : 'transparent',
                position: 'relative',
              }}
            >
              {isChecked && (
                <span
                  className='text-white font-bold text-3xl'
                  style={{ position: 'absolute' }}
                >
                  ✓
                </span>
              )}
            </div>
          </label>
        </>
      )}

      {!label && (
        <span className='text-sm text-red-500 hidden'>{msgError}</span>
      )}
    </div>
  )
}
