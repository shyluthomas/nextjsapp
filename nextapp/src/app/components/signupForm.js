
import { useRef, useState } from "react";
import Link from 'next/link';
import {Input, Button} from "@nextui-org/react";

async function createUser(email,password) {
  const user = await fetch('/api',
  {
    method: 'POST',
    body : JSON.stringify({email,password}),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  )
  if(user.ok == undefined) {
    throw new Error('error');
  }
  return user;
}


export default  function SignUpForm() {

  const emailref = useRef('');
  const passwordref = useRef('');
  const [status, setStatus] = useState();
  async function submitHandler(event) {
    event.preventDefault();
    const email = emailref.current.value;
    const password = passwordref.current.value;
    try {
      const user = await createUser(email,password);
      
      if (user) {
        emailref.current = '';
        passwordref.current = '';
        setStatus({status: 'sucess', message: "User has been created"});
        

      }
    
      //emailref.current = '';
     // password.current = '';
    } catch(e) {
      setStatus({status: 'Error', message: "Request has been failed"})
    }
  }
  const classN = status && status.message == 'error'? 'text-red-500': 'text-green-500';
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="font-bold  md:text-2xl ">
                 Create An account
              </h1>
             { status && <h2 className={classN}>{status.message}</h2> }
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
                 
                 <Button onClick={submitHandler} color="primary">Sign Up</Button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  if you have account please login <Link href="/signin" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
  )
}
