import { CardQuestions } from './cardQuestions/index'

const dataQuestions = [
  {
    title: 'Quanto custa para fazer parte da Union?',
    text: 'Nada! O Union é 100% gratuito.',
  },
  {
    title: 'Quem pode participar?',
    text: 'Pessoas que ainda não trabalham na área e que não participem de bootcamps ou plataformas de capacitação.',
  },
  {
    title: 'Preciso ter experiência na area?',
    text: 'Sim. Você precisa ter no mínimo 1 ano de estudo em programação, além disso é necessário que já tenha criado algum projeto sozinho, sem que seja projetos guiados, como de cursos e eventos.',
  },
  {
    title: 'Qual idade mínima para fazer parte da Union?',
    text: 'Você precisa ter no mínimo 18 anos.',
  },
  {
    title: 'Como me escrevo?',
    text: 'Se você se encaixa nos requisitos obrigatórios basta preencher o nosso formulário e fazer sua pré-inscrição.',
  },
  {
    title: 'Existe algum processo seletivo? Como funciona?',
    text: 'Nosso processo seletivo consiste em algumas etapas, que são: pré-inscrição pelo formulário da página, análise de suas informações no formulário, desafio técnico e uma entrevista com nosso time.',
  },
  {
    title: 'O que vou aprender?',
    text: 'Você aprenderá como trabalhar com metodologias e ferramentas utilizadas pelas empresas, desenvolver hard e soft skills, tudo de forma prática e mão na massa!',
  },

  {
    title: 'Quanto tempo por dia preciso me dedicar aos projetos?',
    text: 'Você precisa ter disponibilidade de trabalhar no mínimo 1 hora por dia no projeto, é importante também ter disponibilidade para participar das reuniões do time, que acontecem diariamente e aos finais de semana.',
  },
]
export const Questions = () => {
  return (
    <>
      <section
        className='w-full flex justify-center mt-14 md:mt-[15.5rem]'
        id='duvidas'
      >
        <div className='w-full lg:w-[1234px] xl:w-[1224px] lg-plus:w-[1256px] '>
          <header className='relative'>
            <div className='absolute top-1/2 left-0 w-1/3 h-[3px] rounded-[20px] bg-gradient-to-br from-[#831E88] to-[#3C34C7] md:h-[5px]'></div>

            <div className='w-full flex justify-center'>
              <div className='absolute py-1 px-3 bg-[#1F1D2B] top-[-17px] md:top-[-35px] '>
                <h2 className='text-[20px] font-[700] bg-gradient-to-r from-[#7D208E] to-[#0A45F6] text-transparent bg-clip-text md:text-[40px]'>
                  Dúvidas
                </h2>
              </div>
            </div>

            <div className='absolute top-1/2 right-0 w-1/3 h-[3px] rounded-[20px] bg-gradient-to-br from-[#4F2EB6] to-[#0248FD] md:h-[5px]'></div>
          </header>

          <div className='flex flex-col items-center justify-center gap-16 my-10'>
            <div className='w-full flex flex-col gap-6 md:gap-9'>
              <CardQuestions title='O que é o Union?'>
                <p className='pb-4'>
                  O Union é um ambiente prático e imersivo que busca simular o
                  mais próximo do que você vai encontrar nas empresas,
                  desafiando seus membros a resolver problemas reais, com
                  cronogramas e prazos de entrega.
                </p>
                <p className='pb-4'>
                  O Union é um ambiente prático e imersivo que busca simular o
                  mais próximo do que você vai encontrar nas empresas,
                  desafiando seus membros a resolver problemas reais, com
                  cronogramas e prazos de entrega.
                </p>
                <p className=''>
                  Você vivência na prática como é o dia a dia de um desenvolver
                  em uma empresa e fica mais preparado para conquistar uma vaga.
                </p>
              </CardQuestions>
              {dataQuestions.map((question) => (
                <CardQuestions
                  key={question.title}
                  text={question.text}
                  title={question.title}
                ></CardQuestions>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
