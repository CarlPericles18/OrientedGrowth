import React from "react";

export default function Body(props){
    return(
    <div>
        <div className="articleDiv">
            <img className="titleImg" src ={props.image} alt='mountainImg'/>
            <h1 className="titleName">{props.title}</h1>
            <h4 className="name">{props.name}</h4>
            <h4 className="date">{props.date}</h4>
        </div>
    </div>    
    )
}