
import { useSession } from 'next-auth/react'
import React from 'react'

export default  function navComponent() {
 const session = useSession();
 console.log('session', session)
  return (
    <div>navComponent</div>
  )
}
