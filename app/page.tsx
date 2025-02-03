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
    // Déclaration explicite du tableau d'éléments avec le type CarouselItemProps[]
    const carouselItems: CarouselItemProps[] = [
        { src: "/react.png", alt: "React Logo" },
        { src: "/next.svg", alt: "Next.js Logo" },
        { src: "/html.png", alt: "HTML Logo" },
        { src: "/css.png", alt: "CSS Logo" },
        { src: "/js.png", alt: "JavaScript Logo" },
    ];

    return (
        <>
            <div id="home" className="md:container md:mx-auto">
                <div className="relative flex items-center justify-center">
                    <div
                        className="absolute flex flex-col items-center"
                        style={{ bottom: "10rem", left: "25rem", zIndex: "7" }}
                    >
                        <BlurFade delay={0.25 * 0.05} inView>
                            <CornerUpRight className="bg-sky-400 text-2xl" />
                            <WordRotate
                                className="bg-sky-400 text-2xl font-bold text-black dark:text-white"
                                words={["Ici c'est moi", "Anthony", "Anto pour les intimes"]}
                            />
                        </BlurFade>
                    </div>
                    <BlurFade delay={0.25 * 0.05} inView>
                        <Image
                            className="mt-2 mb-4 size-full rounded-2xl object-contain"
                            src="/antojaposaka.jpg"
                            height={500}
                            width={500}
                            alt="anto"
                        />
                    </BlurFade>
                </div>

                <div>
                    <h1 id="about" className="scroll-m-20 pb-8 text-4xl border-b font-extrabold tracking-tight lg:text-5xl">
                        À propos de moi
                    </h1>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        <BlurFade delay={0.25 * 0.05} inView>
                            <Image
                                src="/DSC04686.JPG"
                                alt="carre"
                                height={500}
                                width={400}
                                className="rounded-lg shadow-lg mt-4"
                            />
                        </BlurFade>
                        <div className="leading-7">
                            <p className="mt-6">
                                Bonjour ! 👋<br />
                                Je m&apos;appelle Anthony Lybliamay,&nbsp; j&apos;ai 20 ans et je suis
                                actuellement étudiant en développement web. Passionné par le
                                monde du numérique et de la technologie,&nbsp; je me spécialise dans
                                la création de sites et d&apos;applications web modernes et
                                performants.
                            </p>
                            <p className="mt-6">
                                Depuis que j&apos;ai découvert le code,&nbsp; j&apos;ai été captivé
                                par la possibilité de donner vie à des idées grâce à la
                                programmation. Aujourd&apos;hui,&nbsp; j&apos;affine mes compétences
                                en front-end et back-end,&nbsp; en utilisant des technologies comme
                                React,&nbsp; Node.js,&nbsp; etc.
                            </p>
                            <p className="mt-6">
                                Mon objectif est de continuer à apprendre et de contribuer à des
                                projets qui combinent créativité,&nbsp; performance et innovation.
                            </p>
                            <p className="mt-6">
                                En dehors du développement,&nbsp; j&apos;aime jouer aux jeux vidéo,
                                créer du contenu (comme des vidéos et des photos),&nbsp; voyager,&nbsp; et
                                explorer de nouvelles idées.
                            </p>
                        </div>
                    </div>

                    <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Mes compétences
                    </h2>
                    <div className="pt-2 flex items-center justify-center">
                        <Carousel
                            opts={{
                                align: "start",
                            }}
                            className="w-full max-w-xs"
                        >
                            <CarouselContent>
                                {carouselItems.map((item: CarouselItemProps, index: number) => (
                                    <CarouselItem
                                        key={index}
                                        className="md:basis-1/2 lg:basis-1/3"
                                    >
                                        <div className="p-1">
                                            <Card>
                                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                                    <Image
                                                        src={item.src}
                                                        alt={item.alt}
                                                        width={200}
                                                        height={200}
                                                        className="object-contain"
                                                    />
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

                    <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Mon Parcours
                    </h2>
                    <TimelineDemo />

                    <h2 id="projects" className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Mes Projets
                    </h2>
                    <ProjectCard
                        title="Mon Projet sur le tourisme en Corée du Sud - KTourism"
                        description="En 2019, j’ai eu l’opportunité de voyager en Corée du Sud, une expérience qui a profondément marqué ma vision du monde. Dès mon arrivée, j’ai été captivé par la richesse de la culture coréenne : son histoire fascinante, sa cuisine savoureuse, ses paysages époustouflants et, bien sûr, l’accueil chaleureux de ses habitants.
                        Depuis ce voyage, ma passion pour la culture coréenne n’a cessé de grandir. C’est ainsi qu’est née l’idée de ce projet : un site dédié au tourisme en Corée du Sud. Mon objectif est de partager mon expérience et de guider celles et ceux qui souhaitent découvrir ce pays unique.
                        Sur ce site, vous trouverez des conseils pratiques, des itinéraires de voyage, des recommandations de lieux incontournables et une immersion dans la culture coréenne à travers ses traditions, sa gastronomie et sa modernité.
                        Que vous soyez un voyageur en quête d’aventure ou simplement curieux de découvrir la Corée du Sud, j’espère que ce projet vous inspirera autant qu’il m’a passionné !"
                        imageUrl="/ktourism.jpg"
                    />
                    <div>
                        <h2 id="cv" className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                            Mon Curriculum Vitae
                        </h2>
                        <div className="mt-5 flex flex-col items-center justify-center">
                            <a href="/cv.pdf" download="CV_ANTHONY_LYBLIAMAY.pdf">
                                <Image
                                    src={'/cv.png'}
                                    alt={'curriculum vitae'}
                                    width={400}
                                    height={400}
                                    className="mt-5 flex items-center justify-between"
                                />
                            </a>
                        </div>
                        <div className="mt-5 flex flex-col items-center justify-center">
                            <a href="/cv.pdf" download="CV_ANTHONY_LYBLIAMAY.pdf">
                                <Button className="ml-4">📄 Télécharger mon CV</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
