import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {
    return (
        <div className="flex justify-center items-center min-h-screen px-4">
            <div className="max-w-2xl w-full space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Contact</h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Si vous souhaitez me contacter n&apos;hésitez pas à me laisser un message.
                    </p>
                </div>
                <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <h3 className="text-2xl font-bold">Détails</h3>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    // @ts-ignore

                                    <Avatar prompt="postal address" className="w-4 h-4" />
                                    <span>Lyon, 69000</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    // @ts-ignore

                                    <Avatar prompt="phone number" className="w-4 h-4" />
                                    <span>0768220603</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    // @ts-ignore

                                    <Avatar prompt="email address" className="w-4 h-4" />
                                    <Link href="#" prefetch={false}>
                                        anthony.lybliamay@gmail.com
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <h3 className="text-2xl font-bold">Laissez un Message</h3>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <Label htmlFor="name">Nom</Label>
                                <Input id="name" placeholder="Entrer votre nom" />
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="Entrer votre email" type="email" />
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="Entrer votre message" className="min-h-[100px]" />
                                <Button className="w-full">Envoyer le message</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
