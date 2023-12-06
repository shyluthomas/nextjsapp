"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import { getServerSession } from 'next-auth'
// import Link from 'next/link'
import Logout from './components/logout'
import { Providers } from './providers'
import React from "react";
import { SessionProvider } from 'next-auth/react';
import { Logo } from './components/logo'
import { NavComponent } from './components/navComponent'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
     
        <Providers>
        <SessionProvider>
          
           {children}
           </SessionProvider>
        </Providers>
       
        
        </body>
    </html>
  )
}
