interface ICardProgressProps {
  num: string
  title: string
  isActive: boolean
}

export const CardProgress = ({ num, title, isActive }: ICardProgressProps) => {
  return (
    <>
      <div className='flex flex-col justify-between items-center gap-[5px] w-[84px] h-[68px] md:w-[124px] md:h-[110px]'>
        <h3 className='text-xs text-gray-200 text-center font-bold md:text-base '>
          {title}
        </h3>

        <div className='relative'>
          <div
            className={` flex items-center justify-center w-[30px] h-[30px] rounded-full md:w-[40px] md:h-[40px] ${
              isActive
                ? 'bg-gradient-to-br from-[#0048FE] to-[#851D86]'
                : 'bg-[#BDBDBD]'
            }`}
          >
            <span className='text-[20px] text-gray-200 font-bold'>{num}</span>
          </div>

          {Number(num) === 4 ? null : (
            <div
              className='absolute top-1/2 left-[37px] w-[40px] h-[3px] rounded-[10px] md:w-[48px] md:left-[57px]'
              style={{
                background: isActive
                  ? 'linear-gradient(225deg, rgb(0, 72, 254) 0%, rgb(133, 29, 134) 100%)'
                  : 'gray',
              }}
            ></div>
          )}
        </div>
      </div>
    </>
  )
}
