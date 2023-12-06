import { getServerSession } from "next-auth"
// import { getServerSideProps } from "next/dist/build/templates/pages";
// import { authOptions } from "../api/auth/[...nextauth]/route";
// import { useSession } from "next-auth/react";


export default async function Home() {
const session = await getServerSession();
  return (
     <main>
      { session ?
      <>
          <h1>Welcome mr {session?.user?.email}</h1>
          <div>This is user area</div>
      </> : <h2>Please login to view this page</h2>
      }     
     </main>
  )
}

