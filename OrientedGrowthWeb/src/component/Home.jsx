import React from "react";
import Body from "./Sub-Component/Body";
import Footer from "./Sub-Component/Footer";
import ArticlesData from "../../public/Articles-Data";
import Articles from "./Articles";


export default function Home(){
    const [stories, setStories] = React.useState(ArticlesData.Articles)
    const radomNumber = Math.floor(Math.random() * stories.length )

    // const [count, setCount] = React.useState(2)
    // const loadMore = (()=>{
    //     setCount(prev => prev + 1)
    // })
    
    const {articleSearch, setArticleSearch} = React.useState("")
    // const fill = ArticlesData.Articles.filter((val)=>{
    //     if(articleSearch = ""){
    //         return val
    //         }else if(val.title.toLowerCase().includes(articleSearch.toLowerCase())){
    //         return val
    //     }
    // })
        // let atl = stories.slice(0,count).map(items =>{
        //     return(
        //         <Body 
        //             key = {items.id}
        //             title = {items.title}
        //             name =  {items.name}
        //             date =  {items.date}
        //             image =   {items.img}
        //             />
        //     )
        // })
    return(
            <div>
                {/* <input id="searchInput" type="text" placeholder="Search here.." onChange={(event)=>{
                setArticleSearch(event.target.value)}}/> */}
                {/* {atl} */}
                <Body/>
                {/* <button className="loadButton" onClick={loadMore}>LOAD MORE</button> */}
                <Footer/>
            </div>
        )
    
}
