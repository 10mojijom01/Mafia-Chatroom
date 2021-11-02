import React ,{useRef ,useState} from "react";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification  , updateCurrentUser} from "firebase/auth";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import {signup , google_signup} from './firebase/firebase'



function Register() {
const auth = getAuth()



const EmailRef = useRef();
const PasswordRef = useRef();
const NameRef = useRef()
const [Loading, setLoading] = useState(false)
async function handlesignup(){

  setLoading(true)
  try{
    await signup(EmailRef.current.value , PasswordRef.current.value , NameRef.current.value)
  }catch{
    console.log(auth.currentUser)
    
  }
  setLoading(false)
}



  return (
    <form action="" className="sign-up-form">
      <h2 className="title">عضویت</h2>
      <div className="input-field">
        <input type="text" name="" id="" className="" placeholder="نام"  ref={NameRef} />
        <i>
          <PersonIcon
            sx={{
              width: "30px",
              height: "30px",
              margin: "12.5px",
              color: "#acacac",
            }}
          />
        </i>
      </div>
      <div className="input-field">
        <input type="email" name="" id="" className="" placeholder="ایمیل" ref={EmailRef} autoComplete="false" />
        <AlternateEmailIcon
          sx={{
            width: "30px",
            height: "30px",
            margin: "12.5px",
            color: "#acacac",
          }}
        />
      </div>
      <div className="input-field"  >
        <input
          type="password"
          name=""
          id=""
          className=""
          placeholder="رمز عبور"
          ref={PasswordRef}
          autoComplete="false"
        />
        <LockIcon
          sx={{
            width: "30px",
            height: "30px",
            margin: "12.5px",
            color: "#acacac",
          }}
        />
      </div>
      <button className="btn-submit" disabled={Loading} onClick={
        (e)=>{
          e.preventDefault();
          handlesignup()
          
        }
        }>تایید</button>

      <button className="google-signIn-btn" onClick={
        (e)=>{
          e.preventDefault();
          google_signup();
        }
        
      } >
        <span>عضویت با گوگل</span>
        <GoogleIcon sx={{ height: "49px" }} />
      </button>
    </form>
  );
}

export default Register;
