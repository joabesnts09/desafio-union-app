import { CardPilar } from './cardPillar'

export const Pillars = () => {
  const cardsData = [
    {
      title: 'Ativa',
      description:
        'Metodologia ativa é uma abordagem educacional que coloca o aluno como protagonista, onde ele é o responsável por ir atrás dos conhecimentos necessários, ficando o professor como um mentor, que vai mostrar o caminho para que ele possa ter sucesso no aprendizado.',
    },
    {
      title: 'Andragogia',
      description:
        'É uma metodologia de ensino para adultos, que tem mais liberdade e colaboração, permitindo que o aluno decida quando, como e o que estudar, tornando o processo de aprendizagem mais sólido e eficaz, a andragogia valoriza a autonomia e a experiência dos adultos como base para a aprendizagem.',
    },
    {
      title: 'Ágil',
      description:
        'A metodologia ágil é uma metodologia que estimula a colaboração entre o time, permitindo que tenha uma visão mais transparente, liberdade para fazer escolhas e tomar decisões, buscando a melhora continua entre os membros, os processos e a qualidade geral do trabalho.',
    },
  ]

  return (
    <>
      <section className='w-full flex justify-center mt-[2px] bg-[#1F1D2B] rounded-[20px]' id='pilares'>
        <div className='w-full lg:w-[1234px] xl:w-[1224px] lg-plus:w-[1256px] bg-[#1F1D2B] rounded-[20px]'>
          <div
            className='relative w-full border-t-[3px] border-l-[3px] border-r-[3px] border-transparent bg-clip-padding rounded-t-[20px] p-4'
            style={{
              backgroundImage:
                'linear-gradient(#1F1D2B, #1F1D2B), linear-gradient(180deg, #0A45F6, #7D208E, #221E2F)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              maskSize: '100% 100%',
              maskRepeat: 'no-repeat',
            }}
          >
            <div className='w-full h-full z-[10] bg-[#1F1D2B]'>
              <header className='absolute top-[-20PX] left-[38%] sm:left-[42%] md:left-[40%] md:top-[-30px] lg:left-[43%] mx-auto w-max px-[18px] bg-[#1F1D2B]'>
                <h2
                  className='text-[20px] font-bold bg-transparent md:text-[40px]'
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #7D208E, #0A45F6)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Pilares
                </h2>
              </header>

              <div className='w-full py-6 px-4 pb-3 bg-[#1F1D2B] md:px-20 md:py-[50px] lg:mb-10 lg-plus:mb-0'>
                <p className='text-center z-10 text-base md:text-2xl'>
                  Os pilares que sustentam o formato inovador de aprendizagem do
                  Union é a junção de incríveis metodologias!
                </p>
              </div>
            </div>
          </div>

          <div className='mt-10 flex flex-col items-center gap-16 md:flex-row md:flex-wrap md:justify-center md:items-start md:gap-[51.2px] lg-plus:flex-nowrap lg-plus:mt-32 lg-plus:gap-[31.2px]'>
            {cardsData.map((card, index) => (
              <CardPilar
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
