'use client'
import Link from "next/link";
import Image from "next/image";
import {CornerUpRight} from "lucide-react";
import BlurFade from "@/components/ui/blur-fade";
import WordRotate from "@/components/ui/word-rotate";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
import ProjectCard from "@/components/Project-Card/projectCard";
import React from "react";
import {Button} from "@mui/base";
import {TimelineDemo} from "@/components/timeline/timeline";

interface CarouselItemProps {
    src: string;
    alt: string;
}

export default function Home() {
    const carouselItems: CarouselItemProps[] = [
        {src: "/react.png", alt: "React Logo"},
        {src: "/next.svg", alt: "Next.js Logo"},
        {src: "/html.png", alt: "HTML Logo"},
        {src: "/css.png", alt: "CSS Logo"},
        {src: "/js.png", alt: "JavaScript Logo"},
        {src: "/expo.png", alt: "Expo Go Logo"},
    ];

    return (
        <div id="home" className="container mx-auto px-4">
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
                <div className="absolute flex flex-col items-center bottom-2 left-1/2 -translate-x-1/2 md:bottom-[3rem]"
                     style={{zIndex: 7}}>
                    <BlurFade delay={0.0125} inView>
                        <CornerUpRight className="bg-sky-400 text-2xl"/>
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
                        <div className="leading-7 text-justify">
                            <p className="mt-6">
                                Bonjour ! 👋<br/>
                                Je m&apos;appelle Anthony Lybliamay,&nbsp;j&apos;ai 20 ans et je suis
                                actuellement étudiant en développement web. Passionné par le
                                monde du numérique et de la technologie,&nbsp;je me spécialise dans
                                la création de sites et d&apos;applications web modernes et
                                performants.
                            </p>
                            <p className="mt-6">
                                Depuis que j&apos;ai découvert le code,&nbsp;j&apos;ai été captivé
                                par la possibilité de donner vie à des idées grâce à la
                                programmation. Aujourd&apos;hui,&nbsp;j&apos;affine mes compétences
                                en front-end et back-end,&nbsp;en utilisant des technologies comme
                                React,&nbsp;Node.js,&nbsp;etc.
                            </p>
                            <p className="mt-6">
                                Mon objectif est de continuer à apprendre et de contribuer à des
                                projets qui combinent créativité,&nbsp;performance et innovation.
                            </p>
                            <p className="mt-6">
                                En dehors du développement,&nbsp;j&apos;aime le ski,
                                créer du contenu (comme des vidéos et des photos),&nbsp;voyager,&nbsp;et
                                explorer de nouvelles idées.
                            </p>
                        </div>
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
                                                <Image src={item.src} alt={item.alt} width={100} height={100}
                                                       className="object-contain"/>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext/>
                    </Carousel>
                </div>
            </section>


            {/* SECTION PROJETS */}
            <section>
                <h2 id="projects"
                    className="mt-10 scroll-m-20 border-b pb-2 text-2xl sm:text-3xl font-semibold tracking-tight">
                    Mes Projets
                </h2>
                <div className="pt-2 flex justify-center">
                    <Carousel className="w-full max-w-5xl">
                        <CarouselContent>
                            <CarouselItem
                                className="basis-full md:basis-2/3 lg:basis-1/2"> {/* plus grand sur mobile et desktop */}
                                <div className="p-6"> {/* padding plus généreux */}
                                    <ProjectCard
                                        title="Mon Projet sur le tourisme en Corée du Sud - KTourism"
                                        description="En 2019, j’ai eu l’opportunité de voyager en Corée du Sud, une expérience qui a profondément marqué ma vision du monde. Dès mon arrivée, j’ai été captivé par la richesse de la culture coréenne : son histoire fascinante, sa cuisine savoureuse, ses paysages époustouflants et, bien sûr, l’accueil chaleureux de ses habitants. Depuis ce voyage, ma passion pour la culture coréenne n’a cessé de grandir. C’est ainsi qu’est née l’idée de ce projet : un site dédié au tourisme en Corée du Sud."
                                        imageUrl="/ktourism.jpg"
                                    />
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-full md:basis-2/3 lg:basis-1/2">
                                <div className="p-6">
                                    <Link href="https://ap3.anthonylybliamay.fr" target="_blank"
                                          rel="noopener noreferrer">
                                        <ProjectCard
                                            title="AP3 - Gestion de Stock"
                                            description="C'est une application de gestion de stock et de passation de commande"
                                            imageUrl="/ap3.png"
                                        />
                                    </Link>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-full md:basis-2/3 lg:basis-1/2">
                                <div className="p-6">
                                    <ProjectCard
                                        title="AP4 - Réservation de terrain de sport"
                                        description="Découvrez Anto'Five : votre nouvelle plateforme de réservation sportive
                                                    Anto'Five révolutionne la réservation de terrains de sport.
                                                    En quelques clics, trouvez et réservez des terrains de basketball, football, padel ou badminton directement depuis votre mobile.
                                                    Conçue pour offrir une expérience fluide et fiable, notre application permet aux amateurs comme aux professionnels de :
                                                    Accéder rapidement aux disponibilités des terrains en temps réel.
                                                    Réserver facilement des créneaux horaires adaptés à leur emploi du temps.
                                                    Participer à des tournois organisés régulièrement pour vivre une expérience compétitive et conviviale.
                                                    Gérer l’ensemble de leurs réservations depuis un espace personnel sécurisé.
                                                    Notre infrastructure repose sur Supabase pour garantir la rapidité des transactions et la sécurité des données.
                                                    Développée en React Native avec Expo, Anto'Five propose une interface intuitive et performante, adaptée à tous les utilisateurs.
                                                    Que vous soyez un joueur occasionnel ou un compétiteur passionné, Anto'Five vous accompagne pour vivre pleinement votre passion du sport."
                                        imageUrl="/ap4.png"
                                    />
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext/>
                    </Carousel>
                </div>
            </section>


            {/* SECTION CV */}
            <section>
                <h2 id="cv"
                    className="mt-10 scroll-m-20 border-b pb-2 text-2xl sm:text-3xl font-semibold tracking-tight">
                    Mon Curriculum Vitae
                </h2>
                <div className="mt-5 flex flex-col items-center">
                    <a href="/cv.pdf" download="CV_ANTHONY_LYBLIAMAY.pdf">
                        <Image src="/cv.png" alt="curriculum vitae" width={300} height={300}
                               className="mt-5 w-full max-w-xs sm:max-w-sm md:max-w-md"/>
                    </a>
                    <a href="/cv.pdf" download="CV_ANTHONY_LYBLIAMAY.pdf">
                        <Button className="mt-4">📄 Télécharger mon CV</Button>
                    </a>
                </div>
            </section>
        </div>
    );
}