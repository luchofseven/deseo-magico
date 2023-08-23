// import { useEffect, useState } from 'react'
// import { getDolarPrice } from '@/services/dolar-price'

export function ButtonInscription () {
  // const [dolarPrice, setDolarPrice] = useState(0)

  // const totalWithOutTaxes = dolarPrice * 94
  // const totalWithArgTaxes = totalWithOutTaxes + totalWithOutTaxes * 0.74
  // const totalWithHotmartTaxes = totalWithArgTaxes + totalWithArgTaxes * 0.095
  // const total = Math.round(totalWithHotmartTaxes)

  // useEffect(() => {
  //   const dolarPrice = async () => {
  //     const price = await getDolarPrice()
  //     setDolarPrice(price)
  //   }

  //   dolarPrice()
  // }, [])

  return (
    <article className="btn-container">
      <a
        className="btn"
        href="https://pay.hotmart.com/G83886199T?off=6hky76ey&ref=D84349419Q&bid=1692716544378"
        rel="noreferrer"
        target="_blank"
      >
        QUIERO INSCRIBIRME
      </a>
      <p>
        <span>$USD 94</span> o <span>$70.000 pesos argentinos.</span>
      </p>
    </article>
  )
}
