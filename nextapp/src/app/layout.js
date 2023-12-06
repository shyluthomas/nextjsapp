import { Inter } from 'next/font/google'
import './globals.css'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import Logout from './components/logout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'user Manager',
  description: 'Test for shylu thomas',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  console.log('session', session)
  return (
    <html lang="en">
      <body className={inter.className}>
        {!!session && 
        
          <Logout></Logout>
        }

        {!session && 
        <Link href='/signin'>Login</Link>
        }
        {children}
        
        </body>
    </html>
  )
}
