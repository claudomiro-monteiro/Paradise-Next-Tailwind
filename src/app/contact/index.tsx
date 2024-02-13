'use client'

import {
  At,
  DeviceMobile,
  Envelope,
  EnvelopeOpen,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  PaperPlaneRight,
  Phone,
  UserCircle,
} from '@phosphor-icons/react'
import { Form } from '../../components/form'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'

const createFormSchema = z.object({
  name: z
    .string()
    .nonempty({ message: 'Digite seu nome.' })
    .min(3, { message: 'Digite um nome válido.' }),
  lastname: z
    .string()
    .nonempty({ message: 'Digite seu nome.' })
    .min(3, { message: 'Digite um nome válido.' }),
  email: z
    .string()
    .nonempty({ message: 'Digite seu email.' })
    .email({ message: 'Digite um email válido.' }),
  cellphone: z
    .string()
    .nonempty({ message: 'Digite seu telefone.' })
    .min(15, { message: 'Digite um telefone válido.' }),
  message: z
    .string()
    .nonempty({ message: 'Digite sua mensagem.' })
    .min(10, { message: 'Digite no minimo 10 caracteres.' }),
})

type CreateFormData = z.infer<typeof createFormSchema>

export function Contact() {
  const createForm = useForm<CreateFormData>({
    resolver: zodResolver(createFormSchema),
  })

  const { handleSubmit } = createForm

  function newContact(data: CreateFormData) {
    console.log(data)
  }

  return (
    <div className="px-4 py-8" id="contact">
      <h1 className="font-meaculpa text-3xl">Contato</h1>
      <div className="my-4 h-px bg-paradise-zinc-900" />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 ">
        <span className="col-span-2 my-4 text-center">
          Envie uma mensagem e venha conhecer nosso espaço.
        </span>
        <FormProvider {...createForm}>
          <form
            id="send"
            onSubmit={handleSubmit(newContact)}
            className="grid grid-cols-1 gap-4"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Form.Field>
                <Form.Prefix>
                  <UserCircle size={28} />
                </Form.Prefix>
                <Form.Input placeholder="Nome" name="name" />
              </Form.Field>
              <Form.ErrorMessage field="name" />
              <Form.Field>
                <Form.Prefix>
                  <UserCircle size={28} />
                </Form.Prefix>
                <Form.Input placeholder="Sobrenome" name="lastname" />
              </Form.Field>
              <Form.ErrorMessage field="lastname" />
            </div>
            <Form.Field>
              <Form.Prefix>
                <At size={28} />
              </Form.Prefix>
              <Form.Input
                placeholder="paradiseeventos@gmail.com"
                name="email"
              />
            </Form.Field>
            <Form.ErrorMessage field="email" />
            <Form.Field>
              <Form.Prefix>
                <DeviceMobile size={28} />
              </Form.Prefix>
              <Form.Input placeholder="(xx) 9 9999-9999" name="cellphone" />
            </Form.Field>
            <Form.ErrorMessage field="cellphone" />
            <Form.Field>
              <Form.Prefix>
                <EnvelopeOpen size={28} />
              </Form.Prefix>
              <Form.TextArea placeholder="Mensagem" name="message" />
            </Form.Field>
            <Form.ErrorMessage field="message" />
          </form>
          <div className="relative col-span-2 flex flex-col items-center justify-evenly rounded-md text-center text-lg md:col-span-1">
            <Image
              src="/slides/02.jpg"
              alt=""
              width={100}
              height={100}
              quality={100}
              className="w-full max-w-sm rounded-md"
            />
            <div className="absolute flex flex-col items-center gap-2 rounded-sm bg-white/10 p-2 text-sm text-black backdrop-blur-sm md:gap-4 md:p-4 md:text-lg">
              <div className="flex gap-2">
                <Envelope size={32} /> <span>paradiseeventos@gmail.com</span>
              </div>
              <div className="flex gap-2">
                <Phone size={32} /> <span>(12) 9 9999-9999</span>
              </div>
              <div className="flex gap-2">
                <MapPin size={32} /> <span>Guaratinguetá - SP - Brasil</span>
              </div>
              <div className="mt-4 flex h-1/4 gap-12">
                <FacebookLogo size={32} />
                <InstagramLogo size={32} />
                {/* <WhatsappLogo size={32} /> */}
              </div>
            </div>
          </div>
          <button
            type="submit"
            form="send"
            className="col-span-2 mt-4 flex items-center justify-center gap-2 rounded-md bg-paradise-green-300 px-9 py-2 font-meaculpa text-lg font-semibold text-black md:w-40"
          >
            Enviar
            <PaperPlaneRight size={24} />
          </button>
        </FormProvider>
      </div>
    </div>
  )
}
