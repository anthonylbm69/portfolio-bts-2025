"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Calendar, Home, User, Lightbulb, Phone, FileText } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sideBarWithStickyButton";

const items = [
    { title: "Accueil", url: "/", icon: Home },
    { title: "À propos", url: "#about", icon: User },
    { title: "Projet", url: "#projects", icon: Calendar },
    { title: "Curriculum Vitae", url: "#cv", icon: FileText },
    { title: "Contact", url: "/contact", icon: Phone },
    { title: "Veille Technologie", url: "/veille-techno", icon: Lightbulb },
];

const alwaysNavigate: string[] = ["/contact", "/veille-techno"];

function NavigationHandler() {
    const router = useRouter();
    const currentPath = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const hash = searchParams.get("scrollTo");
        if (hash) {
            setTimeout(() => {
                const section = document.getElementById(hash);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 300);
        }
    }, [searchParams]);

    const handleNavigation = (url: string) => {
        if (url === "/") {
            if (currentPath === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
                return;
            } else {
                router.push("/");
                return;
            }
        }

        if (alwaysNavigate.includes(url)) {
            router.push(url);
            return;
        }

        if (url.startsWith("#")) {
            if (currentPath !== "/") {
                router.push(`/?scrollTo=${url.substring(1)}`);
            } else {
                const section = document.getElementById(url.substring(1));
                if (section) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
            return;
        }

        router.push(url);
    };

    return (
        <>
            {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                        <button onClick={() => handleNavigation(item.url)}>
                            <item.icon />
                            <span>{item.title}</span>
                        </button>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </>
    );
}

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Portfolio de Anthony</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <Suspense fallback={<div>Chargement...</div>}>
                                <NavigationHandler />
                            </Suspense>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
