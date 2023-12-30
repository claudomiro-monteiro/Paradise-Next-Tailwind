import { HTMLAttributes } from 'react'

export type FieldProps = HTMLAttributes<HTMLDivElement>

export function Field(props: FieldProps) {
  return (
    <div
      className="border-paradise-zinc-900 flex w-full items-start gap-2 rounded-lg border px-3 py-2 shadow-sm focus-within:border-paradise-green-400 focus-within:ring-2 focus-within:ring-paradise-green-300"
      {...props}
    />
  )
}
