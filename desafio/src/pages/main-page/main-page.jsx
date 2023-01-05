import React from "react"
import { Navigate } from "react-router-dom";
import { useCookies } from 'react-cookie'
import './main-page.css'
import '../../global-style.css'
import SideMenu from "../../components/side-menu/side-menu";
export default function MainPage(props){
     const [cookie, setCookie, removeCoockie] = useCookies()
    if(cookie.login == null)
    {
        return <Navigate to="login"/>
    }
    return(
        <div className="home-main-box">
            <nav>
                asas
            </nav>
        </div>
    )
}