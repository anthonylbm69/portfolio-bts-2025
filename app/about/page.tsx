'use client'

import { useQuery } from "@tanstack/react-query";

export default function Page() {

    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://pokeapi.co/api/v2/pokemon/charizard').then((res) => res.json()
            ),
    });

    if (isLoading) return 'Loading...';

    if (error) return 'An error is occured...' + error.message;

    return(
        <>
            <h1>{data.name}</h1>
        </>
    )
}
