'use client'

interface ITextareaProps {
  name: string
  placeholder: string
  msgError?: string
}

export const TextareaLabel = ({
  name,
  placeholder,
  msgError,
  ...props
}: ITextareaProps) => {
  return (
    <div className='w-full flex flex-col gap-3 md:gap-5 items-start'>
      <label className='text-sm text-gray-200 md:text-lg'>
        <span className='text-red-500'>*</span> {name}
      </label>

      <textarea
        className='w-full pl-4 pr-3 py-3 border border-gray-400 rounded-[10px] bg-transparent focus:outline-none focus:ring-2 focus:ring-transparent focus:border-none'
        placeholder={placeholder}
        {...props}
        style={{
          height: '150px',
          resize: 'none',
          transition: 'border 0.1s ease-in-out',
          background: 'transparent',
        }}
        onFocus={(e) => {
          e.target.style.border = '2px solid transparent'
          e.target.style.backgroundImage =
            'linear-gradient(#1F1D2B, #1F1D2B), linear-gradient(to right, #7D208E, #0A45F6)'
          e.target.style.backgroundOrigin = 'border-box'
          e.target.style.backgroundClip = 'padding-box, border-box'
        }}
        onBlur={(e) => {
          e.target.style.border = '1px solid rgb(189, 189, 189)' 
          e.target.style.backgroundImage = 'none'
        }}
      />

      <span className='text-sm text-red-500 hidden'>{msgError}</span>
    </div>
  )
}
