import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Timeline = () => {
    const timelineData = [
        { title: "BAC STI2D - Sciences et Technologies de l'Industrie et du Développement Durable", year: "2020", description: "Premiers pas dans le développement." },
        { title: "BTS SIO - Services Informatiques aux Organisations - Solutions Logicielles et Applications Métiers - Option SLAM", year: "2023", description: "Réalisation de sites et d'applications." },
    ];

    return (
        <div className="mt-14 relative w-full h-screen flex items-center justify-center px-4">
            <div className="absolute w-2 h-full bg-gray-300"></div>
            <div className="relative flex flex-col gap-12">
                {timelineData.map((item, index) => (
                    <div
                        key={index}
                        className={cn(
                            "relative flex items-center",
                            "flex-row"
                        )}
                    >
                        <Card className={cn("w-64", "ml-6 text-left"
                            )}
                        >
                            <CardHeader>
                                <Badge className="mb-2">{item.year}</Badge>
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
