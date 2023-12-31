import {
      createBrowserRouter,
      Route, 
      createRoutesFromElements,
      RouterProvider
    } from 'react-router-dom'

import React from "react";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Articles from './component/Articles';
import Terms from './component/Terms';
import Policy from './component/Policy';
import RootLayout from "./component/RootLayout/RootLayout"
import "../public/css/main-page.css"
import "../public/css/about-page.css"
import "../public/css/contact-page.css"
import data from "../public/Articles-Data"
import NotFound from './component/RootLayout/NotFound';
export  default function App(){

    const [darkMode, setDarkMode] = React.useState(false)
    function toggleDarkMode(){
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
                <Route path='/' element={<RootLayout toggleDarkMode={toggleDarkMode} darkMode={darkMode} />}>
                <Route index element={<Home 
                darkMode={darkMode}
                />} />
                <Route path='About' element={<About
                 darkMode={darkMode}
                />} />
                <Route path='Contact' element={<Contact
                 darkMode={darkMode}
                />} />
                <Route path='Terms' element={<Terms
                 darkMode={darkMode}
                />} />
                <Route path='Policy'
                 element={<Policy darkMode={darkMode}
                />}/>
                <Route path='/Articles/:title' element={<Articles data={data} darkMode={darkMode} />} />
                <Route path='*' element={<NotFound/>}/>
            </Route>
        )
    )
    
    return(
            <RouterProvider router={router} />
        )
}
