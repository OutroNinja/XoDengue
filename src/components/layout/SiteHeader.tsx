"use client"

import { FADE_DOWN_ANIMATION_VARIANTS } from "@/constans";
import { motion } from "framer-motion";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const SiteHeader = () => {
    return (
        <motion.header
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
            className="sticky"
        >
            <motion.div
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                className=""
            >
                <MainNav />
                <MobileNav />
            </motion.div>
        </motion.header>
    )
}

export default SiteHeader