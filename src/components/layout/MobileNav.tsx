"use client"

import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "../icons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteConfig } from "@/config/site";
import React from "react";
import Image from "next/image"

function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="block md:hidden bg-[#004730] w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center border-b-2 border-green-600 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-between lg:w-0 lg:flex-1 items-center">
                        <div className="flex gap-5">
                            <Link
                                aria-label="Home"
                                href="/"
                            >
                                <Image
                                    alt="ICON"
                                    className="h-8 w-auto sm:h-10 hidden md:block"
                                    height="40"
                                    src="/images/icon.png"
                                    style={{
                                        aspectRatio: "40/40",
                                        objectFit: "cover",
                                    }}
                                    width="40"
                                />
                            </Link>
                            <Link
                                aria-label="Home"
                                href="/"
                                passHref
                            >
                                <h1 className="text-white font-bold text-4xl md:inline-block">XôDengue</h1>
                            </Link>
                        </div>
                    </div>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
                            >
                                <Menu size="26" color="#fff" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-[#004730]">
                            <SheetHeader>
                                <div className="my-5">
                                    <Link
                                        aria-label="Início"
                                        href="/"
                                        className="flex items-center"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <p className="text2xl font-bold md:inline text-white">
                                            XôDengue
                                        </p>
                                    </Link>
                                </div>
                            </SheetHeader>
                            <SheetDescription className="space-y-3">
                                <Accordion type="single" collapsible>
                                    {Object.entries(siteConfig.navItems).map(([groupName, groupItems]) => (
                                        <AccordionItem key={groupName} value={groupName}>
                                            <AccordionTrigger>{groupName}</AccordionTrigger>
                                            <AccordionContent>
                                                {groupItems.map((item) => (
                                                    <Link key={item.title} href={item.href} passHref>
                                                        <div onClick={() => setIsOpen(false)} className="cursor-pointer text-sm text-gray-300 hover:font-bold transition-all">
                                                            {item.title}
                                                        </div>
                                                    </Link>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </SheetDescription>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    )
}

export default MobileNav
