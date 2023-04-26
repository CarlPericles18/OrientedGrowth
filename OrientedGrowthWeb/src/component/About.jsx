import React from "react";
import Footer from "./Sub-Component/Footer";
import ArticlesData from "../../public/Articles-Data";
import '/public/css/about-page.css'

export default function About(){
    const [About, setAbout] = React.useState(ArticlesData.About)
    const mapOut = About.map(item => {
        
        return(
            <div className="about-Header" key={item.id}>
                <h1>{item.AboutHeader}</h1>
                <p>{item.AboutPara}</p>
                <h2>{item.MissionHeader}</h2>
                <p>{item.MissionPara}</p>
            </div>
        )
    })
    return(
        <div>
            {mapOut}
                <div className="contactSocialTwo">
                    <div className="socialTwo">
                            <a href=""><img src="./public/images/icons-instagrampng.png" alt="InstagramIcon"></img></a>
                            <a href=""><img src="./public/images/icons-twitter.png" alt="TwitterIcon"></img></a>
                            <a href=""><img src="./public/images/icons-github.png" alt="GitHubIcon"></img></a>
                            <a href=""><img src="./public/images/gmailIcon.png" alt="gmailIcon"></img></a>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}