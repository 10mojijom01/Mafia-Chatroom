
import {initializeApp  } from "firebase/app"
import { getAuth} from "firebase/auth";


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
export const auth = getAuth(App);
