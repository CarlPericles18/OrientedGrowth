import React from "react";
import ArticlesData from "../../../public/Articles-Data";
import {NavLink, Outlet} from 'react-router-dom'

export default function Body(props){
    const [articleSearch, setArticleSearch] = React.useState("")

    return(
        <div>
                <div className="search">
                <input className="searchBar" id="searchInput" type="text" placeholder="Search here.." onChange={(event)=>{
                            setArticleSearch(event.target.value)
                            }} />
                </div>
                <div className="template_Container">
                      {
                        ArticlesData.Articles 
                          .filter((val) => {
                            if(articleSearch == ""){
                              return val;
                            }else if(val.title.toLowerCase().includes(articleSearch.toLowerCase())){
                              return val;
                            }
                          })
                       .map((item)=>{
                            return(
                              <div className="articleDiv" key = {item.id}>
                               <NavLink to={`/Articles/${item.title}`}><img className="titleImg" src ={item.img} alt='mountainImg'/></NavLink>
                                 <h1 className="titleName">{item.title}</h1>
                                 <h4 className="name">{item.name}</h4>
                                 <h4 className="date">{item.date}</h4>
                              </div> 
                             )
                          })
                      }

                </div>
        </div>
        )
}