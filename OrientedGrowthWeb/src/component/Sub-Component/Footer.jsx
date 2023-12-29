import React from "react";
import { NavLink} from "react-router-dom";

export default function Footer(){
    return(
        <div className="footerDiv">
            <img className="footerImg" src="../images/Footer-Logo.png" alt="FooterLogo"/>
            <div className="Terms">
                <NavLink style={{ textDecoration: 'none' }} to='Policy'><h2>Policy</h2></NavLink>
                <NavLink style={{ textDecoration: 'none'}} to='Terms'><h2>Terms of Service</h2></NavLink>
            </div>
            <p>© 2023 OrientedGrowth. All rights are reserved.</p>
        </div>
        )
}