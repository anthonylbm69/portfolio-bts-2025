import Link from "next/link"
export default async function Page ({params}: {params: Promise<{ id : string }>}) {
    const id = (await params).id
    return(
        <>
            <Link href="/about" className="text-blue-600 hover:underline">
                About
            </Link>
            <p>project {id}</p>
        </>
    )
}
