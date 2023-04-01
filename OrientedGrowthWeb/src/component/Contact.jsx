import React from "react";
import Footer from "./Sub-Component/Footer";
import ArticlesData from "./Sub-Component/Articles-Data";
import "/public/css/contact-page.css"

export default function Contact(){
    const [contact, setContact] = React.useState(ArticlesData.Contact)
    const contactData = contact.map((item)=>{
        return(
            <div className="about-Header" key={item.id}>
                <h1>{item.Header}</h1>
                <p>{item.para}</p>
            </div>
        )
    })
    const form = 
            <div>
                <div>
                    <h4 className="email-Link"><a href="mailto:webdev.learnersuni@gmail.com" target="_blank">webdev.learnersuni@gmail.com</a></h4>
                </div>
                <div className="contactInformation">
                    <div class="form">
                        <input id="name"  className="contactBox box1"  type="text" placeholder="Name" name="name" required></input>
                        <input id="email" className="contactBox box2" type="email" placeholder="Email" name="email" required></input>
                        <input id="subject" className="contactBox box3" type="text" placeholder="Subject" name="subject" required></input>
                        <h3>Message</h3> 
                        <textarea   id="message" className ='box4 message'  rows="10" cols="40" type="text" name="message" required ></textarea>
                        <div className="errors"></div>
                        <div className="nameError"></div>
                        <div className="emailError"></div>
                        <div className="subjectError"></div>
                        <div className="messageError"></div>
                    <div className="bttn">
                    <button className="sub">SUBMIT</button>
                </div>
            </div>
            </div>
            </div>



    return(
        <div>
            {contactData}
            <div className="contactSocialTwo">
                <div className="socialTwo">
                        <a href=""><img src="./public/images/icons-instagrampng.png" alt="InstagramIcon"></img></a>
                        <a href=""><img src="./public/images/icons-twitter.png" alt="TwitterIcon"></img></a>
                        <a href=""><img src="./public/images/icons-github.png" alt="GitHubIcon"></img></a>
                        <a href=""><img src="./public/images/gmailIcon.png" alt="gmailIcon"></img></a>
                </div>
            </div>
            {form}
            <Footer/>
        </div>
    )
}