'use client'
import Image from "next/image";
import { CornerUpRight } from "lucide-react";
import BlurFade from "@/components/ui/blur-fade";
import WordRotate from "@/components/ui/word-rotate";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import ProjectCard from "@/components/Project-Card/projectCard";
import React from "react";
import { Button } from "@mui/base";
import { TimelineDemo } from "@/components/timeline/timeline";

interface CarouselItemProps {
    src: string;
    alt: string;
}

export default function Home() {
    const carouselItems: CarouselItemProps[] = [
        { src: "/react.png", alt: "React Logo" },
        { src: "/next.svg", alt: "Next.js Logo" },
        { src: "/html.png", alt: "HTML Logo" },
        { src: "/css.png", alt: "CSS Logo" },
        { src: "/js.png", alt: "JavaScript Logo" },
    ];

    return (
        <div id="home" className="container mx-auto px-4">
            {/* SECTION IMAGE + PRÉSENTATION */}
            <div className="relative flex flex-col items-center">
                <BlurFade delay={0.0125} inView>
                    <Image
                        className="mt-2 mb-4 w-full max-w-xs sm:max-w-md md:max-w-lg rounded-2xl object-cover"
                        src="/antojaposaka.jpg"
                        height={500}
                        width={500}
                        alt="anto"
                    />
                </BlurFade>
                <div className="absolute flex flex-col items-center bottom-2 left-1/2 -translate-x-1/2 md:bottom-[3rem]" style={{ zIndex: 7 }}>
                    <BlurFade delay={0.0125} inView>
                        <CornerUpRight className="bg-sky-400 text-2xl" />
                        <WordRotate
                            className="bg-sky-400 text-lg sm:text-xl font-bold text-black dark:text-white text-center"
                            words={["Ici c'est moi", "Anthony", "Anto pour les intimes"]}
                        />
                    </BlurFade>
                </div>
            </div>

            {/* SECTION À PROPOS */}
            <section>
                <h1 id="about" className="scroll-m-20 pb-8 text-3xl sm:text-4xl border-b font-extrabold tracking-tight">
                    À propos de moi
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <BlurFade delay={0.0125} inView>
                        <Image
                            src="/anto-pont-londre.png"
                            alt="carre"
                            height={500}
                            width={400}
                            className="rounded-lg shadow-lg mt-4 w-full max-w-xs sm:max-w-md md:max-w-lg"
                        />
                    </BlurFade>
                    <div className="leading-7 text-justify text-sm sm:text-base w-full md:w-1/2 mt-4 md:mt-0">
                        <p>
                            Bonjour ! 👋<br />
                            Je m&apos;appelle Anthony Lybliamay, j&apos;ai 20 ans et je suis étudiant en développement web et application mobile.
                            Passionné par la technologie et l&apos;innovation, j&apos;aime explorer de nouveaux horizons, tant dans mon domaine que dans la vie.
                            Curieux et avide de découvertes, je prends plaisir à voyager, à m&apos;imprégner de nouvelles cultures et à sortir de ma zone de confort.
                            J&apos;aime aussi prendre des photos et des vidéos, capturer des moments uniques et immortaliser des paysages incroyables.
                            Le ski est une de mes grandes passions, tout comme le besoin de me reconnecter à la nature pour trouver un équilibre entre le digital et le monde réel.
                        </p>

                    </div>
                </div>
                <TimelineDemo/>
            </section>

            {/* SECTION COMPÉTENCES */}
            <section>
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl sm:text-3xl font-semibold tracking-tight">
                    Mes compétences
                </h2>
                <div className="pt-2 flex justify-center">
                    <Carousel className="w-full max-w-xs md:max-w-lg">
                        <CarouselContent>
                            {carouselItems.map((item, index) => (
                                <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <Image src={item.src} alt={item.alt} width={100} height={100} className="object-contain" />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </section>

            {/* SECTION PROJETS */}
            <section>
                <h2 id="projects" className="mt-10 scroll-m-20 border-b pb-2 text-2xl sm:text-3xl font-semibold tracking-tight">
                    Mes Projets
                </h2>
                <ProjectCard
                    title="Mon Projet sur le tourisme en Corée du Sud - KTourism"
                    description="En 2019, j’ai eu l’opportunité de voyager en Corée du Sud..."
                    imageUrl="/ktourism.jpg"
                />
            </section>

            {/* SECTION CV */}
            <section>
                <h2 id="cv" className="mt-10 scroll-m-20 border-b pb-2 text-2xl sm:text-3xl font-semibold tracking-tight">
                    Mon Curriculum Vitae
                </h2>
                <div className="mt-5 flex flex-col items-center">
                    <a href="/cv.pdf" download="CV_ANTHONY_LYBLIAMAY.pdf">
                        <Image src="/cv.png" alt="curriculum vitae" width={300} height={300} className="mt-5 w-full max-w-xs sm:max-w-sm md:max-w-md" />
                    </a>
                    <a href="/cv.pdf" download="CV_ANTHONY_LYBLIAMAY.pdf">
                        <Button className="mt-4">📄 Télécharger mon CV</Button>
                    </a>
                </div>
            </section>
        </div>
    );
}