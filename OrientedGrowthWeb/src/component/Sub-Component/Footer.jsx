import React from "react";

export default function Footer(){
    return(
        <div className="footerDiv">
            <img className="footerImg" src="./images/Footer-Logo.png" alt="FooterLogo"/>
            <div className="Terms">
                <h4>Policy</h4>
                <h4>Terms & Condition</h4>
            </div>
            <div className="Icons">
                <div><img src="" alt="IntagramIcon"/></div>
                <div><img src="" alt="TwitterIcon"/></div>
                <div><img src="" alt="GithubIcon"/></div>
            </div>
            <p>© 2022 OrientedGrowth. All rights are reserved.</p>
        </div>
        )
}