import { WhatsAppIcon, InstagramIcon, FacebookIcon } from '@/icons/icons'

export default function Footer () {
  return (
    <footer id="contact" className="footer">
      <picture>
        <img src="/fw.webp" alt="Foto de Florencia" />
      </picture>
      <article className="footer-info">
        <p>
          👋🏽 ¡Hola! Soy Florencia, asesora del curso de <b>ResinArt.</b>
        </p>
      </article>
      <article className="footer-contact">
        <p>
          Para más información, podés contactarme a través de los siguientes
          medios:
        </p>
        <div className="footer-contact-icons">
          <a
            href="https://api.whatsapp.com/send/?phone=%2B543483463130&text&type=phone_number&app_absent=0"
            rel="noreferrer"
            target="_blank"
          >
            <WhatsAppIcon />
            +54 3483 463130
          </a>
          <a
            href="https://www.instagram.com/deseo.magico/"
            rel="noreferrer"
            target="_blank"
          >
            <InstagramIcon />
            @deseo.magico
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100094602172908"
            rel="noreferrer"
            target="_blank"
          >
            <FacebookIcon />
            Deseo Mágico
          </a>
        </div>
        <p>
          También podés unirte al grupo de WhatsApp, donde comparto consejos e
          ideas sobre el negocio de resina 👇🏽.
        </p>
      </article>
      <a
        className="btn"
        href="https://chat.whatsapp.com/LIqCS7waaMmFdo99BDYYJC"
        rel="noreferrer"
        target="_blank"
      >
        UNIRME AL GRUPO
      </a>
      <p className="creator">
        Hecho con 💗 por
        <span>
          <a href="https://luchofseven.com.ar" rel="noreferrer" target="_blank">
            @luchofseven
          </a>
        </span>
      </p>
    </footer>
  )
}
