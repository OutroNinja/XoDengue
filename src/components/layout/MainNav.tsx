"use client"

import { MainNavItem } from "@/app/types/site"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FC } from "react"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu"
import React from "react"
import { ComboboxDemo } from "../ComboBox"
import { siteConfig } from "@/config/site"
import Image from "next/image"
interface MainNavProps {
    items?: MainNavItem[]
}
const MainNav: FC<MainNavProps> = () => {
    const pathname = usePathname();
    return (
        <>
            <div className="hidden md:block bg-[#004730] w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center border-b-2 border-green-600 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-between gap-5 lg:w-0 flex-1 items-center">
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
                            <div className="flex items-center">
                                <ComboboxDemo />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#006747] py-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center">
                            <NavigationMenu className="hidden md:block">
                                <NavigationMenuList>
                                    {Object.entries(siteConfig.navItems).map(([groupName, groupItems]) => (
                                        groupName !== "Estátisticas" && (
                                            <NavigationMenuItem key={groupName}>
                                                <NavigationMenuTrigger className="text-12xl">{groupName}</NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                    <ul className="w-[200px] gap-3 p-4 md:w-[300px] lg:w-[400px]">
                                                        {groupItems
                                                            .map((item) => (
                                                                <ListItem
                                                                    key={item.title}
                                                                    title={item.title}
                                                                    href={item.href}
                                                                />
                                                            ))}
                                                    </ul>
                                                </NavigationMenuContent>
                                            </NavigationMenuItem>
                                        )
                                    ))}

                                    <NavigationMenuItem>
                                        <Link href="/estatisticas" legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                <p className="text-12xl hidden md:inline-block">Estatísticas</p>
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainNav

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground md:inline-block",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
