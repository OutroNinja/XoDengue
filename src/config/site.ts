export type SiteConfig = typeof siteConfig

const links = {
    github: "https://github.com/outroninja/DengueBeGone",
    githubAccount: "https://github.com/outroninja"
}

export const siteConfig = {
    name: "Xô Dengue",
    description: "Dengue; O que é? Maneiras de Prevenção; Lugares mais Afetados",
    url: process.env.NEXT_PUBLIC_APP_URL,
    sourceCode: links.github,
    navItems: {
        "Conheça a Dengue": [
            {
                title: "Como é transmitida?",
                href: "/dengue#transmissão",
            },
            {
                title: "Formas de Prevenção",
                href: "/dengue#preveninir"
            },
            {
                title: "Sintomas",
                href: "/dengue#sintomas"
            }
        ],
        "Cuidados de Saúde": [
            {
                title: "Vacina",
                href: "/cuidados#vacina",
            },
            {
                title: "Medicamentos Contra Indicados",
                href: "/cuidados#medicamentos"
            },
        ],
        "Estátisticas": [
            {
                title: "Estátisticas",
                href: "/estatisticas",
            }
        ]
    },
}