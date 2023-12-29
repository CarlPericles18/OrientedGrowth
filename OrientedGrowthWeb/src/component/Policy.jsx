import React from "react"
import { NavLink} from "react-router-dom"
import ArticlesData from "../../public/Terms-Data"


export default function Policy() {
    const[Policy, setPolicy] = React.useState(ArticlesData.policyData)
    const policyMap = Policy.map(item=>{
        return(
            <div key={item.id}>
                <h1>{item.header}</h1>
                <p>{item.policyDate}</p>
                <p>{item.policyPage}</p>
                <h1>{item.termsOfService}</h1>
                <p>{item.termsDate}</p>
                <p>Our Terms of Service (TOS) outline the rules and guidelines for using our website. By accessing and using OrientedGrowth, you agree to comply with these terms. Please read our Terms of Service{<a href="http://orientedgrowth.com/Terms"> Terms of Service</a>} to understand your responsibilities as a user.</p>
                <h1>Contact Us</h1>
                <p>Contact Us If you have any questions, concerns, or feedback about our policies or our website, please feel free to contact us at {<a href="mailto:webdev.learnersuni@gmail.com?body=My custom mail body">webdev.learnersuni@gmail.com</a>}. We appreciate your engagement and value your privacy and security.</p>
            </div>
        )

    })
    
    return(
        <div>
            {policyMap}
        </div>
    )
}