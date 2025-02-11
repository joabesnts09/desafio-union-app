import Image from 'next/image'
import iconCheck from '../../../../public/icons/check.svg'
import { Button } from '@/components/ui/button'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

interface IInfosProps {
  setIsForm: (boolean: boolean) => void
}

const infosData = [
  { infor: 'Ter mais que 18 anos' },
  { infor: 'Ter 1 ano ou mais de estudo em programação' },
  { infor: 'Ainda não trabalhar na área' },
  {
    infor: 'Já ter criado projetos sozinho que não sejam de cursos ou eventos',
  },
  { infor: 'Não participar de bootcamps ou programas de capacitação' },
  {
    infor:
      'Ter disponibilidade para trabalhar no mínimo 1 hora por dia no projeto',
  },
  {
    infor:
      'Ter disponibilidade para participar das reuniões do time, durante a semana e finais de semana',
  },
]

export const Infos = ({ setIsForm }: IInfosProps) => {
  return (
    <>
      <div className='flex flex-col'>
        <ol className='flex flex-col gap-4'>
          {infosData.map((info, index) => (
            <li key={index}>
              <div className='flex justify-start gap-4'>
                <Image
                  className='w-[20px] h-[20px] md:w-[22px] md:h-[22px]'
                  src={iconCheck}
                  alt='icon check'
                />
                <p
                  className={`${inter.className} text-start text-sm text-gray-200 md:text-[20px]`}
                >
                  {info.infor}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className='h-[46px] w-full mt-[1.8rem] md:h-[69px]'>
          <Button onClick={() => setIsForm(true)} text='Inscrever-se' />
        </div>
      </div>
    </>
  )
}
