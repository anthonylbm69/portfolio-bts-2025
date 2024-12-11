import Image from "next/image";
import { CornerUpRight } from 'lucide-react';
import BlurFade from "@/components/ui/blur-fade";
import WordRotate from "@/components/ui/word-rotate";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
import Timeline from "@/components/timeline/timeline";

const images = Array.from({ length: 9 }, (_, i) => {
    const isLandscape = i % 2 === 0;
    return `/antorando.jpg`;
});

export default function Home() {
  return (
      <>
      <div className="md:container md:mx-auto">
          <div className="relative flex items-center justify-center">
              <div className="absolute flex flex-col items-center"
                   style={{ bottom:'10rem', left: '20rem', zIndex: '7' }}
          >
                  <BlurFade delay={0.25 * 0.05} inView>
                      <CornerUpRight className="bg-sky-400 text-2xl" />
                      <WordRotate
                          className=" bg-sky-400 text-2xl font-bold text-black dark:text-white"
                          words={["Ici c'est moi", "Anthony", "Anto pour les intimes"]}
                      />
                  </BlurFade>
              </div>
              <BlurFade delay={0.25 * 0.05} inView>
                  <Image
                      className="mt-2 mb-4 size-full rounded-2xl object-contain"
                      src="/antorando.jpg"
                      height="8"
                      width="500"
                      alt="anto"
                  />
              </BlurFade>
          </div>
      <div>
          <h1 className="scroll-m-20 pb-8 text-4xl border-b font-extrabold tracking-tight lg:text-5xl">
              A propos de moi
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Image
                  src="/DSC04686.JPG"
                  alt="carre"
                  height="350"
                  width="220"
                  className="rounded-lg shadow-lg mt-4"
              />
              <div className="leading-7">
                  <p className="[&:not(:first-child)]:mt-6">
                      Bonjour ! 👋<br/>
                      Je m'appelle Anthony Lybliamay, j'ai 20 ans et je suis actuellement étudiant en développement web.<br/> Passionné par le monde du numérique et de la technologie, je me spécialise dans la création de sites et d'applications web modernes et performants.<br/>

                      Depuis que j'ai découvert le code, j'ai été captivé par la possibilité de donner vie à des idées grâce à la programmation.<br/> Aujourd'hui, j'affine mes compétences en front-end et back-end, en utilisant des technologies comme React, Node.js, etc.<br/>

                      Mon objectif est de continuer à apprendre et de contribuer à des projets qui combinent créativité, performance et innovation.<br/> Que ce soit pour concevoir une interface utilisateur intuitive ou optimiser les performances d'une application, je m'efforce toujours de produire un travail de qualité.<br/>

                      En dehors du développement, j'aime jouer aux jeux vidéo, créer du contenu (comme créer des vidéos, prendre des photos), voyager, et explorer de nouvelles idées.<br/>
                  </p>

              </div>
          </div>
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
              Mes compétences
          </h2>
          <div className="pt-2 flex items-center justify-center">
              <Carousel opts={{
                  align: "start",
              }} className="w-full max-w-xs ">
                  <CarouselContent>
                          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                              <div className="p-1">
                                  <Card>
                                      <CardContent className="flex aspect-square items-center justify-center p-6">
                                          <span className="text-3xl font-semibold"><Image src="/react.png" alt="react-logo" width="400" height="400"/></span>
                                      </CardContent>
                                  </Card>
                              </div>
                          </CarouselItem>
                          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                              <div className="p-1">
                                  <Card>
                                      <CardContent className="flex aspect-square items-center justify-center p-6">
                                          <span className="text-3xl font-semibold"><Image src="/next.svg" alt="react-logo" width="400" height="400"/></span>
                                      </CardContent>
                                  </Card>
                              </div>
                          </CarouselItem>
                          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                              <div className="p-1">
                                  <Card>
                                      <CardContent className="flex aspect-square items-center justify-center p-6">
                                          <span className="text-3xl font-semibold"><Image src="/html.png" alt="react-logo" width="200" height="200"/></span>
                                      </CardContent>
                                  </Card>
                              </div>
                          </CarouselItem>
                          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                              <div className="p-1">
                                  <Card>
                                      <CardContent className="flex aspect-square items-center justify-center p-6">
                                          <span className="text-3xl font-semibold"><Image src="/css.png" alt="react-logo" width="200" height="200"/></span>
                                      </CardContent>
                                  </Card>
                              </div>
                          </CarouselItem>
                          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                              <div className="p-1">
                                  <Card>
                                      <CardContent className="flex aspect-square items-center justify-center p-6">
                                          <span className="text-3xl font-semibold"><Image src="/js.png" alt="react-logo" width="200" height="200"/></span>
                                      </CardContent>
                                  </Card>
                              </div>
                          </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
              </Carousel>
          </div>
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
              Mon Parcour
          </h2>
          <Timeline/>
          </div>
      </div>
      </>
  );
}
