import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, googleProvider } from '../firebase-config'
import Cookies from 'universal-cookie'

let cookies = new Cookies();

const Auth = (props) => {

  const {setIsAuth} = props;

  const SigninWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      console.log(result);
      cookies.set("auth-token", result.user.refreshToken)
      setIsAuth(true)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <p>Sign in with Google account to continue</p>
      <button 
        onClick={SigninWithGoogle}
        className='p-4 border bg-[#0007]'
        >
        Sign in with Google</button>
    </div>
  )
}

export default Auth