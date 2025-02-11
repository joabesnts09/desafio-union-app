import { CardStep } from './cardStep'

export const Steps = () => {
  const dataSteps = [
    {
      num: '1',
      title: 'Pré-inscrição',
      description: 'Inicie a sua inscrição preenchendo o nosso formulário',
    },
    {
      num: '2',
      title: 'Análise do formulário',
      description: 'O nosso time irá analisar suas informações',
    },
    {
      num: '3',
      title: 'Desafio técnico',
      description: 'Após a análise você receberá um desafio prático',
    },
    {
      num: '4',
      title: 'Entrevista',
      description:
        'Nessa fase iremos bater um papo para que possamos conhecer melhor você',
    },
  ]

  return (
    <>
      <section
        className='w-full flex justify-center mt-14 md:mt-[15.5rem]'
        id='etapas'
      >
        <div className='w-full lg:w-[1234px] xl:w-[1224px] lg-plus:w-[1256px] '>
          <header className='relative'>
            <div className='absolute top-1/2 left-0 w-1/3 h-[3px] rounded-[20px] bg-gradient-to-br from-[#831E88] to-[#3C34C7] md:h-[5px]'></div>

            <div className='w-full flex justify-center'>
              <div className='absolute py-1 px-3 bg-[#1F1D2B] top-[-17px] md:top-[-35px] '>
                <h2 className='text-[20px] font-[700] bg-gradient-to-r from-[#7D208E] to-[#0A45F6] text-transparent bg-clip-text md:text-[40px]'>
                  Etapas
                </h2>
              </div>
            </div>

            <div className='absolute top-1/2 right-0 w-1/3 h-[3px] rounded-[20px] bg-gradient-to-br from-[#4F2EB6] to-[#0248FD] md:h-[5px]'></div>
          </header>

          <div className='w-full py-4 sm-min:px-4 sm:py-[40px] flex items-center justify-center my-0 mx-auto md:px-0 md:max-w-[855px]'>
            <p className='text-center text-gray-200 text-base text-wrap md:text-2xl'>
              Conheça as etapas do nosso processo seletivo
            </p>
          </div>

          <div>
            <ol className='relative z-0 flex flex-col items-center justify-center gap-16 lg:w-full lg:max-w-[1035px] md:my-o md:mx-auto lg-plus:max-w-[1067px] lg-plus:items-stretch lg-plus:gap-0'>
              {dataSteps.map((steps, index) => (
                <CardStep
                  key={index}
                  index={index}
                  num={steps.num}
                  title={steps.title}
                  description={steps.description}
                  isReversed={index % 2 !== 0}
                />
              ))}

              <div className="absolute top-[15px] right-[41%] h-[calc(100%-1.5rem)] w-[3px] mx-auto bg-gradient-to-b from-[#851D86] via-[#3B0072] to-[#0048FE] rounded-[10px] z-[-1] lg-plus:right-[50%] lg-plus:top-0 lg-plus:h-[calc(100%-14.9rem)]" />
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}
