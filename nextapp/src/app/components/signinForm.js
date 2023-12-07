'use client';
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
import ApiValidator from "./apiValidation";
import {Input, Button} from "@nextui-org/react";
import Validator from "./validator";



export default function Signinform() {

  const emailref = useRef();
  const passwordref = useRef();
  const router = useRouter();
  const [status, setStatus] = useState();
  const [validation, setValidation] = useState()

  const session = useSession();
  
  useEffect(() => {
    if(session) {
    router.replace('/home');
    }

  }, [session])
  async function submitHandler(event) {
    event.preventDefault();
    const email = emailref.current.value;
    const password = passwordref.current.value;
      if(email && password) {
        const result = await signIn('credentials',{redirect:false , email,password});
        if(!result?.error) {
          router.replace("/home");
        } else {
          setStatus({status: result?.status, message: result?.error});
        }
      } else {
        setValidation({status: 'error', message: 'Email and Password required'});
      }
  }
  return (
  
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="font-bold  md:text-2xl ">
                  Sign In
              </h1>
             { status && <ApiValidator status={status}></ApiValidator> }
             { validation && <Validator message={validation?.message}/> }
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <Input
                      type="email"
                      label="Email"
                      placeholder="junior@nextui.org"
                      className=""
                      ref={emailref}
                    />
                  </div>
                  <div>
                    <Input
                      type="password"
                      label="Email"
                      placeholder="********"
                      className=""
                      ref={passwordref}
                    />
                  </div>
                 
                 <Button onClick={submitHandler} color="primary">Sign in</Button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <Link href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>

  )
}
