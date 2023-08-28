import {initializeApp} from 'firebase/app';
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyChuU8N5zUTK0hq_wkQnrBdryGNbPqQ4cY",
    authDomain: "crwn-clothing-db-74574.firebaseapp.com",
    projectId: "crwn-clothing-db-74574",
    storageBucket: "crwn-clothing-db-74574.appspot.com",
    messagingSenderId: "194717612485",
    appId: "1:194717612485:web:575e826df6a87e755f33ac"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt:"select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = ()=>signInWithPopup(auth,googleProvider)

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth,additionalInformation={})=>{
    if (!userAuth) return;
    const userDocref =doc(db,'users',userAuth.uid);
    console.log(userDocref)

    const userSnapshot =await getDoc(userDocref);
    console.log(userSnapshot)

    if (!userSnapshot.exists()){
      const {displayName, email}= userAuth;
      const createAt = new Date();

      try{
        await setDoc(userDocref,{
          displayName,
          email,
          createAt,
          ...additionalInformation
        });
      }catch(error){
        console.log('catching error',error.message)
      }
    }
    return userDocref;

  }

  export const createAuthUserWithEmailAndPassword = async (email,password)=>{
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password)
  }

  export const signInAuthUserWithEmailAndPassword = async (email,password)=>{
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password)
  }