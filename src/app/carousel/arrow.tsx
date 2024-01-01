import { CaretLeft, CaretRight } from '@phosphor-icons/react'

export default function Arrow(props: {
  disabled: boolean
  left?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (e: any) => void
}) {
  return (
    <svg
      onClick={props.onClick}
      className={`absolute top-2/4 hidden h-8 w-8 -translate-y-2/4 cursor-pointer hover:text-paradise-yellow-600 md:flex ${
        props.left ? 'left-2' : 'left-auto right-2'
      }`}
    >
      {props.left && <CaretLeft size={28} />}
      {!props.left && <CaretRight size={28} />}
    </svg>
  )
}
