// import Image from 'next/image'

import { About } from './about'
import Carousel from './carousel'
import { Contact } from './contact'
import { Services } from './services'

export default function Home() {
  return (
    <div className="">
      <Carousel />
      <Services />
      <About />
      <Contact />
    </div>
  )
}
