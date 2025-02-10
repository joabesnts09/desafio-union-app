import arrowNext from '../../../../public/icons/arrow-right.svg'
import arrowBack from '../../../../public/icons/arrow-left.svg'
import Image from 'next/image'

interface IArrowProps {
  className?: string
}

export const ArrowNext = ({ className }: IArrowProps) => {
  return (
    <>
      <Image src={arrowNext} alt='Arrow Next' />
    </>
  )
}

export const ArrowBack = ({ className }: IArrowProps) => {
  return (
    <>
      <Image src={arrowBack} alt='Arrow Back' />
    </>
  )
}
