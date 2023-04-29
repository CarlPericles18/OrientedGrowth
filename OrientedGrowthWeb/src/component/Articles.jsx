import { NavLink, Outlet, useParams} from 'react-router-dom'
import data from "../../public/Articles-Data"
import "../../public/css/articles.css"
import Footer from './Sub-Component/Footer';
export default function Articles(){
    const {title} = useParams();
    return(
        <div>
            <NavLink to ='/'><button className="BackBtn">Back</button></NavLink> 
            <div className="container">
                {data.Articles
                .filter((items)=> items.title === title)
                .map((card,index)=>(
                    <div key={index} className="fullcard">
                            <img className="titleImg" src ={card.img} alt='mountainImg'/>
                            <h1 className='ArticleTitles'>{card.title}</h1>
                            <h4 className="name">{card.name}</h4>
                            <h4 className="date">{card.date}</h4>
                            <h5 className='titles'>{card.subTitle1}</h5>
                            <p>{card.text1}</p>
                            <h5 className='titles'>{card.subTitle2}</h5>
                            <p>{card.text2}</p>
                            <h5 className='titles'>{card.subTitle3}</h5>
                            <p>{card.text3}</p>
                            <h5 className='titles'>{card.subTitle4}</h5>
                            <p>{card.text4}</p>
                            <h5 className='titles'>{card.subTitle5}</h5>
                            <p>{card.text5}</p>
                            <h5 className='titles'>{card.subTitle6}</h5>
                            <p>{card.text6}</p>
                    </div>
                           
                ))}
            </div>
            <div><Footer/></div>
            
        </div>
    )
}