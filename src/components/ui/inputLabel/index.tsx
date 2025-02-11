'use client'
interface IInputProps {
  name: string
  placeholder: string
  msgError?: string
  type?: string
}
export const InputLabel = ({
  name,
  placeholder,
  msgError,
  type = 'text',
  ...props
}: IInputProps) => {
  return (
    <>
      <div className='w-full flex flex-col gap-3 md:gap-5 items-start'>
        <label className='text-sm text-gray-200 md:text-lg'>
          <span className='text-red-500'>*</span> {name}
        </label>

        <input
          className='w-full pl-4 pr-3 py-3 border-[2px] border-gray-400 rounded-[10px] bg-transparent focus:outline-none focus:ring-2 focus:ring-transparent focus:border-none'
          type={type}
          placeholder={placeholder}
          {...props}
          style={{
            transition: 'border 0.3s ease-in-out',
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
            e.target.style.border = '2px solid rgb(189, 189, 189)' 
            e.target.style.backgroundImage = 'none'
          }}
        />

        <span className='text-sm text-red-500 hidden'>{msgError}</span>
      </div>
    </>
  )
}
