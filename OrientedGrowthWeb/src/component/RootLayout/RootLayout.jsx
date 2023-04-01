import {NavLink, Outlet} from 'react-router-dom'


export default function RootLayout(){
    return(
        <div>
            <header className='HeaderNav'>
                <nav role="navigation">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                            <span></span>
                            <span></span>
                        <ul id="menu">
                           <NavLink to="/" className='li'>Home</NavLink> 
                           <NavLink to='About'className='li'>About</NavLink> 
                           <NavLink to='Contact'className='li'>Contact</NavLink>
                        </ul>
                    </div>
                </nav>
                <img className='logoImg' src='../public/images/logo-(1).png'></img>
            </header>
            <div className='line'></div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
