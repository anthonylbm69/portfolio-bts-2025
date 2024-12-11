'use client';

import { useRouter } from 'next/navigation';
import {Button} from "@/components/ui/button";

function Page() {
    const router = useRouter();

    function handleClick() {
        router.push('/');
    }

    return (
        <>
            <Button></Button>
            <button type="button" onClick={handleClick}>
                back
            </button>
        </>
    );
}

export default Page;
