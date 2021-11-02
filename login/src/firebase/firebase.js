
import {initializeApp  } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider ,updateProfile,signInWithRedirect, signInWithEmailAndPassword , sendEmailVerification} from "firebase/auth";


const firebaseConfig = {

  apiKey: "AIzaSyBo-wVk7mAdoImoyWDzB3Uws47VutuqNQA",

  authDomain: "mafiachat-7720d.firebaseapp.com",

  databaseURL: "https://mafiachat-7720d-default-rtdb.firebaseio.com",

  projectId: "mafiachat-7720d",

  storageBucket: "mafiachat-7720d.appspot.com",

  messagingSenderId: "132783019284",

  appId: "1:132783019284:web:d5e3ec74c71a9e63a99e01",

  measurementId: "G-DGCWQDXY0D"

};
const App = initializeApp(firebaseConfig)
const auth = getAuth();
const provider = new GoogleAuthProvider();


  export function signup(email , password , p_name){
    return createUserWithEmailAndPassword(auth , email , password).then(()=>{
      return updateProfile(auth.currentUser, {
        displayName : p_name
      })
    }).then(

      ()=>{
        return sendEmailVerification(auth.currentUser)
      }

    ).catch(err=>{console.log(auth.currentUser)})
    
  };


export function signin(email , password){
  return signInWithEmailAndPassword(auth , email , password).then(res => console.log(res)).catch(err=>{console.log(err)})
}


  export function google_signup(){
    
    signInWithRedirect(auth, provider).then(res=>{console.log(res)})

  }