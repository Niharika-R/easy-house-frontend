import React from 'react'
import AuthorizedUser from './AuthorizedUser'
import Profile from './Profile'
import { RoutingURLs } from '../../routes/RoutingUrls'

function ProfilePage() {
  return (
    <AuthorizedUser>
        <Profile/>
    </AuthorizedUser>
  )
}

export const route={
    profile:{
        path:RoutingURLs.profile,
        element:<ProfilePage/>,
        exact:true
    }
}
