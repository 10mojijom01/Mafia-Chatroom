import React ,{useRef} from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";

import Link from '@mui/material/Link';
import { useUserContext } from "../../context/userContext";
function Login() {
  
  const LoginEmailRef = useRef();
  const LoginPasswordRef = useRef();
  const {signInUser , forgotPassword , googleSign} = useUserContext();

  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      const email = LoginEmailRef.current.value
      const password = LoginPasswordRef.current.value
      if(email && password) signInUser(email , password)
    }} className="sign-in-form">
      <h2 className="title">ورود</h2>
      <div className="input-field">
        <input type="email" name="" id="" className="" placeholder="ایمیل" ref={LoginEmailRef} />
        <AlternateEmailIcon
          sx={{
            width: "30px",
            height: "30px",
            margin: "12.5px",
            color: "#acacac",
          }}
        />
      </div>
      <div className="input-field">
        <input
          type="password"
          name=""
          id=""
          className=""
          placeholder="رمز عبور"
          ref={LoginPasswordRef}
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
      <button className="btn-submit">تایید</button>
      <Link onClick={(e)=>{
        e.preventDefault();
        const email = LoginEmailRef.current.value
        if(email)forgotPassword(email).then(()=>(LoginEmailRef.current.value=""))

      }} underline="hover" sx ={{"paddingTop":"5px" , "paddingBottom":"5px" , "color":"purple" , cursor:"pointer"}}>
        {'فراموشی رمز عبور'}
      </Link>
      <button className="google-signIn-btn" onClick={
        e=>{
          e.preventDefault();
          googleSign()
        }
      }>
        <span>ورود با گوگل</span>
        <GoogleIcon sx={{ height: "49px" }} />
      </button>
    </form>
  );
}

export default Login;
