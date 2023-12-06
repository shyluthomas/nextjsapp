'use client'
import UserComponent from "../components/user";
// import { getServerSideProps } from "next/dist/build/templates/pages";
// import { authOptions } from "../api/auth/[...nextauth]/route";
// import { useSession } from "next-auth/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, 
  Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import { Logo } from "../components/logo";
import Logout from "../components/logout";
import { useSession } from "next-auth/react";

export default function Home() {
const session =  useSession();
const user = session?.data?.user;

  if(session.status == "loading")
  {
      return 
        <p> loading</p>
  }
  return (
        <>
            <Navbar>
              <NavbarBrand>
                <Logo />
                <p className="font-bold text-inherit">Zero UK</p>
              </NavbarBrand>
            
              <NavbarContent justify="end">
              {session.status == 'authenticated' && 
                <NavbarItem className="hidden lg:flex">
                  <Link href="home">My Profile</Link>
                </NavbarItem>
                }
                <NavbarItem>
                {session.status == 'authenticated'&& 
                  <Logout></Logout>
                }
                 {session.status != 'authenticated' && 
                <Link href="signin">Login</Link>
                }
                </NavbarItem>
              </NavbarContent>
            </Navbar>



        <div className="flex flex-row flex-wrap justify-center justify-items-center items-center mt-10">
        <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">{user?.email}</p>
            <p className="text-small text-default-500">Profile Details</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody>
          <UserComponent></UserComponent>
            <p>Welcome {user?.email}</p>

        </CardBody>
        <Divider/>
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="#"
          >
            Visit my profile for hire me
          </Link>
        </CardFooter>
      </Card>
      </div>
      
    </>
  )
}

