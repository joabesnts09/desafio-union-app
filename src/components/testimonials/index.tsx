import { Slider } from '../ui/slider'

export const Testimonials = () => {
  return (
    <>
      <section
        className='w-full flex justify-center mt-14 md:mt-[15.5rem]'
        id='testimonials'
      >
        <div className='w-full lg:max-w-[1234px] xl:max-w-[1224px] lg-plus:w-[1256px] '>
          <header className='relative'>
            <div className='absolute top-1/2 left-0 w-1/3 h-[3px] rounded-[20px] bg-gradient-to-br from-[#831E88] to-[#3C34C7] md:h-[5px]'></div>

            <div className='w-full flex justify-center'>
              <div className='absolute py-1 px-3 bg-[#1F1D2B] top-[-17px] md:top-[-35px] '>
                <h2 className='text-[20px] font-[700] bg-gradient-to-r from-[#7D208E] to-[#0A45F6] text-transparent bg-clip-text md:text-[40px]'>
                  Depoimentos
                </h2>
              </div>
            </div>

            <div className='absolute top-1/2 right-0 w-1/3 h-[3px] rounded-[20px] bg-gradient-to-br from-[#4F2EB6] to-[#0248FD] md:h-[5px]'></div>
          </header>

          <div className='w-full py-4 sm-min:px-4 sm:py-[40px] flex items-center justify-center my-0 mx-auto md:px-0 md:max-w-[855px]'>
            <p className='text-center text-gray-200 text-base text-wrap md:text-2xl'>
              Veja o que quem já passou por essa experiência fala
            </p>
          </div>

          <div className='flex flex-col items-center justify-center w-full mb-20 mt-8 lg:mt-10 lg:mb-32'>
            <div className='relative flex items-center justify-center w-full lg-plus:h-[740px]'>
              <Slider />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
