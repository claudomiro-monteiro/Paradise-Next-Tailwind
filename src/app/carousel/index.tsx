'use client'

import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import slide01 from '../../../public/slides/04.jpg'
import slide02 from '../../../public/slides/02.jpg'
import slide03 from '../../../public/slides/06.jpg'
import Image from 'next/image'
import Arrow from './arrow'

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ],
  )

  return (
    <>
      <div className="relative" id="carousel">
        <div ref={sliderRef} className="keen-slider h-[60vw] md:h-[45vw]">
          <div className="keen-slider__slide">
            <Image src={slide01} alt="" className="object-contain" />
          </div>
          <div className="keen-slider__slide">
            <Image src={slide02} alt="" className="object-contain" />
          </div>
          <div className="keen-slider__slide">
            <Image src={slide03} alt="" className="object-contain" />
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}

        {loaded && instanceRef.current && (
          <div className="absolute bottom-0 flex w-full items-center justify-center py-2">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={
                    'mx-1 h-1 w-1 cursor-pointer rounded-full border-none bg-gray-950 p-[2px] focus:outline-none md:p-1' +
                    (currentSlide === idx ? ' bg-paradise-yellow-600' : '')
                  }
                ></button>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}
