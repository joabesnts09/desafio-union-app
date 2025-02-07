import { AboutUs } from '@/components/aboutUs'
import { Benefits } from '@/components/benefits'
import { HeaderComponent } from '@/components/headerComponent'
import { Pillars } from '@/components/pillars'
import { PresentationUnion } from '@/components/presentation'
import { SeparatorY } from '@/components/ui/separatorY'

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <main className='bg-[#1F1D2B]'>
        <PresentationUnion />
        <div className='bg-[#1F1D2B] px-4 flex flex-col justify-center'>
          <AboutUs />
          <SeparatorY />
          <Pillars />
          <Benefits/>
        </div>
      </main>
    </>
  )
}
