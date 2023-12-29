import React from "react"
import { NavLink } from "react-router-dom";
import TermsData from "../../public/Terms-Data.jsx";


export default function Terms() {
    const [termData, setTData] = React.useState(TermsData.Terms)
    const termsMapped = termData.map(item=>{
        return(
            <div key={item.id}>
                <h1>{item.header}</h1>
                <p>{item.date}</p>
                <h2>1. Acceptance Of Terms</h2>
                <p>{item.acceptanceOfTerms}</p>
                <h2>2. Content Usage</h2>
                <p>{item.contentUsage}</p>
                <h2>3. User Generated Content</h2>
                <p>{item.userGeneratedContent}</p>
                <h2>4 Intellectual Property Right</h2>
                <p>{item.intellectualPropertyRight}</p>
                <h2>5. Disclaimer</h2>
                <p>{item.disclaimer}</p>
                <h2>6. Change To Terms</h2>
                <p>{item.changesToTerms}</p>
                <h2>7. Termination</h2>
                <p>{item.termination}</p>
                <h2>8. Governing Law Jurisdiction</h2>
                <p>{item.governingLawJurisdiction}</p>
                <h2>9. Contact Information</h2>
                <p>{item.contactInformation}</p>
               
            </div>
        )
    })
    return(
        <div>
            {termsMapped}
        </div>
    )
}