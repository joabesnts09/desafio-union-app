import { CardProgress } from './cardProgress'

interface IProgressProps {
  page: string
}

export const Progress = ({ page }: IProgressProps) => {
  return (
    <>
      <nav className='flex w-max mx-auto my-8 h-[72px] md:h-[111px]'>
        <CardProgress
          num='1'
          title='Dados pessoais'
          isActive={Number(page) >= 1}
        />
        <CardProgress
          num='2'
          title='Informações técnicas'
          isActive={Number(page) > 1}
        />
        <CardProgress num='3' title='Sobre você' isActive={Number(page) > 2} />
        <CardProgress num='4' title='Enviar' isActive={Number(page) > 3} />
      </nav>
    </>
  )
}
