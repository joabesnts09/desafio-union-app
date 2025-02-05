import { HeaderComponent } from '@/components/headerComponent';
import { PresentationUnion } from '@/components/presentation';


export default function Home() {
  return (
    <>
      <HeaderComponent/>
      <main className=''>
        <PresentationUnion />
      </main>
    </>
  )
}
