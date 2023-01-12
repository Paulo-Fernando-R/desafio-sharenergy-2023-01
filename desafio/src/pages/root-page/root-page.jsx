import SideMenu from "../../components/side-menu/side-menu"
import './root-page.css'
import MainPage from "../main-page/main-page"
import CatPage from "../cat-page/cat-page"
import DogPage from "../dog-page/dog-page"
import ClientPage from "../client-page/client-page"
import { useEffect, useState } from "react"
import { useCookies } from 'react-cookie'
import { Navigate } from "react-router-dom";

export default function RootPage (props){

const [cookie, setCookie, removeCoockie] = useCookies()
const [select, setSelect] = useState(0)

useEffect(() => {
    //console.log(select)
},[select])

const Content = () => {

    switch (select) {
        case 0:
            return(
            <MainPage/>
            )
            break;

        case 1:
            return(
                <CatPage/>
            )
            break;

        case 2:
            return(
                <DogPage/>
            )
            break;

        case 3:
            return(
                <ClientPage/>
            )
            break;
    
       
    }
   {/* if(select === 0)
    {
        return(
            <MainPage/>
        )   
    }
    else if(select === 1)
    {
        return(
            <CatPage/>
        )
    }
    else{
        return(
            <DogPage/>
        )
    }*/}
}

if(cookie.login == null)
{
    return <Navigate to="login"/>
}

return(
    <div className="root-main-box">
        <div className="menu-box">
            <SideMenu setSelect={setSelect}/>
        </div>
       
       <div className="content-box">
          <Content/>
       </div>
        
    </div>
)
}