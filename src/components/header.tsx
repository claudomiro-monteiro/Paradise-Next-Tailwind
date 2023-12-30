'use client'

// import Link from 'next/link'
import { Rotate as Hamburger } from 'hamburger-react'
import { Sidebar } from './sidebar'
import { createContext, useState } from 'react'
import Image from 'next/image'

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
      <header className="flex h-16 items-center justify-between bg-paradise-green-300 px-8 text-white">
        <Image
          src="/paradise01.svg"
          alt=""
          width={100}
          height={100}
          quality={100}
        />
        <Hamburger
          toggled={openSidebar}
          toggle={setOpenSidebar}
          color={`${openSidebar ? '#fff' : '#000'}`}
          size={28}
          duration={0.3}
          rounded
          easing="ease-in"
        />
        <Sidebar />
      </header>

      {/* <Link href="#">Inicio</Link>
      <Link href="#">Galeria</Link>
      <Link href="#">Sobre</Link> */}
    </MobileContext.Provider>
  )
}
