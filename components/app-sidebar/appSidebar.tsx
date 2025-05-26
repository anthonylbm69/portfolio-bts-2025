"use client"

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Home, User, Calendar, FileText, Phone, Lightbulb, Menu, X, Table2, Camera } from "lucide-react"

const navItems = [
    { label: "Accueil", href: "/", icon: Home },
    { label: "À propos", href: "#about", icon: User },
    { label: "Projets", href: "#projects", icon: Calendar },
    { label: "CV", href: "#cv", icon: FileText },
    { label: "Contact", href: "/contact", icon: Phone },
    { label: "Veille Technologique", href: "/veille-techno", icon: Lightbulb },
    { label: "Tableau de compétence", href: "/tableau-competence", icon: Table2 },
]

export default function AppSidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    const handleClick = (href: string) => {
        setIsOpen(false)

        if (href.startsWith("#") && pathname === "/") {
            const id = href.replace("#", "")
            const element = document.getElementById(id)
            if (element) {
                element.scrollIntoView({ behavior: "smooth" })
            }
        } else if (href.startsWith("#")) {
            router.push(`/?scrollTo=${href.replace("#", "")}`)
        } else {
            router.push(href)
        }
    }

    return (
        <>
            {/* Burger button mobile */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 left-4 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-300 dark:border-gray-700 shadow-md hover:scale-105 transition-all md:hidden"
            >
                {isOpen ? <X size={20} className="text-gray-900 dark:text-white" /> : <Menu size={20} className="text-gray-900 dark:text-white" />}
                <span className="sr-only">Ouvrir ou fermer le menu</span>
            </button>


            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-gray-900 shadow-md transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:shadow-none
        `}
            >
                <div className="p-4 text-lg font-semibold">Portfolio de Anthony</div>
                <nav className="flex flex-col space-y-1 px-4">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => handleClick(item.href)}
                            className="flex items-center gap-2 p-2 rounded text-left hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
                        >
                            <item.icon size={18} />
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>
            </aside>
        </>
    )
}
