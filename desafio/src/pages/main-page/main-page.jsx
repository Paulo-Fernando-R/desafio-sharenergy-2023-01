import React from "react"
import { Navigate } from "react-router-dom";
import { useCookies } from 'react-cookie'
export default function MainPage(props){
     const [cookie, setCookie, removeCoockie] = useCookies()
    if(cookie.login == null)
    {
        return <Navigate to="login"/>
    }
    return(
        <>main</>
    )
}