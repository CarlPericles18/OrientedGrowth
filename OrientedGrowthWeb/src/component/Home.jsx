import React from "react";
import Body from "./Sub-Component/Body";
import Footer from "./Sub-Component/Footer";
import Articles from "./Articles";
export default function Home(props){
    return(
            <div className={props.darkMode ? "HomeDark":"Home"}>
                <Body darkMode={props.darkMode} className={props.darkMode ? "darkBody": "da"} />
                <Footer/>
            </div>
        )
    
}
