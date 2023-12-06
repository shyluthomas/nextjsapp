'use client';
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation";

export default function Logout() {

    const router = useRouter();
    return (
        <span>
            <a onClick={() => {
                signOut();
                router.replace('signin')
            }}> Logout</a>
        </span>
    )
}