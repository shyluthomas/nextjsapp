import { getServerSession } from "next-auth"
import Link from "next/link"

export default async function Home() {
 const session = await getServerSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>Welcome to Landing page</h1>
     {!session && 
     <>
        <h2> 
          <Link href='/signin'>Sign in page</Link>
        </h2>
        
        <h2>
          <Link href='/signup'>Create Account</Link>
        </h2>
     </>
      }
      {
        session && 
      
      <h2>
          <Link href='/home'>My Profile</Link>
      </h2>
      }
    </main>
  )
}
