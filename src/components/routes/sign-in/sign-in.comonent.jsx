import React from 'react';
import { signInWithGooglePopup,createUserDocumentFromAuth } from '../../../utils/firebase/firebase.utils';

export default function SignIn() {
  const logGoogleUser=async()=>{
    const {user}=await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  }
  return (
    <div><h1>Sing in page</h1>
    <button onClick={logGoogleUser}>Sign In with Google</button>
    </div>
  )
}
