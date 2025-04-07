import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend('re_f9etGMBV_4Vk23gurw2NFSCwzfxRM6h2R');

export async function POST(req: Request) {
    const body = await req.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
    }

    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'anthony.lybliamay@gmail.com',
            subject: `Nouveau message de ${name}`,
            html: `
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
        })

        return NextResponse.json({ success: true, data }, { status: 200 })
    } catch (error: any) {
        console.error("❌ Erreur Resend complète :", error)
        return NextResponse.json({ error: error.message || 'Erreur serveur' }, { status: 500 })
    }
}
