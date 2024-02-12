'use client'

// import Link from 'next/link'
import { Rotate as Hamburger } from 'hamburger-react'
import { Sidebar } from './sidebar'
import { createContext, useState } from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
import { Envelope } from '@phosphor-icons/react'

interface OpenSidebarProps {
  openSidebar: boolean
  handleOpenSidebar: () => void
}

export const MobileContext = createContext({} as OpenSidebarProps)

export function Header() {
  const [openSidebar, setOpenSidebar] = useState(false)

  function handleOpenSidebar() {
    setOpenSidebar(!openSidebar)
  }

  return (
    <MobileContext.Provider value={{ openSidebar, handleOpenSidebar }}>
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between bg-paradise-green-300 px-8 text-paradise-zinc-900 md:h-20">
        <Image
          src="/paradise01.svg"
          alt=""
          width={100}
          height={100}
          quality={100}
          className="w-32 md:w-40"
        />
        <div className="md:hidden">
          <Hamburger
            toggled={openSidebar}
            toggle={setOpenSidebar}
            color={`${openSidebar ? '#fff' : '#000'}`}
            size={28}
            duration={0.3}
            rounded
            easing="ease-in"
          />
        </div>
        <Sidebar />
        <nav className="hidden items-center gap-4 font-meaculpa text-2xl md:flex">
          <Link
            activeClass="text-paradise-yellow-600 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:rounded-t after:bg-paradise-yellow-600 after:content-['']"
            to="services"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
            isDynamic={true}
            className="relative inline-block h-20 cursor-pointer px-4 leading-[80px] transition duration-200 hover:text-paradise-yellow-600 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-[3px] hover:after:w-full hover:after:rounded-t hover:after:bg-paradise-yellow-600 hover:after:content-['']"
          >
            Serviços
          </Link>
          <Link
            activeClass="text-paradise-yellow-600 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:rounded-t after:bg-paradise-yellow-600 after:content-['']"
            to="about"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
            isDynamic={true}
            className="relative inline-block h-20 cursor-pointer px-4 leading-[80px] transition duration-200 hover:text-paradise-yellow-600 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-[3px] hover:after:w-full hover:after:rounded-t hover:after:bg-paradise-yellow-600 hover:after:content-['']"
          >
            Sobre
          </Link>
        </nav>
        <div className="hidden items-center gap-4 font-meaculpa text-2xl md:flex">
          <Link
            activeClass="bg-paradise-yellow-600"
            to="contact"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
            isDynamic={true}
            className="flex cursor-pointer items-center justify-center gap-2 rounded bg-paradise-green-600 px-4 py-2 font-medium text-white transition duration-200 hover:bg-paradise-yellow-600"
          >
            <Envelope size={24} />
            Contato
          </Link>
        </div>
      </header>
    </MobileContext.Provider>
  )
}
