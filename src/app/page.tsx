import { AboutUs } from '@/components/aboutUs'
import { Benefits } from '@/components/benefits'
import { HeaderComponent } from '@/components/headerComponent'
import { Pillars } from '@/components/pillars'
import { PresentationUnion } from '@/components/presentation'
import { Steps } from '@/components/steps'
import { SeparatorY } from '@/components/ui/separatorY'

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <main className='bg-[#1F1D2B]'>
        <PresentationUnion />
        <div className='max-w-[125.6rem] bg-[#1F1D2B] px-4 flex my-0 mx-auto flex-col justify-center'>
          <AboutUs />
          <SeparatorY />
          <Pillars />
          <Benefits/>
          <Steps />
        </div>
      </main>
    </>
  )
}
