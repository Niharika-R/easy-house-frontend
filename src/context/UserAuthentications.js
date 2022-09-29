import React,{createContext, useContext, useState} from 'react'

const UserContext = createContext()

export const UserAuthentication = ({children}) => {
    const [isUserLoggedIn,setIsUserLoggedIn]= useState(false)

    return(
        <UserContext.Provider value={{isUserLoggedIn}}>
          {children}
        </UserContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(UserContext)
}