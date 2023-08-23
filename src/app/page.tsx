import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import CourseProgram from '@/components/section-course-program'
import WhyIsItForYou from '@/components/section-for-you'
import Resin from '@/components/section-resin'
import Testimonials from '@/components/section-testimonials'
import { ButtonInscription } from '@/components/button-inscription'

export default function Home () {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="main-container">
        <Resin />
        {/* <aside className='carousel'>
          CARROUSEL DE FOTOS
        </aside> */}
        <WhyIsItForYou />
        <ButtonInscription />
        <CourseProgram />
        <ButtonInscription />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
