import Image from 'next/image'

export function Services() {
  return (
    <div className="px-4 py-8" id="services">
      <h1 className="font-meaculpa text-3xl">Serviços</h1>
      <div className="my-4 h-px bg-paradise-zinc-900" />
      <h1 className="mb-4 text-center font-meaculpa text-2xl">
        Realizamos serviços memoráveis
      </h1>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
        <div className="relative w-full max-w-xs md:max-w-md">
          <Image
            src="/slides/01.jpg"
            alt=""
            width={100}
            height={100}
            quality={100}
            className="w-full rounded"
          />
          <div className="absolute bottom-4 flex w-full justify-center">
            <span className="flex rounded-md bg-white/10 px-12 py-1 font-meaculpa text-lg text-black backdrop-blur-sm">
              Formaturas
            </span>
          </div>
        </div>
        <div className="relative w-full max-w-xs md:max-w-md">
          <Image
            src="/slides/03.jpg"
            alt=""
            width={100}
            height={100}
            quality={100}
            className="w-full rounded"
          />
          <div className="absolute bottom-4 flex w-full justify-center">
            <span className="flex rounded-md bg-white/10 px-12 py-1 font-meaculpa text-lg text-black backdrop-blur-sm">
              Casamentos
            </span>
          </div>
        </div>
        <div className="relative w-full max-w-xs md:max-w-md">
          <Image
            src="/slides/05.jpg"
            alt=""
            width={100}
            height={100}
            quality={100}
            className="w-full rounded"
          />
          <div className="absolute bottom-4 flex w-full justify-center">
            <span className="flex rounded-md bg-white/10 px-12 py-1 font-meaculpa text-lg text-black backdrop-blur-sm">
              Eventos
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
