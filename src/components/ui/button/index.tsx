interface IButtonProps {
  text: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const Button = ({
  text,
  onClick,
  className,
  type = 'button',
  disabled,
}: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} relative group w-full h-full text-white px-4 py-2 rounded-sm font-semibold overflow-hidden border-2
      ${disabled && 'cursor-not-allowed'}
      `}
      type={type}
      disabled={disabled}
      style={{
        background: 'transparent',
        border: '2px solid transparent',
        borderRadius: '8px',
      }}
    >
      <span className='relative z-10'>{text}</span>

      <div className='absolute inset-0 bg-gradient-to-r from-[#7D208E] to-[#0A45F6] transform origin-right transition-transform duration-500 ease-in-out lg:group-hover:scale-x-0'></div>

      <div
        className='absolute inset-0 pointer-events-none rounded-sm'
        style={{
          border: '2px solid transparent',
          borderImage:
            'linear-gradient(225deg, rgb(0,72,254) 0%, rgb(133,29,134) 100%) 1',
        }}
      ></div>
    </button>
  )
}

export const ButtonReverse = ({
  text,
  onClick,
  className,
  ...props
}: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} relative group w-full h-full text-white px-4 py-2 rounded-sm font-semibold overflow-hidden border-2 margin-[-2px]`}
      {...props}
      style={{
        background: 'transparent',
        border: '2px solid transparent',
        borderRadius: '8px',
      }}
    >
      <span className='relative z-10'>{text}</span>

      <div className='absolute inset-0 bg-gradient-to-r from-[#7D208E] to-[#0A45F6] transform origin-right scale-x-0 lg:group-hover:scale-x-100 transition-all duration-500 ease-in-out'></div>

      <div
        className='absolute inset-0 pointer-events-none rounded-sm'
        style={{
          border: '2px solid transparent',
          borderImage:
            'linear-gradient(225deg, rgb(0,72,254) 0%, rgb(133,29,134) 100%) 1',
        }}
      ></div>
    </button>
  )
}
