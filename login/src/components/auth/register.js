import React ,{useRef } from "react";

import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import { useUserContext } from "../../context/userContext";




function Register() {




const RegEmailRef = useRef();
const RegPasswordRef = useRef();
const RegNameRef = useRef()
const {registerUser , googleSign} = useUserContext();


  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      const email = RegEmailRef.current.value;
      const name = RegNameRef.current.value;
      const password = RegPasswordRef.current.value;
      if(email && name && password) registerUser(email , password , name )
    }} className="sign-up-form">
      <h2 className="title">عضویت</h2>
      <div className="input-field">
        <input type="text" name="" id="" className="" placeholder="نام"  ref={RegNameRef} />
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
        <input type="email" name="" id="" className="" placeholder="ایمیل" ref={RegEmailRef} autoComplete="false" />
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
          ref={RegPasswordRef}
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
      <button className="btn-submit">تایید</button>

      <button className="google-signIn-btn" onClick={
        (e)=>{
          e.preventDefault();
          googleSign()
        }
        
      } >
        <span>عضویت با گوگل</span>
        <GoogleIcon sx={{ height: "49px" }} />
      </button>
    </form>
  );
}

export default Register;
