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
                    className="w-full "
                >
                    <section className="w-full">
                        <Card className="py-10">
                            <CardContent>
                                <div className="grid gap-6">
                                    <div className="px-4 md:px-6 lg:px-8">
                                        <div className="space-y-2">
                                            <h1 className="text-3xl font-extrabold tracking-tight">Cuidados de Saúde</h1>
                                            <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800" id="vacina">Vacina</div>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 dark:border-gray-800" />
                                    <div className="px-4 md:px-6 lg:px-8 space-y-4">
                                        <p className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                                            A vacina contra a dengue já está disponível na maioria das cidades do país para crianças de 10 a 14 anos. A Qdenga não é indicada para gestantes, lactantes, pessoas com mais de 60 anos e pessoas com imunodeficiências primárias ou adquiridas.
                                            Desenvolvida pela farmacêutica japonesa Takeda, a vacina possui vírus vivo atenuado da dengue, induzindo respostas imunológicas contra quatro sorotipos. O sistema é de duas doses aplicadas em um intervalo de 3 meses e está disponível no SUS (Sistema Único de Saúde) e também em algumas redes particulares.
                                        </p>
                                    </div>
                                </div>
                                <div className="grid gap-6 py-12">
                                    <div className="px-4 md:px-6 lg:px-8">
                                        <div className="space-y-2">
                                            <span id="medicamentos"></span>
                                            <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Medicamentos Contra Indicados</div>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 dark:border-gray-800" />
                                    <div className="px-4 md:px-6 lg:px-8 space-y-4">
                                        <div className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                                            É comum presenciarmos desde a infância, anúncios em meio aos programas de TV, que se referem as medicações contraindicadas em casos de tal doença. Decorrente disso, a dengue não estaria de fora, tendo como contraindicações:<br />
                                            - Antibióticos: A dengue é causada por um vírus, e os antibióticos tem como função tratar as infecções causadas por bactérias, por isso seria ineficaz. <br />
                                            - Ivermectina: Esse medicamento é utilizado para tratar &quot;parasitas&quot; como piolhos e carrapatos. Não é recomendado em casos de dengue pois pode aumentar o sangramento, causar vômitos, náuseas, diarreia e erupções na pele. Decorrente desses fatores, dificultaria o diagnóstico correto da doença.<br />
                                            - Anti-inflamatórios: Os anti-inflamatórios, por exemplo ibuprofeno, aspirina e naproxeno podem aumentar o nível de sangramento, por isso são contraindicados.<br />
                                            - Corticoides: Esses medicamentos podem agravar o quadro clínico da doença. Eles suprimem o sistema imunológico, o que dificulta o organismo a combater a dengue e faz com que a infecção se espalhe mais e mais. Sendo assim, contraindicado em casos de suspeita de dengue.<br />
                                        </div>
                                    </div>

                                </div>
                            </CardContent>
                        </Card>

                        <Card className="w-full my-5">
                            <CardHeader>
                                <CardTitle>
                                    Escrito por: Helen Dias e Ana Beatriz Monteiro
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
                                                <AvatarImage src="images/team/helen.png" />
                                                <AvatarFallback>H</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="text-sm font-medium leading-none">Helen Dias</p>
                                                <p className="text-sm text-muted-foreground">Responsável por escrever o artigo: <br /> &quot;Vacina&quot;</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className="flex-1">
                                    <CardContent>
                                        <div className="flex items-center space-x-4 py-5">
                                            <Avatar>
                                                <AvatarImage src="images/team/bia.png" />
                                                <AvatarFallback>B</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="text-sm font-medium leading-none">Ana Beatriz Monteiro</p>
                                                <p className="text-sm text-muted-foreground">Responsável por escrever o artigo: <br /> &quot;Medicamentos Contra Indicados&quot;</p>
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
