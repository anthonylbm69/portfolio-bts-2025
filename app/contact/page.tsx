"use client"

import { useState } from "react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setSuccess(false)
        setError("")

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })

            if (res.ok) {
                setSuccess(true)
                setForm({ name: '', email: '', message: '' })
            } else {
                const data = await res.json()
                setError(data.error || "Une erreur est survenue.")
            }
        } catch (err) {
            setError("Erreur réseau." + err)
        } finally {
            setLoading(false)
        }
    }

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
                                    <span>Lyon, 69000</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span>0768220603</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Link href="mailto:anthony.lybliamay@gmail.com" prefetch={false}>
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
                            <form onSubmit={handleSubmit} className="space-y-2">
                                <Label htmlFor="name">Nom</Label>
                                <Input id="name" value={form.name} onChange={handleChange} required placeholder="Entrer votre nom" />
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" value={form.email} onChange={handleChange} required placeholder="Entrer votre email" />
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" value={form.message} onChange={handleChange} required placeholder="Entrer votre message" className="min-h-[100px]" />
                                <Button type="submit" className="w-full" disabled={loading}>
                                    {loading ? "Envoi en cours..." : "Envoyer le message"}
                                </Button>
                                {success && <p className="text-green-600">Message envoyé avec succès !</p>}
                                {error && <p className="text-red-600">{error}</p>}
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
