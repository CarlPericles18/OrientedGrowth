import React from "react";
import ArticlesData from "../../../public/Articles-Data";
import {NavLink, Outlet} from 'react-router-dom'

export default function Body(props){
    const [articleSearch, setArticleSearch] = React.useState("")

    return(
        <div>
                <div className={props.darkMode?"searchDark":"search"}>
                <input className={props.darkMode?"searchBarDark":"searchBar"} id="searchInput" type="text" placeholder="Search here.." onChange={(event)=>{
                            setArticleSearch(event.target.value)
                            }} />
                </div>
                <div className={props.darkMode ? "template_ContainerDark":"template_Container"}>
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
                               <NavLink to={`/Articles/${item.title}`}><div className="divArticleImg"><img className="titleImg" src={item.img}  alt='mountainImg'/></div></NavLink>
                                 <div className="articlesInformation">
                                 <h1 className="titleName">{item.title}</h1>
                                 <h4 className="name">{item.name}</h4>
                                 <h4 className="date">{item.date}</h4>
                                 </div>
                              </div> 
                             )
                          })
                      }

                </div>
        </div>
        )
}