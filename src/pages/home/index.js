import React from 'react'
import Home from './Home'
import { RoutingURLs } from "../../routes/RoutingUrls"

export const HomePage = () => {
    return(
     <div>
       <Home/>
     </div>
    )
}

export const route = {
   home:{
    path: RoutingURLs.home,
    element: <HomePage/>,
    }
}