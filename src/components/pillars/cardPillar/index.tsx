export interface ICardPilar {
  title: string
  description: string
}

export const CardPilar = ({ title, description }: ICardPilar) => {
  return (
    <>
      <div className='w-full max-w-[341px] lg:min-w-[397px] lg:amx-w-[397px] lg-plus:max-w-[635.2px]'>
        <header className='w-full flex items-center justify-center bg-gradient-to-r from-[#7D208E] to-[#0A45F6] py-5 px-14 rounded-t-[10px] lg:py-10 lg:px-[92px]'>
          <h3 className='text-2xl font-bold text-gray-300 lg:text-[32px]'>
            {title}
          </h3>
        </header>

        <div className='w-full h-max p-4 bg-gradient-to-b from-[#21203C] to-[#261E37] rounded-b-[10px]'>
          <p className='text-base text-gray-200 text-center lg:text-lg'>
            {description}
          </p>
        </div>
      </div>
    </>
  )
}
