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
        className='w-full pl-4 pr-3 py-3 border-[1px] border-[rgb(189, 189, 189)] bg-clip-padding rounded-[10px] bg-transparent focus:outline-none focus:border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-transparent focus:ring-offset-transparent'
        placeholder={placeholder}
        {...props}
        style={{
          height: '150px',
          resize: 'none',
          backgroundImage:
            'linear-gradient(#1F1D2B, #1F1D2B), linear-gradient(to right, #7D208E, #0A45F6)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }}
      />

      <span className='text-sm text-red-500 hidden'>{msgError}</span>
    </div>
  )
}
