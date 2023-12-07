import { getServerSession } from "next-auth"
// import Link from "next/link"
import React from "react";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button,Card, Skeleton} from "@nextui-org/react";
import SkeletonComp from "./components/skeleton";

export default async function Home() {
 const session = await getServerSession();
  return (
    <main >

    <Navbar position="static">
          <NavbarBrand>
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Integrations
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
          {!session && 
            <>
            <NavbarItem className="hidden lg:flex">
              <Link href="signin">Login</Link>
            </NavbarItem>
          
            <NavbarItem>
              <Button as={Link} color="primary" href="signup" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
            </>
            }
            {
              session && 
              <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                my Profile
              </Button>
            </NavbarItem> 
          }
          </NavbarContent>
        </Navbar>
    

        <div className="flex flex-row flows-grow flex-shrinks w-full p-4 m-4 space-x-4 space-y-4 flex-wrap">
          <SkeletonComp></SkeletonComp>
          <SkeletonComp></SkeletonComp>
          <SkeletonComp></SkeletonComp>
          <SkeletonComp></SkeletonComp>
          <SkeletonComp></SkeletonComp>
          <SkeletonComp></SkeletonComp>
          <SkeletonComp></SkeletonComp>
          <SkeletonComp></SkeletonComp>

      </div>  
    </main>
  )
}
