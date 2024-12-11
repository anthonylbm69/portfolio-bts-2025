'use client';

import { useRouter } from 'next/navigation';
import {Button} from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";

function Page() {
    const router = useRouter();

    function handleClick() {
        router.push('/projects/1');
    }

    return (
        <>
            <div className=" flex items-center justify-center">
            <Carousel className="w-full max-w-xs ">
                <CarouselContent>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold"><Image src="/DSC04686.JPG" width="200" height="200" alt="dzdz"/></span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    <CarouselItem>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold"><Image src="/DSC04686.JPG" width="200" height="200" alt="dzdz"/></span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">2</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            </div>
            <Button onClick={handleClick}>
                Project 1
            </Button>
        </>
    );
}

export default Page;
