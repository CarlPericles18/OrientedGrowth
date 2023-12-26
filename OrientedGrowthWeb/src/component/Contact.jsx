import Footer from "./Sub-Component/Footer";
import ArticlesData from "../../public/Articles-Data";
import "/public/css/contact-page.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form } from "react-router-dom";
import instagramImg from "../../public/images/icons-instagrampng.png" 
import twitterImg from "../../public/images/icons-twitter.png" 
import github from "../../public/images/icons-github.png" 
import email from "../../public/images/gmailIcon.png" 

export default function Contact(props){
    const [contact, setContact] = React.useState(ArticlesData.Contact)
    const contactData = contact.map((item)=>{
        return(
            <div className={props.darkMode? "about-HeaderDark":"about-Header"} key={item.id}>
                <h1>{item.Header}</h1>
                <p>{item.para}</p>
            </div>
        )
    })
  
    
            const form = useRef();
            const sendEmail = (e) => {
                    e.preventDefault();
                emailjs.sendForm('service_qxgsdwm', 'template_v2moqep', form.current, '4Ag6TR00uyG7mCz_8')
                  .then((result) => {
                    alert("MESSAGE SENT");
                    form.current.reset();
                  }, (error) => {
                      console.log(error.text);
                  });
              };

    return(
        <div className={props.darkMode ? "DarkContact":"Contact"}>
            {contactData}
            <div className={"contactSocialTwo"}>
                <div className={props.darkMode?"socialTwoDark":"socialTwo"}>
                        <a href="https://www.instagram.com/carl_pericles/" target="_blank"><img src={instagramImg} alt="IntagramIcon"></img></a>
                        <a href="https://twitter.com/Pericles_Carl" target="_blank"><img src={twitterImg} alt="TwitterIcon"></img></a>
                        <a href="https://github.com/CarlPericles18" target="_blank"><img src={github} alt="GitHubIcon"></img></a>
                        <a href="mailto:webdev.learnersuni@gmail.com" target="_blank"><img src={email} alt="gmailIcon"></img></a>
                </div>
            </div>
                 <div className={props.darkMode?"contactInformationDark":"contactInformation"}>
                    <form className="form" ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input className="nameInput" type="text" name="from_name" required/>
                        <label>Subject</label>
                        <input className="subject"type="text" name="subject" required/>
                        <label>Email</label>
                        <input className="email" type="email" name="email_id" required/>
                        <label>Message</label>
                        <textarea  id="message" className ='box4 message' name="message" required />
                        <input  className= "submitBtn" type="submit" value="Send" />
                    </form>
                </div>
                {/* <div id="MessageSent">Message Sent</div> */}
             {/* <Footer/> ---fixing-- */}

        </div>
    )
}