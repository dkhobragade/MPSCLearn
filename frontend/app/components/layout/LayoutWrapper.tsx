"use client"

import { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"
import { usePathname } from "next/navigation"

export default function LayoutWrapper ( { children }: { children: ReactNode } )
{
    const pathName = usePathname()
    const hideLayout = pathName === "/signup" || pathName === "/login"

    return (
        <>
            { !hideLayout && <Header /> }
            <main>
                { children }
            </main>
            { !hideLayout && <Footer /> }
        </>
    )
}