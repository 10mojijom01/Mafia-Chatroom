import React ,{useState} from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import { google_signup} from './firebase/firebase'
function Login() {

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  return (
    <form action="" className="sign-in-form">
      <h2 className="title">ورود</h2>
      <div className="input-field">
        <input type="email" name="" id="" className="" placeholder="ایمیل" onChange={e=>{setEmail(e.target.value)}} />
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
          onChange={e=>{setPassword(e.target.value)}}
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
        e=>{
          e.preventDefault();
          google_signup()
        }
      }>
        <span>ورود با گوگل</span>
        <GoogleIcon sx={{ height: "49px" }} />
      </button>
    </form>
  );
}

export default Login;
