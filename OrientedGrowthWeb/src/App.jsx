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
import RootLayout from "./component/RootLayout/RootLayout"
import "../public/css/main-page.css"
import "../public/css/about-page.css"
import "../public/css/contact-page.css"
import data from "../public/Articles-Data"
import NotFound from './component/RootLayout/NotFound';
export  default function App(){

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path='About' element={<About />} />
                <Route path='Contact' element={<Contact />} />
                <Route path='/Articles/:title' element={<Articles data={data} />} />
                <Route path='*' element={<NotFound/>}/>
            </Route>
        )
    )
    
    return(
            <RouterProvider router={router}/>
        )
}
