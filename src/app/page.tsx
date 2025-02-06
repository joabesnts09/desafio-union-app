import { AboutUs } from '@/components/aboutUs'
import { HeaderComponent } from '@/components/headerComponent'
import { PresentationUnion } from '@/components/presentation'


export default function Home() {
  return (
    <>
      <HeaderComponent/>
      <main className='bg-[#1F1D2B]'>
        <PresentationUnion />
        <div className='bg-[#1F1D2B] px-4 flex items-center'>
          <AboutUs />
        </div>
      </main>
    </>
  )
}
