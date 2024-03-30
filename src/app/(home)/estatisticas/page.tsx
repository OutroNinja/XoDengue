"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/constans"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { LazyMotion, domAnimation, m } from "framer-motion"
import { LazyLoadImage } from "react-lazy-load-image-component"
import Link from "next/link"

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
                        <Card>
                            <CardContent>
                                <div className="grid gap-6 pt-16">
                                    <div className="px-4 md:px-6 lg:px-8">
                                        <div className="space-y-2">
                                            <h1 className="text-3xl font-extrabold tracking-tight">Estátisticas</h1>
                                            <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800" id="vacina">Dengue no Brasil</div>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 dark:border-gray-800" />
                                    <div className="px-4 md:px-6 lg:px-8 space-y-4">
                                        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                                            <LazyLoadImage
                                                alt="Mapa"
                                                height="940"
                                                width="788"
                                                src="/images/mapa.png"
                                                placeholderSrc="/images/mapa.png"
                                                effect="blur"
                                                style={{
                                                    aspectRatio: "940/788",
                                                    objectFit: "cover",
                                                }}
                                                className="rounded-lg"
                                            />
                                            <p className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                                                Estados com maiores número de casos prováveis:<br />
                                                • Minas Gerais (513.538);<br />
                                                • São Paulo (285. 134);<br />
                                                • Paraná (149.134);<br />
                                                • Distrito Federal (137.050);<br /><br />
                                                Estados com maior coeficiente de incidência:<br />
                                                • Distrito Federal com  4.865 casos por 100 mil habitantes;<br />
                                                • Minas Gerais (2.500,3);<br />
                                                • Espírito Santo (1.490,2);<br />
                                                • Paraná (1.303,3);<br /><br />
                                                Até março, o Brasil registrou mais de 1,5 milhão de casos prováveis da doença  e 700 mil casos já confirmados. A média nacional é de 345 casos por 100 mil habitantes do Brasil.
                                                Em torno de 391 mortes por dengue já foram confirmadas e 854 estão sendo investigadas. Dados apontam que os maiores registros de dengue são de 55,5% de mulheres e 44,5% de homens. Com a faixa etária entre pessoas de 30 a 39 anos, principalmente, e  seguida de pessoas entre 40 a 49 anos e 50 a 59 anos.
                                                Até o momento, sete estados brasileiros e o distrito federal decretaram estado de emergência, dentre eles:<br />
                                                • Acre;<br />
                                                • Distrito Federal;<br />
                                                • Goiás;<br />
                                                • Rio de Janeiro;<br />
                                                • Espírito Santo<br />
                                                • Santa Catarina<br />
                                                • São Paulo<br />
                                                • Minas Gerais<br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <CardFooter className="text-gray-400 select-none grid">
                                    Refêrencias Bibliográficas:
                                    <Link href="https://agenciabrasil.ebc.com.br/saude/noticia/2024-03/brasil-tem-391-mortes-por-dengue">• https://agenciabrasil.ebc.com.br/saude/noticia/2024-03/brasil-tem-391-mortes-por-dengue (11/03/2024)</Link>
                                </CardFooter>
                            </CardContent>
                        </Card>

                        <Card className="w-full my-5">
                            <CardHeader>
                                <CardTitle>
                                    Escrito por: Letícia Silva Parreiras
                                </CardTitle>
                                <CardDescription>
                                    Aluna da Escola Estadual Professor Morais, cursando o 2º ano do ensino médio (2024)
                                </CardDescription>
                            </CardHeader>
                            <div className="py-5 px-5 w-full flex flex-col md:flex-row gap-5 items-center justify-start">
                                <Card className="flex-1">
                                    <CardContent>
                                        <div className="flex items-center space-x-4 py-5">
                                            <Avatar>
                                                <AvatarImage src="images/team/leticia.png" />
                                                <AvatarFallback>L</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="text-sm font-medium leading-none">Letícia Silva Parreiras</p>
                                                <p className="text-sm text-muted-foreground">Responsável por escrever o artigo &quot;Estatísticas&quot;.</p>
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
