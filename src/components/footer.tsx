import React from 'react'

export default function Footer() {
  return (
    <div className=" bg-paradise-green-600 px-4 py-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Estrada Real</h1>
        <p>Estrada Césare Zangrandi nº 1000</p>
        <p>Colonia do Piagui</p>
        <p>Guaratinguetá - SP</p>
      </div>
      <div className="bg-paradise-zinc-900 m-8 h-px" />
      <span className="flex justify-center text-center">
        Todos os direitos reservados para Paradise Eventos | 2024
      </span>
    </div>
  )
}
