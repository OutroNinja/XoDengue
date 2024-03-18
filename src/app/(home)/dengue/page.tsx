"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/constans";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function Page() {
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
                    <section className="w-full">
                        <Card className="py-10">
                            <CardContent>
                                <div className="grid gap-6">
                                    <div className="px-4 md:px-6 lg:px-8">
                                        <div className="space-y-2">
                                            <span id="transmissão"></span>
                                            <h1 className="text-3xl font-extrabold tracking-tight">Conheça a Dengue</h1>
                                            <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Como é transmitida?</div>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 dark:border-gray-800" />
                                    <div className="px-4 md:px-6 lg:px-8 space-y-4">
                                        <p className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                                            O vírus da dengue é transmitido através da picada do mosquito Aedes aegypti. É importante ressaltar que a dengue não é passada de pessoa para pessoa, apenas a contraímos pela picada do mosquito. A dengue não é a única doença que o mosquito Aedes aegypti transmite; entre elas estão a Chikungunya, Zika e Febre Amarela, que também representam preocupações na saúde pública de diversos países.
                                        </p>
                                    </div>
                                </div>
                                <div className="grid gap-6 py-12">
                                    <div className="px-4 md:px-6 lg:px-8">
                                        <div className="space-y-2">
                                            <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800" id="prevenir">Formas de prevenção</div>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 dark:border-gray-800" />
                                    <div className="px-4 md:px-6 lg:px-8 space-y-4">
                                        <p className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                                            O melhor jeito de se prevenir contra a dengue é evitar a proliferação do mosquito Aedes Aegypti, não deixando água acumulada que podem se tornar possíveis criadouros; um exemplo são os vasos de plantas, galões de água, pneus, garrafas plásticas, piscinas (abandonadas), e alguns recipientes pequenos, como tampas de garrafa.
                                        </p>
                                        <p className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                                            Uma forma de se prevenir é utilizando repelente principalmente durante o dia (onde normalmente os mosquitos são mais ativos), utilizando esse método poderá proporcionar uma proteção maior contra os mosquitos. Mosquiteiros também são uma excelente opção, principalmente para aqueles que dormem durante o dia, como bebês e trabalhadores noturnos.
                                        </p>
                                    </div>
                                </div>
                                <div className="grid gap-6 pb-6">
                                    <div className="px-4 md:px-6 lg:px-8">
                                        <div className="space-y-2">
                                            <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800" id="sintomas">Sintomas</div>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 dark:border-gray-800" />
                                    <div className="px-4 md:px-6 lg:px-8 space-y-4">
                                        <p className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                                            A dengue é uma doença que apresenta diversos sintomas que podem ser considerados leves ou graves, logo, podem ser confundidos com a gripe. Abaixo estão alguns sintomas da dengue:<br />
                                        </p>
                                        <div className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                                            • Febre alta;<br />
                                            • Dor no corpo e nas articulações;<br />
                                            • Dor atrás dos olhos;<br />
                                            • Mal-estar;<br />
                                            • Dor de cabeça;<br />
                                            • Manchas vermelhas no corpo;<br />
                                        </div>
                                        <div className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                                            A dengue hemorrágica é a forma mais grave da doença e pode levar ao óbito caso não seja tratada com urgência. Os principais sintomas são:<br />
                                            • Dor abdominal intensa;<br />
                                            • Sangramento nas gengivas ou no nariz;<br />
                                            • Fadiga;<br />
                                            • Presença de sangue nas fezes;<br />
                                            • Hipotensão postural (queda na pressão arterial após levantar);<br />
                                            • Vômitos persistentes;<br />
                                            • Hepatomegalia (aumento do fígado);<br />
                                            • Dificuldade respiratória;<br />
                                            • Letargia.<br />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="w-full my-5">
                            <CardHeader>
                                <CardTitle>
                                    Escrito por: Gabriel Lucas e Marcos Ramos
                                </CardTitle>
                                <CardDescription>
                                    Alunos da Escola Estadual Professor Morais, cursando o 2º ano do ensino médio (2024)
                                </CardDescription>
                            </CardHeader>
                            <div className="py-5 px-5 w-full flex flex-col md:flex-row gap-5 items-center justify-start">
                                <Card className="flex-1">
                                    <CardContent>
                                        <div className="flex items-center space-x-4 py-5">
                                            <Avatar>
                                                <AvatarImage src="images/team/gabriel.png" />
                                                <AvatarFallback>G</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="text-sm font-medium leading-none">Gabriel Lucas</p>
                                                <p className="text-sm text-muted-foreground">Responsável por escrever os artigos: <br /> &quot;Como é transmitida&quot; e &quot;Sintomas&quot;</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className="flex-1">
                                    <CardContent>
                                        <div className="flex items-center space-x-4 py-5">
                                            <Avatar>
                                                <AvatarImage src="images/team/marcos.png" />
                                                <AvatarFallback>M</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="text-sm font-medium leading-none">Marcos Ramos</p>
                                                <p className="text-sm text-muted-foreground">Responsável por escrever o artigo: <br /> &quot;Formas de Prevenção&quot;</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </Card>
                    </section>
                </m.div>
            </m.div>
        </LazyMotion>
    )
}
