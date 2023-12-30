import { LabelHTMLAttributes } from 'react'

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

export function Label(props: LabelProps) {
  return <label {...props} />
}
