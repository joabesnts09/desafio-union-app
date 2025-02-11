
export const AboutUs = () => {
  
  return (
    <>
      <section className='mt-8 mx-auto' id='sobre'>
        <div
          className='relative xl:w-[1224px] lg-plus:w-[1256px] pt-[35px] px-4 pb-6 bg-[#1F1D2B] rounded-3xl border-[3px] border-transparent bg-clip-padding md:px-[80px] md:py-[50px]'
          style={{
            backgroundImage:
              'linear-gradient(#1F1D2B, #1F1D2B), linear-gradient(135deg, #7D208E, #0A45F6)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
          }}
        >
          <div className='absolute top-[-2px] left-6 -translate-y-1/2 bg-[#1F1D2B] md:left-[85px]'>
            <h2
              className=' px-2 text-[20px] font-bold rounded-md bg-transparent md:text-[40px]'
              style={{
                backgroundImage: 'linear-gradient(90deg, #7D208E, #0A45F6)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Quem somos?
            </h2>
          </div>

          <div className='mt-4'>
            <p className='text-gray-200 mb-6 text-center leading-[1.5] md:text-2xl md:text-start'>
              O Union é uma oportunidade única para desenvolvedores juniors,
              nossa missão é proporcionar a você um ambiente prático e imersivo,
              semelhante ao que você encontrará no mercado. Aqui, você vai
              vivenciar como é o dia a dia de um desenvolvedor de software,
              trabalhando lado a lado com líderes experientes e outros
              talentosos desenvolvedores que estão no mesmo caminho que você.
            </p>

            <p className='text-gray-200 text-center leading-[1.5] md:text-2xl md:text-start'>
              No Union, você não apenas ganhará experiência, mas também estará
              pronto para enfrentar as demandas do mercado de tecnologia. Nossa
              abordagem holística enfatiza não apenas o conhecimento técnico,
              mas também habilidades interpessoais e práticas ágeis.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
