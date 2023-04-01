import React from "react";
import Body from "./Sub-Component/Body";
import Footer from "./Sub-Component/Footer";
import ArticlesData from "./Sub-Component/Articles-Data";

export default function Home(){
    const [stories, setStories] = React.useState(ArticlesData.Articles)
    const [count, setCount] = React.useState(2)
    
    const loadMore = (()=>{
        setCount(prev => prev + 1)
    })
    
        let atl = stories.slice(0,count).map(items =>{
            return(
                <Body 
                    key = {items.id}
                    title = {items.title}
                    name =  {items.name}
                    date =  {items.date}
                    image =   {items.img}
                    />
            )
        })

        return(
            <div>
                {atl}
                <button className="loadButton" onClick={loadMore}>LOAD MORE</button>
                <Footer/>

            </div>

        )
    
}

console.log(ArticlesData)