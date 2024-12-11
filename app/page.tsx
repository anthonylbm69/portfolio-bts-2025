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
import Timeline from "@/components/timeline/timeline";

export default function Home() {
    return (
        <>
            <div className="md:container md:mx-auto">
                {/* Section principale */}
                <div className="relative flex items-center justify-center">
                    <div
                        className="absolute flex flex-col items-center"
                        style={{ bottom: "10rem", left: "20rem", zIndex: "7" }}
                    >
                        <BlurFade delay={0.25 * 0.05} inView>
                            <CornerUpRight className="bg-sky-400 text-2xl" />
                            <WordRotate
                                className="bg-sky-400 text-2xl font-bold text-black dark:text-white"
                                words={["Ici c&apos;est moi", "Anthony", "Anto pour les intimes"]}
                            />
                        </BlurFade>
                    </div>
                    <BlurFade delay={0.25 * 0.05} inView>
                        <Image
                            className="mt-2 mb-4 size-full rounded-2xl object-contain"
                            src="/antorando.jpg"
                            height={500}
                            width={500}
                            alt="anto"
                        />
                    </BlurFade>
                </div>

                {/* À propos de moi */}
                <div>
                    <h1 className="scroll-m-20 pb-8 text-4xl border-b font-extrabold tracking-tight lg:text-5xl">
                        À propos de moi
                    </h1>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        <Image
                            src="/DSC04686.JPG"
                            alt="carre"
                            height={350}
                            width={220}
                            className="rounded-lg shadow-lg mt-4"
                        />
                        <div className="leading-7">
                            <p className="mt-6">
                                Bonjour ! 👋<br />
                                Je m&apos;appelle Anthony Lybliamay, j&apos;ai 20 ans et je suis
                                actuellement étudiant en développement web. Passionné par le
                                monde du numérique et de la technologie, je me spécialise dans
                                la création de sites et d&apos;applications web modernes et
                                performants.
                            </p>
                            <p className="mt-6">
                                Depuis que j&apos;ai découvert le code, j&apos;ai été captivé
                                par la possibilité de donner vie à des idées grâce à la
                                programmation. Aujourd&apos;hui, j&apos;affine mes compétences
                                en front-end et back-end, en utilisant des technologies comme
                                React, Node.js, etc.
                            </p>
                            <p className="mt-6">
                                Mon objectif est de continuer à apprendre et de contribuer à des
                                projets qui combinent créativité, performance et innovation.
                            </p>
                            <p className="mt-6">
                                En dehors du développement, j&apos;aime jouer aux jeux vidéo,
                                créer du contenu (comme des vidéos et des photos), voyager, et
                                explorer de nouvelles idées.
                            </p>
                        </div>
                    </div>

                    {/* Compétences */}
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
                                {[
                                    { src: "/react.png", alt: "React Logo" },
                                    { src: "/next.svg", alt: "Next.js Logo" },
                                    { src: "/html.png", alt: "HTML Logo" },
                                    { src: "/css.png", alt: "CSS Logo" },
                                    { src: "/js.png", alt: "JavaScript Logo" },
                                ].map((item, index) => (
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

                    {/* Parcours */}
                    <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Mon Parcours
                    </h2>
                    <Timeline />
                </div>
            </div>
        </>
    );
}
