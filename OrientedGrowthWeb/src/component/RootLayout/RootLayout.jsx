import {NavLink, Outlet} from 'react-router-dom'
import Moon from "../../../public/images/Moon.png"
import Sun from "../../../public/images/Sun.png"

export default function RootLayout(props){
    return(
        <div>
            <div className="darkMode" onClick={props.toggleDarkMode}><img className ="sun"src={props.darkMode ? Sun:Moon }></img></div>
            <header className={props.darkMode?'HeaderNavDark':'HeaderNav'}>
                    <div>
                        <nav role="navigation">
                              <div id={props.darkMode ? "menuToggleDark":"menuToggle"}>
                                    <input type="checkbox" />
                                    <span></span>
                                        <span></span>
                                        <span></span>
                                    <ul id ={props.darkMode? "menuDark":"menu"}>
                                       <NavLink to="/" className={props.darkMode?'liDark':'li'}>Home</NavLink> 
                                       <NavLink to='About'className={props.darkMode?'liDark':'li'}>About</NavLink> 
                                       <NavLink to='Contact'className={props.darkMode?'liDark':'li'}>Contact</NavLink>
                                    </ul>
                              </div>
                         </nav>
                     </div> 
               <img className='logoImg' src={props.darkMode?"../images/logo-(2).png":"../images/logo-(1).png"}></img>
            </header>

            <header className={props.darkMode?'HeaderNavTwoDark':'HeaderNavTwo'}>
            <div className="darkMode" onClick={props.toggleDarkMode}><img className ="sun"src={props.darkMode ? Sun:Moon }></img></div>
            <div className='imgDiv'><img className='logoImgTwo' src={props.darkMode?"../images/logo-(2).png":"../images/logo-(1).png"}></img></div>
                    
                    <div>
                        <div role="navigationTwo" className='NavigationTwo'>
                                    <ul id="menuTwo">
                                       <NavLink to="/" className='li'>Home</NavLink> 
                                       <NavLink to='About'className='li'>About</NavLink> 
                                       <NavLink to='Contact'className='li'>Contact</NavLink>
                                    </ul>
                         </div>
                     </div> 
            </header>
            <div className='line'></div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
