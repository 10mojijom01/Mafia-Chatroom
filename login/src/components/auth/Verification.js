import React from 'react'
import './Verification.css'
import verification_pic from './../../images/Svg/undraw_lost_online_re_upmy.svg'


function Verification() {
    return (
        <div className="varifation">
            <div className="background1"></div>
            <div className="background2"></div>
            <div className="varifation-panel">
                <div className="text">

                <span>
                    مشخصات حسابتان را توسط ایمیل ارسال شده تایید کنید و روی تایید کلیک کنید
                </span>

                <button onClick={()=>{window.location.reload("Refresh")}}>تایید</button>

                </div>
                <img src={verification_pic} alt="undraw_lost_online_re_upmy" />
            </div>
            
        </div>
    )
}

export default Verification
