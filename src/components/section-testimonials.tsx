import ImageCarousel from './carousel'
import Title from './title'

export default function Testimonials () {
  const imagesTestimonials = [
    '/testimonial-1.webp',
    '/testimonial-2.webp',
    '/testimonial-3.webp',
    '/testimonial-4.webp',
    '/testimonial-5.webp'
  ]

  return (
    <section id="testimonials">
      <Title title="Testimonios" />
      <p>Alumnos que tomaron el curso y tuvieron sus primeras ventas:</p>
      <ImageCarousel images={imagesTestimonials} />
    </section>
  )
}
