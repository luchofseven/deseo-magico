import ImageCarousel from './carousel'
import Title from './title'

export default function Resin () {
  const imagesProducts = [
    '/product-1.webp',
    '/product-2.webp',
    '/product-3.webp',
    '/product-4.webp',
    '/product-5.webp'
  ]

  return (
    <section id="resin">
      <Title title="¿Qué es la Resina Epoxi?" />
      <p>También llamada vidrio líquido.</p>
      <p>
        Es un material que pasa de estado líquido a estado sólido cuando se le
        aplica un endurecedor o catalizador.
      </p>
      <article>
        <Title title="¿Para qué sirve la resina?" />
        <p>Sirve para crear manualidades duraderas y versátiles.</p>
        <p>
          En nuestro curso vas a aprender a realizar diez productos, como por
          ejemplo:
        </p>
        <ul>
          <li>Lapiceras personalizadas.</li>
          <li>Lámparas leds.</li>
          <li>Macetas.</li>
          <li>Alhajeros.</li>
          <li>Entre otros.</li>
        </ul>
      </article>
      <ImageCarousel images={imagesProducts} />
    </section>
  )
}
