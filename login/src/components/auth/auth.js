import React from 'react'
import register from "../../images/Svg/register.svg";
import login from "../../images/Svg/login.svg";
import Register from "./register";
import Login from "./login";
import './auth.css'
import './forms.css'


function Auth() {
    return (
        
        <div className="Auth">
            <div className="forms-container">
            <div className="signin-signup">
            <Register/>      
            <Login/>
            </div>
        </div>
        <div className="panels-container">
            <div className="panel left-panel">
            <div className="content">
                <h3>تازه واردی ؟</h3>
                <button className="btn transparent" id="sign-up-btn" onClick={()=>{document.querySelector(".Auth").classList.add("sign-up-mode")}}>عضویت</button>
                
            </div>
            <img src={register} alt="register"/>
            </div>
            <div className="panel right-panel">
            <div className="content">
                <h3>از قبل اکانت داری ؟</h3>
                <button className="btn transparent" id="sign-in-btn" onClick={()=>{document.querySelector(".Auth").classList.remove("sign-up-mode")}}>ورود</button>
                
            </div>
            <img src={login} alt="login"/>
            </div>
        </div>

        </div>

        
    )
}

export default Auth
