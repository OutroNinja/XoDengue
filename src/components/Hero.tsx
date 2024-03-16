"use client"

import { LazyMotion, domAnimation, m } from "framer-motion"
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/constans"
import { Button } from "./ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

const Hero = () => {
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                initial="hidden"
                animate="show"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
                className="my-20 flex items-center justify-center w-full py-6"
            >
                <m.div
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    className="w-full"
                >
                    <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
                        <div className="container px-4 md:px-6">
                            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                                <Image
                                    alt="Hero"
                                    className="amx-auto overflow-hidden rounded-xl object-cover object-center lg:order-last relative"
                                    src="/images/vacina.png"
                                    width="800"
                                    height="800"
                                />

                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tighter">
                                            Tudo que você precisa saber sobre a dengue
                                        </h1>
                                        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                            A dengue é uma doença viral transmitida pela picada do mosquito Aedes aegypti. Os sintomas incluem febre alta, dores no corpo e articulações, além de dor de cabeça e atrás dos olhos.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="space-y-9">
                        <div className="grid md:grid-cols-2 items-center justify-center">
                            <div className="grid w-full items-stretch justify-center p-4">
                                <Image
                                    alt="Image"
                                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                                    src="/images/mosquito.png"
                                    width="550"
                                    height="550"
                                />
                            </div>
                            <div className="mx-auto space-y-4 md:space-y-6">
                                <div className="space-y-4">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">Aedes aegypti: Principal vetor da dengue</h2>
                                    <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        A doença é transmitida exclusivamente pela picada do mosquito fêmea, que adquire o vírus e pode transmitir a outras pessoas.
                                    </p>
                                </div>
                                <Button variant="green_rounded" className="gap-3" asChild>
                                    <Link href="/dengue#transmissão">Saiba Mais<ChevronRight size="20" /></Link>
                                </Button>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 items-center justify-center">
                            <div className="mx-auto space-y-4 md:space-y-6 md:order-1 order-2">
                                <div className="space-y-4">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">Prevenir é cuidar de todos</h2>
                                    <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        Dicas simples podem ajudar na prevenção contra a dengue, que ao serem adotadas, farão a diferença para toda a sociedade.
                                    </p>
                                </div>
                                <Button variant="green_rounded" className="gap-3" asChild>
                                    <Link href="/dengue#prevenir">Saiba Mais<ChevronRight size="20" /></Link>
                                </Button>
                            </div>
                            <div className="grid w-full items-stretch justify-center p-4 md:order-2 order-1">
                                <Image
                                    alt="Image"
                                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                                    src="/images/pneu.jpg"
                                    width="550"
                                    height="550"
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 items-center justify-center">
                            <div className="grid w-full items-stretch justify-center p-4">
                                <Image
                                    alt="Image"
                                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                                    src="/images/vacina.png"
                                    width="550"
                                    height="550"
                                />
                            </div>
                            <div className="mx-auto space-y-4 md:space-y-6">
                                <div className="space-y-4">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">Imunizante Qdenga: uma grande conquista</h2>
                                    <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        A vacina contém vírus vivos atenuados da dengue, protegendo contra os quatro sorotipos desse vírus. Será oferecida pelo Sistema Único de Saúde (SUS), beneficiando pessoas conforme a escala entre 4 a 60 anos.
                                    </p>
                                </div>
                                <Button variant="green_rounded" className="gap-3" asChild>
                                    <Link href="/cuidados#vacina">Saiba Mais<ChevronRight size="20" /></Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </m.div>
            </m.div>
        </LazyMotion>
    )
}

export default Hero
