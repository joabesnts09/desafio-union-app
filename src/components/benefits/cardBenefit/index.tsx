interface ICardBenefitsProps {
  title: string
  description: string
  imgUrl: string
  isReversed: boolean
}

export const CardBenefits = ({
  title,
  description,
  imgUrl,
  isReversed,
}: ICardBenefitsProps) => {
  return (
    <>
      <div
        className={`flex flex-col items-center w-[375px] md:w-full md:gap-[5.8rem] md:items-start  ${
          isReversed
            ? 'md:flex-row-reverse'
            : 'md:flex-row justify-start'
        }`}
      >
        <div className={` flex w-max
          `}>
          <img className='w-[80px] md:w-[180px] lg:w-[260px] max-w-[160px]' src={imgUrl} alt={title} />
        </div>

        <div
          className={`w-[290px] flex flex-col mt-6 md:w-full md:gap-[2.8rem] md:justify-start md:max-w-[660px] 
            ${
              isReversed? 'md:items-end md:justify-start' : 'md:items-start'
            }
            `}
        >
          <div className='flex justify-center'>
            <h3
              className={`text-center text-lg text-white font-[700] md:text-[32px]
              ${isReversed ? 'md:text-end' : 'md:text-start'}
              
              `}
            >
              {title}
            </h3>
          </div>
          <p
            className={`leading-[150%] text-center text-base text-[#D7D7D7] mt-3 md:text-2xl md:mt-0 md:max-w-[700px] ${
              isReversed ? 'md:text-end' : 'md:text-start'
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </>
  )
}
