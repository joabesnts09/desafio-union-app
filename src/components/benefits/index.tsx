import { CardBenefits } from './cardBenefit'
import rocketImg from '../../../public/imgs/beneficios/Vector.svg'
import vectorImg from '../../../public/imgs/beneficios/Vector.svg'
import GameImg from '../../../public/imgs/beneficios/game_controller.svg'
import starImg from '../../../public/imgs/beneficios/star.svg'
import planetImg from '../../../public/imgs/beneficios/planet.svg'
import likeImg from '../../../public/imgs/beneficios/like.svg'
import bulbImg from '../../../public/imgs/beneficios/bulb_on.svg'
import profileImg from '../../../public/imgs/beneficios/profile-2.svg'

export const Benefits = () => {
  const dataBenefits = [
    {
      title: 'Preparação para o mercado',
      description:
        'Os membros são equipados com uma compreensão profunda das práticas de mercado, permitindo-lhes ingressar no setor com confiança e conhecimento.',
      imgUrl: rocketImg,
    },
    {
      title: 'Aprendizado de novas tecnologias e ferramentas',
      description:
        'Os membros são expostos a uma variedade de tecnologias e ferramentas relevantes, expandindo suas habilidades e conhecimentos.',
      imgUrl: vectorImg,
    },
    {
      title: 'Desenvolvimento de hard skills',
      description:
        'Através de projetos reais, os membros fortalecem suas habilidades técnicas, aumentando sua capacidade de contribuir de forma eficaz em ambientes profissionais.',
      imgUrl: GameImg,
    },
    {
      title: 'Desenvolvimento de soft skills',
      description:
        'Além das competências técnicas, os membros aprimoram habilidades interpessoais cruciais, como comunicação eficaz, resolução de conflitos e trabalho em equipe.',
      imgUrl: starImg,
    },
    {
      title: 'Ambiente imersivo',
      description:
        'O Union oferece uma oportunidade única de aplicar conhecimentos teóricos em cenários do mundo real, proporcionando uma experiência diferenciada e valiosa.',
      imgUrl: planetImg,
    },
    {
      title: 'Networking',
      description:
        'A participação no Union expande sua rede de contatos, abrindo portas para colaborações futuras e oportunidades profissionais.',
      imgUrl: likeImg,
    },
    {
      title: 'Domínio de metodologias ágeis',
      description:
        'Através da vivência prática, os membros aprendem a aplicar metodologias ágeis como Scrum, preparando-os para ambientes de trabalho colaborativos.',
      imgUrl: bulbImg,
    },
    {
      title: 'Mentória',
      description:
        'Os mentores experientes oferecem orientação valiosa, proporcionando uma trajetória de aprendizado mais suave e eficiente.',
      imgUrl: profileImg,
    },
  ]

  return (
    <>
      <section className='w-full flex justify-center mt-14 md:mt-[15.5rem]' id='beneficios'>

        <div className='w-full lg:w-[1234px] xl:w-[1224px] lg-plus:w-[1256px] '>

          <header className='relative'>

          <div className="absolute top-1/2 left-0 w-1/3 h-[3px] rounded-[20px] bg-gradient-to-br from-[#831E88] to-[#3C34C7] md:h-[5px]"></div>

            <div className='w-full flex justify-center'>
              <div className='absolute py-1 px-3 bg-[#1F1D2B] top-[-17px] md:top-[-35px] '>
                <h2 className='text-[20px] font-[700] bg-gradient-to-r from-[#7D208E] to-[#0A45F6] text-transparent bg-clip-text md:text-[40px]'>
                  Benefícios
                </h2>
              </div>
            </div>

            <div className="absolute top-1/2 right-0 w-1/3 h-[3px] rounded-[20px] bg-gradient-to-br from-[#4F2EB6] to-[#0248FD] md:h-[5px]"></div>

          </header>

          <div className='w-full py-4 sm-min:px-4 sm:py-[40px] flex items-center justify-center my-0 mx-auto md:px-0 md:max-w-[855px]'>
            <p className='text-center text-gray-200 text-base text-wrap md:text-2xl'>
              Conheça os benefícios incríveis que o Union proporciona para seus
              membros!
            </p>
          </div>

          <div className='flex flex-col items-center justify-center gap-16'>
            {dataBenefits.map((benefits, index) => (
              <CardBenefits
                key={index}
                title={benefits.title}
                description={benefits.description}
                imgUrl={benefits.imgUrl}
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
