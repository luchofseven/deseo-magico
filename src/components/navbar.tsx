'use client'

import { useState, useEffect } from 'react'
import { MenuOpenIcon, MenuCloseIcon } from '../icons/icons'

export default function Navbar (): JSX.Element {
  const [menu, setMenu] = useState(false)

  const handleClick = (): void => {
    setMenu(!menu)
  }

  const handleClickMenu = (e: MouseEvent): void => {
    const target = e.target as HTMLElement
    if (
      target?.matches('.navbar-nav') ||
      target?.matches('.navbar-nav *') ||
      target?.matches('.navbar-aside *')
    ) {
      setMenu(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickMenu)

    return () => {
      document.removeEventListener('click', handleClickMenu)
    }
  }, [])

  return (
    <header className="navbar-header">
      <aside className="navbar-aside">
        <a href="#">
          <img src="/da-icon.webp" alt="Logo de Deseo Mágico" />
        </a>
      </aside>
      <button onClick={handleClick}>
        {menu ? <MenuCloseIcon /> : <MenuOpenIcon />}
      </button>
      <nav className={`navbar-nav ${menu ? 'is-active' : ''}`}>
        <ul>
          <a href="#resin">¿Qué es la resina?</a>
          <a href="#why-is-it-for-you">¿Por qué es para vos?</a>
          <a href="#course-program">Programa del curso</a>
          <a href="#testimonials">Testimonios</a>
          <a href="#contact">Contacto</a>
        </ul>
      </nav>
    </header>
  )
}
