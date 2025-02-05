import { Button } from '../ui/button'
// import '../../../public/imgs/hero_mobile_1.jpg'

export const PresentationUnion = () => {
  return (
    <>
    <div className={`w-full pt-14 pb-3 px-4 bg-[url('/imgs/hero_mobile_1.jpg')] bg-cover bg-left`}>
      
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <h1 className='w-[383px] text-white text-xl font-bold'>
            Ganhe{' '}
            <span className='bg-gradient-to-r from-[#7D208E] to-[#0A45F6] bg-clip-text text-transparent'>
              experiência
            </span>{' '}
            como desenvolvedor júnior
          </h1>
        </div>

        <p className='w-[321px] text-base text-gray-300 leading-relaxed'>
          Descubra como o Union oferece um ambiente prático e imersivo para
          desenvolvedores juniors ganharem experiência de mercado, mesmo sem
          estar em uma empresa. Participe dessa experiência única e impulsione
          sua carreira como desenvolvedor!
        </p>

        <a className='w-[343px] h-[69px] mt-4' href='#'>
          <Button text='Quero participar' />
        </a>
      </div>

    </div>
    </>
  )
}
