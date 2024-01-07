import { Link } from 'react-scroll'
import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from '@phosphor-icons/react'
import { MobileContext } from './header'
import { useContext } from 'react'

export function Sidebar() {
  const { openSidebar, handleOpenSidebar } = useContext(MobileContext)
  return (
    <div
      className={`fixed bottom-0 right-0 z-10 flex h-[calc(100%-4rem)] flex-col bg-paradise-green-600 transition-all duration-300 ${
        openSidebar ? 'w-full' : 'w-0'
      }`}
    >
      <nav className="flex flex-col justify-center font-meaculpa text-2xl md:hidden">
        <Link
          activeClass="active"
          to="carousel"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-64}
          duration={500}
          isDynamic={true}
          className="py-8 text-center hover:bg-paradise-green-400 hover:text-black"
          onClick={handleOpenSidebar}
        >
          Inicio
        </Link>
        <Link
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-64}
          duration={500}
          isDynamic={true}
          className="py-8 text-center hover:bg-paradise-green-400 hover:text-black"
          onClick={handleOpenSidebar}
        >
          Serviços
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-64}
          duration={500}
          isDynamic={true}
          className="py-8 text-center hover:bg-paradise-green-400 hover:text-black"
          onClick={handleOpenSidebar}
        >
          Sobre
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-64}
          duration={500}
          isDynamic={true}
          className="py-8 text-center hover:bg-paradise-green-400 hover:text-black"
          onClick={handleOpenSidebar}
        >
          Contato
        </Link>
      </nav>
      <div className="mx-8 h-px bg-white" />
      <div className="flex h-1/4 items-center justify-evenly">
        <FacebookLogo size={32} />
        <InstagramLogo size={32} />
        <WhatsappLogo size={32} />
      </div>
    </div>
  )
}
