"use client"

import { motion } from "framer-motion";
import { Separator } from "../ui/separator";
import Image from "next/image";

const SiteFooter = () => {
    return (
        <motion.footer
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
            className="w-full py-6"
        >
            <Separator className="my-4 bg-gray-300" />
            <div className="container flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:gap-8">
                <div className="flex items-center gap-2">
                    <Image
                        alt="Logo"
                        className="rounded-full object-cover"
                        height="32"
                        src="/images/icon.png"
                        style={{
                            aspectRatio: "32/32",
                            objectFit: "cover",
                        }}
                        width="32"
                    />
                    <p className="font-semibold">XôDengue</p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 XôDengue. Todos os direitos reservados.</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 w-80">
                    As informações fornecidas neste site são apenas para fins educacionais e não devem ser consideradas aconselhamento médico.
                </p>
                <p className="text-xs text-gray-500">
                    Criado com ❤️ por Fábio Henrique
                </p>
            </div>
        </motion.footer>
    )
}

export default SiteFooter
