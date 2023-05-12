import React from "react";
import Footer from "./Sub-Component/Footer";
import ArticlesData from "../../public/Articles-Data";
import '/public/css/about-page.css'
import instagramImg from "../../public/images/icons-instagrampng.png" 
import twitterImg from "../../public/images/icons-twitter.png" 
import github from "../../public/images/icons-github.png" 
import email from "../../public/images/gmailIcon.png" 




export default function About(props){
    const [About, setAbout] = React.useState(ArticlesData.About)
    const mapOut = About.map(item => {
        
        return(
            <div className={props.darkMode ? "about-HeaderDark":"about-Header"} key={item.id}>
                <h1>{item.AboutHeader}</h1>
                <p>{item.AboutPara}</p>
                <h2>{item.MissionHeader}</h2>
                <p>{item.MissionPara}</p>
            </div>
        )
    })
    return(
        <div className={props.darkMode ? "aboutBodyDark" :"aboutBody"}>
            {mapOut}
                <div className="contactSocialTwo">
                        <div className= {props.darkMode ? "socialTwoDark":"socialTwo"}>
                                <a href="https://www.instagram.com/carl_pericles/" target="_blank"><img src={instagramImg} alt="IntagramIcon"></img></a>
                                <a href="https://twitter.com/Pericles_Carl" target="_blank"><img src={twitterImg} alt="TwitterIcon"></img></a>
                                <a href="https://github.com/CarlPericles18" target="_blank"><img src={github} alt="GitHubIcon"></img></a>
                                <a href="mailto:webdev.learnersuni@gmail.com" target="_blank"><img src={email} alt="gmailIcon"></img></a>
                        </div>
                </div>
            <Footer/>
        </div>
    )
}