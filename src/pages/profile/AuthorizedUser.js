import React from 'react'
import { useAuthContext} from '../../context/UserAuthentications';
import { Navigate } from 'react-router-dom'

const AuthorizedUser = ({children}) => {
    const user = useAuthContext()
    if(!user.isUserLoggedIn){
        return  <Navigate to='/'/>
    }
  return children
}

export default AuthorizedUser