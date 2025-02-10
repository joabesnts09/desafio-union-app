'use client'
interface IInputProps {
  name: string
  placeholder: string
  msgError?: string
  type?: string
}
export const InputLabel = ({ name, placeholder, msgError, type='text' }: IInputProps) => {
  return (
    <>
      <div className='w-full flex flex-col gap-3 md:gap-5 items-start'>
        <label className='text-sm text-gray-200 md:text-lg'>
          <span className='text-red-500'>*</span> {name}
        </label>

        <input
          className='w-full pl-4 pr-3 py-3 border-[1px] border-[rgb(189, 189, 189)] bg-clip-padding rounded-[10px] bg-transparent focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-offset-2'
          type={type}
          placeholder={placeholder}
        />

        <style jsx>{`
          input:focus {
            background-image: linear-gradient(#1f1d2b, #1f1d2b),
              linear-gradient(to right, #7d208e, #0a45f6);
            background-origin: border-box;
            background-clip: padding-box, border-box;
          }
        `}</style>

        <span className='text-sm text-red-500 hidden'>{msgError}</span>
      </div>
    </>
  )
}
