import { NavLink, Outlet, useParams} from 'react-router-dom'
import data from "../../public/Articles-Data"
import "../../public/css/articles.css"
import Footer from './Sub-Component/Footer';
export default function Articles(props){
    const {title} = useParams();
    
    return(
        <div className={props.darkMode?"bodyDark":"body"}>
            <div className={props.darkMode?"containerDark":"container"}>
                {data.Articles
                .filter((items)=> items.title === title)
                .map((card,index)=>(
                        <div key={index} className={props.darkMode?"fullCardDark":"fullcard"}>
                            <div><img className="titleImg" src ={card.img} alt='mountainImg'/></div>
                            <h1 className={props.darkMode?'ArticleTitlesDark':'ArticleTitles'}>{card.title}</h1>
                            <h4 className={props.darkMode ?"nameDark":"name"}>{card.name}</h4>
                            <h4 className={props.darkMode?"dateDark":"date"}>{card.date}</h4>
                            <p  className="desc">{card.text0}</p>
                            <h5 className='titles'>{card.subTitle1}</h5>
                            <p  className="desc">{card.text1}</p>
                            <h5 className='titles'>{card.subTitle2}</h5>
                            <p  className="desc">{card.text2}</p>
                            <h5 className='titles'>{card.subTitle3}</h5>
                            <p  className="desc">{card.text3}</p>
                            <h5 className='titles'>{card.subTitle4}</h5>
                            <p  className="desc">{card.text4}</p>
                            <h5 className='titles'>{card.subTitle5}</h5>
                            <p  className="desc">{card.text5}</p>
                            <h5 className='titles'>{card.subTitle6}</h5>
                            <p  className="desc">{card.text6}</p>
                            <h5 className='titles'>{card.subTitle7}</h5>
                            <p  className="desc">{card.text7}</p>
                            <h5 className='titles'>{card.subTitle8}</h5>
                            <p  className="desc">{card.text8}</p>
                            <h5 className='titles'>{card.subTitle9}</h5>
                            <p  className="desc">{card.text9}</p>
                        </div>
                ))}
            </div>
            {/* <div className='Footer'><Footer/></div> */}
        </div> 
    )       
}