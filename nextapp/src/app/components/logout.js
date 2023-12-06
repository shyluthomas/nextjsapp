'use client';
import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation";

export default function Logout() {

    const router = useRouter();
    return (
        <span>
            <Button  onClick={() => {
                signOut();
                router.replace('signin')
            }}  color="primary" href="#" variant="flat">
                   Logout
            </Button>
        </span>
    )
}