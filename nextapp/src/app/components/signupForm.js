
import { useRef, useState } from "react";
import Link from 'next/link';


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
        setStatus({status: 'sucess', message: "user created"});
        emailref.current = '';
        passwordref.current = '';

      }
    
      //emailref.current = '';
     // password.current = '';
    } catch(e) {
      setStatus({status: 'Error', message: "Request has been failed"})
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign up
              </h1>
              {status && <h2 style={{color: status.status == 'sucess' ? 'green' : 'red'}}>{status?.message}</h2> }
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" ref={emailref} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" ref={passwordref} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                
                  <button type="submit" onClick={submitHandler} class="text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                     if you have account please login <Link href="/signin" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>

     
    </main>
  )
}
