'use client'
import Link from "next/link";
import Image from "next/image";
import BlurFade from "@/components/ui/blur-fade";
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
        {src: "/PHP.png", alt: "Php"},
        {src: "/synfo.png", alt: "Symfony"},
        {src: "/cy.png", alt: "Cypress"},

    ];

    return (
        <div id="home" className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-8">
                {/* Image ronde agrandie */}
                <BlurFade delay={0.0125} inView>
                    <Image
                        className="w-64 h-64 rounded-full object-cover mt-8 mb-8"
                        src="/antojaposaka.jpg"
                        height={192}
                        width={192}
                        alt="anto"
                    />
                </BlurFade>

                {/* Texte à droite */}
                <div className="flex flex-col">
                    <BlurFade delay={0.0125} inView>
                        <p className="text-2xl font-bold text-black dark:text-white">Anthony Lybliamay</p>
                        <p className="text-xl text-gray-600 dark:text-gray-300">Développeur Junior en BTS SIO SLAM</p>
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
                                <div className="p-6">
                                    <ProjectCard
                                        title="Mon Projet sur le tourisme en Corée du Sud - KTourism"
                                        description="En 2019, j’ai eu l’opportunité de voyager en Corée du Sud, une expérience qui a profondément marqué ma vision du monde. Dès mon arrivée, j’ai été captivé par la richesse de la culture coréenne : son histoire fascinante, sa cuisine savoureuse, ses paysages époustouflants et, bien sûr, l’accueil chaleureux de ses habitants. Depuis ce voyage, ma passion pour la culture coréenne n’a cessé de grandir. C’est ainsi qu’est née l’idée de ce projet : un site dédié au tourisme en Corée du Sud."
                                        imageUrl="/ktourism.jpg"
                                    />
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-full md:basis-2/3 lg:basis-1/2">
                                <div className="p-6">
                                    <ProjectCard
                                        title="AP1 - Gestion de fiche de frais"
                                        description="Application de gestion de fiches de frais développée sous Windows Forms. Elle permet aux visiteurs de saisir leurs frais professionnels
                                        (repas, déplacements, hébergement, etc.) et à l’administrateur de valider, modifier ou refuser les notes de frais. L'application propose une interface intuitive,
                                         une gestion des utilisateurs par rôle et un suivi clair des remboursements. Idéale pour les entreprises souhaitant simplifier la gestion des dépenses."
                                        imageUrl="/ap1.png"
                                    />
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-full md:basis-2/3 lg:basis-1/2">
                                <div className="p-6">
                                    <ProjectCard
                                        title="AP2 - Gestion des ordonnances"
                                        description="Application web de gestion d’ordonnances médicales développée avec C#, asp net core MVC et dotnet. Elle propose une interface responsive
                                        permettant aux médecins de gérer efficacement les ordonnances, avec un accès à la liste des patients, leurs antécédents médicaux, allergies,
                                        et traitements en cours. Elle inclut également une gestion des utilisateurs par rôle, facilitant l’organisation au sein des établissements de santé."
                                        imageUrl="/ap2.png"
                                    />
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-full md:basis-2/3 lg:basis-1/2">
                                <div className="p-6">
                                    <Link href="https://ap3.anthonylybliamay.fr" target="_blank"
                                          rel="noopener noreferrer">
                                        <ProjectCard
                                            title="AP3 - Gestion de Stock"
                                            description="Application web de gestion de stock de médicaments avec commandes en ligne, développée en React et Next.js. Elle offre
                                             une interface responsive, un suivi de stock en temps réel, un système de commande, et une gestion des utilisateurs par rôle. Idéale
                                              pour les pharmacies et établissements de santé."
                                            imageUrl="/ap3.png"
                                        />
                                    </Link>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-full md:basis-2/3 lg:basis-1/2">
                                <div className="p-6">
                                    <ProjectCard
                                        title="AP4 - Réservation de terrain de sport"
                                        description="Anto'Five est une application mobile de réservation de terrains de sport (football, basket, padel, badminton), pensée pour
                                        offrir une expérience rapide, fluide et sécurisée. Elle permet de consulter les disponibilités en temps réel, réserver facilement, gérer
                                        ses réservations et participer à des tournois. Développée en React Native avec Expo et propulsée par Supabase, Anto'Five s’adresse à tous
                                         les passionnés de sport, amateurs comme compétiteurs."
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