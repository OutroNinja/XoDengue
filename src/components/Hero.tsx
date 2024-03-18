"use client"

import { LazyMotion, domAnimation, m } from "framer-motion"
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/constans"
import { Button } from "./ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
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
                className="py-10 md:py-0 flex items-center justify-center w-full"
            >
                <m.div
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    className="w-full"
                >
                    <div className="w-full min-h-screen items-center justify-center flex">
                        <div className="container flex flex-col items-center gap-8 px-4 md:px-6">
                            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                                <div className="flex flex-col gap-4 max-w-[600px] mx-auto text-justify order-2 md:order-1">
                                    <p className="text-2xl font-bold tracking-tighter sm:text-5xl">Tudo que você precisa saber sobre a dengue</p>
                                    <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        A dengue é uma doença viral transmitida pela picada do mosquito Aedes aegypti. Os sintomas incluem, febre alta, dores no corpo e articulações, além de dor de cabeça e atrás dos olhos.
                                    </p>
                                </div>
                                <div className="flex justify-center order-1 md:order-2">
                                    <LazyLoadImage
                                        alt="Dengue Banner"
                                        height="160"
                                        width="400"
                                        src="/images/dengue_banner.png"
                                        placeholderSrc="/images/dengue_banner.png"
                                        effect="blur"
                                        className="overflow-hidden rounded-xl object-cover object-center aspect-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="order-2 md:order-1 text-center md:text-left">
                                    <h2 className="text-3xl font-bold mb-4">Prevenir é cuidar de todos</h2>
                                    <p className="mb-6 max-w-lg">
                                        Dicas simples podem ajudar na prevenção contra a dengue, que ao serem adotadas, farão a diferença para toda
                                        a sociedade.
                                    </p>
                                    <Button className="bg-green-500 text-white" variant="green_rounded" asChild>
                                        <Link href="/dengue#prevenir">Saiba Mais<ChevronRight size="20" /></Link>
                                    </Button>
                                </div>
                                <div className="order-1 md:order-2 mx-auto">
                                    <LazyLoadImage
                                        alt="Prevenção contra a dengue"
                                        height="300"
                                        width="450"
                                        src="/images/pneu.jpg"
                                        placeholderSrc="/images/pneu.jpg"
                                        effect="blur"
                                        style={{
                                            aspectRatio: "450/300",
                                            objectFit: "cover",
                                        }}
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                                <div>
                                    <LazyLoadImage
                                        alt="Vacinação"
                                        height="300"
                                        width="450"
                                        src="/images/vacina.png"
                                        placeholderSrc="/images/vacina.png"
                                        effect="blur"
                                        style={{
                                            aspectRatio: "450/300",
                                            objectFit: "cover",
                                        }}
                                        className="rounded-lg"
                                    />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-3xl font-bold mb-4">Imunizante Qdenga: uma grande conquista</h2>
                                    <p>
                                        A vacina contém vírus vivos atenuados da dengue, protegendo contra os quatro sorotipos desse vírus. Será
                                        oferecida pelo Sistema Único de Saúde (SUS), beneficiando pessoas conforme a escala entre 4 e 60 anos.
                                    </p>
                                    <div className="flex justify-center md:justify-start mt-6">
                                        <Button className="bg-green-500 text-white" variant="green_rounded" asChild>
                                            <Link href="/cuidados#vacina">Saiba Mais<ChevronRight size="20" /></Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                                <div className="order-2 md:order-1 text-center md:text-left">
                                    <h2 className="text-3xl font-bold mb-4">Aedes aegypti: Principal vetor da dengue</h2>
                                    <p className="mb-6 max-w-lg">
                                        A doença é transmitida exclusivamente pela picada do mosquito fêmea, que adquire o vírus e pode transmitir a outras pessoas.
                                    </p>
                                    <Button className="bg-green-500 text-white" variant="green_rounded" asChild>
                                        <Link href="/dengue#transmissão">Saiba Mais<ChevronRight size="20" /></Link>
                                    </Button>
                                </div>
                                <div className="order-1 md:order-2 mx-auto">
                                    <LazyLoadImage
                                        alt="Cuidados pós-vacinação"
                                        height="300"
                                        width="450"
                                        src="/images/mosquito.png"
                                        placeholderSrc="/images/mosquito.png"
                                        effect="blur"
                                        style={{
                                            aspectRatio: "450/300",
                                            objectFit: "cover",
                                        }}
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </m.div>
            </m.div>
        </LazyMotion>
    )
}

export default Hero
