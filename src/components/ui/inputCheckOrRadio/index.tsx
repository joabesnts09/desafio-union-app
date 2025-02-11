'use client'
import { useState } from 'react'

interface IInputProps {
  name?: string
  msgError?: string
  type?: string
  options?: { value: string; label: string }[]
  selected?: boolean
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputCheckOrRadio = ({
  name,
  msgError,
  type = 'text',
  options = [],
  selected,
  onChange,
  checked,
  ...props
}: IInputProps) => {
  console.log(type)

  const isCheckOrRadio = type === 'radio' || type === 'checkbox'

  return (
    <div
      className={`w-full flex gap-3 md:gap-5 
    ${!name && 'gap-0 mt-[-1.3rem]'}
    ${
      type === 'checkbox'
        ? 'flex-row-reverse justify-end'
        : 'flex-col items-start'
    }
    `}
    >
      <label className='text-sm text-gray-200 md:text-lg'>
        {!isCheckOrRadio && <span className='text-red-500'>*</span>} {name}
      </label>

      {type === 'radio' && options.length > 0 ? (
        <div className='flex flex-col gap-2'>
          {options.map((option, index) => (
            <label
              key={index}
              className='flex items-center gap-2 text-gray-200'
            >
              <input
                className='appearance-none w-[20px] h-[20px] border-[5px] p-2 border-white rounded-full checked:ring-2 checked:ring-offset-2 checked:ring-transparent checked:ring-offset-transparent transition-all duration-300 checked:bg-gradient-to-r checked:from-purple-700 checked:to-blue-600'
                type='radio'
                name={name}
                value={option.value}
                checked={selected}
                onChange={onChange}
                {...props}
                style={{
                  WebkitMask:
                    'radial-gradient(circle, white 50%, rgba(0,0,0,0) 51%)',
                  mask: 'radial-gradient(circle, white 50%, rgba(0,0,0,0) 51%)',
                }}
              />
              {option.label}
            </label>
          ))}
        </div>
      ) : (
        <label className='relative inline-flex items-center cursor-pointer'>
          <input
            type='checkbox'
            checked={checked}
            onChange={onChange}
            className='sr-only peer'
          />
          <div
            className='w-10 h-10 flex items-center justify-center border-2 transition-all duration-300 peer-focus:outline-none'
            style={{
              borderImage: 'linear-gradient(to right, #7D208E, #0A45F6) 1',
              background: checked
                ? 'linear-gradient(to right, #7D208E, #0A45F6)'
                : 'transparent',
              position: 'relative',
            }}
          >
            {checked && (
              <span
                className='text-white font-bold text-3xl'
                style={{ position: 'absolute' }}
              >
                ✓
              </span>
            )}
          </div>
        </label>
      )}

      {!name && <span className='text-sm text-red-500 hidden'>{msgError}</span>}
    </div>
  )
}
