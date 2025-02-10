'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel'
import { CardTestimonials } from '@/components/ui/slider/cardTestimonials'
import { useState } from 'react'

const cards = [
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/83667469?v=4',
    name: 'José Ronaldo',
    description:
      'O principal benefício do Union é ter uma pessoa mais experiente junto, que vai te direcionando. No Union, você encontra um ambiente muito profissional, onde é cobrado que você tenha padrão de commit, testes e uma alta qualidade de escrita de código, aumentando muita sua qualidade técnica.',
    linkGithub: 'https://github.com/Dev-JoseRonaldo',
    linkLinkedin: 'https://www.linkedin.com/in/devjoseronaldo/',
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/105453766?v=4',
    name: 'Petrus Borges',
    description:
      'No Union eu consegui desenvolver minhas hard skills, aprendendo novas tecnologias e melhorando a escrita do meu código. Eu percebi o quanto a parte de soft skills é importante para o mercado de tecnologia, como ter inteligência emocional, comunicação efetiva e resolução de problemas.',
    linkGithub: 'https://github.com/PetrusBorges',
    linkLinkedin: 'https://www.linkedin.com/in/petrusborgesmachado/',
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/90845572?v=4',
    name: 'Salomão Leal',
    description:
      'Eu estava preso em cursos e não sabia como que era o fluxo de trabalho de uma empresa, com o Union eu consegui aprender isso e hoje me sinto muito mais preparado para o mercado. Durante a experiência no Union, eu aprendi a como pesquisar e se virar para resolver minhas task.',
    linkGithub: 'https://github.com/salomaosilval',
    linkLinkedin: 'https://www.linkedin.com/in/salomaosilval/',
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/75648386?v=4',
    name: 'Luiz Meraki',
    description:
      'No Union você consegue ter muita evolução em pouco tempo, desenvolvendo tanto sua parte técnica como as habilidades interpessoais. No momento que você entra no Union, você mergulha a fundo nas tecnologias e vai aprendendo e aprimorando durante o dia a dia.',
    linkGithub: 'https://github.com/LuizMeraki',
    linkLinkedin: 'https://www.linkedin.com/in/luizmeraki/',
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/78116908?v=4',
    name: 'Matheus Oliveira',
    description:
      'Antes de participar do Union, eu não tinha a mínima ideia de como era trabalhar em equipe e foi muito importante ter essa experiência. Durante a participação, consegui desenvolver soft skills importantes para o mercado de trabalho, como organização, atenção e trabalho em equipe.',
    linkGithub: 'https://github.com/matheusOliv23',
    linkLinkedin: 'https://www.linkedin.com/in/matheushenrioliveira/',
  },
]

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const onNext = () => {
    if (currentIndex >= 0 && currentIndex <= 3) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const onBack = () => {
    if (currentIndex > 0 && currentIndex <= 4) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(4)
    }
  }

  return (
    <>
      <div className='w-full'>
        <div className='w-full lg:hidden'>
          <Carousel
            className='w-full mx-auto px-0 '
            opts={{
              align: 'center',
              loop: true,
            }}
            onPointerDown={(e) => e.preventDefault()}
            onTouchMove={(e) => e.preventDefault()}
          >
            <CarouselContent className='-ml-[-5px]'>
              {cards.map((card, index) => (
                <CarouselItem
                  className='min-w-full flex justify-center'
                  key={index}
                >
                  <CardTestimonials
                    imgUrl={card.imgUrl}
                    name={card.name}
                    description={card.description}
                    linkedinUrl={card.linkLinkedin}
                    githubUrl={card.linkGithub}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselNext className='absolute right-1 bg-transparent border-none w-[27px] h-[44px] ' />
            <CarouselPrevious className='absolute left-1 bg-transparent border-none w-[27px] h-[44px] ' />
          </Carousel>
        </div>

        <div className='w-full hidden lg:flex lg-plus:hidden'>
          <Carousel
            className='w-full mx-auto overflow-hidden'
            opts={{
              align: 'center',
              loop: true,
            }}
            onPointerDown={(e) => e.preventDefault()}
            onTouchMove={(e) => e.preventDefault()}
          >
            <CarouselContent className='flex -ml-[-5px] '>
              {cards.map((card, index) => (
                <CarouselItem
                  className='lg:basis-1/3 px-4 flex justify-center'
                  key={index}
                >
                  <CardTestimonials
                    imgUrl={card.imgUrl}
                    name={card.name}
                    description={card.description}
                    linkedinUrl={card.linkLinkedin}
                    githubUrl={card.linkGithub}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className='absolute right-1 bg-transparent border-none w-[27px] h-[44px] ' />
            <CarouselPrevious className='absolute left-1 bg-transparent border-none w-[27px] h-[44px] ' />
          </Carousel>
        </div>

        <div className='hidden lg-plus:flex w-full'>
          <Carousel
            className='w-full mx-auto overflow-hidden'
            opts={{
              align: 'center',
              loop: true,
            }}
            onPointerDown={(e) => e.preventDefault()}
            onTouchMove={(e) => e.preventDefault()}
          >
            <CarouselContent className='flex -ml-[-5px]'>
              {cards.map((card, index) => (
                <CarouselItem
                  className='lg:basis-1/3 px-4 flex justify-center'
                  key={index}
                >
                  <CardTestimonials
                    imgUrl={card.imgUrl}
                    name={card.name}
                    description={card.description}
                    isSuper={index === currentIndex}
                    linkedinUrl={card.linkLinkedin}
                    githubUrl={card.linkGithub}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div onClick={onNext}>
              <CarouselNext className='absolute right-1 bg-transparent border-none w-[27px] h-[44px]' />
            </div>

            <div onClick={onBack}>
              <CarouselPrevious className='absolute left-1 bg-transparent border-none w-[27px] h-[44px]' />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  )
}
