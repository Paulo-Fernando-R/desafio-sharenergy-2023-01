import SideMenu from "../../components/side-menu/side-menu"
import './root-page.css'
import MainPage from "../main-page/main-page"
import { useEffect, useState } from "react"

export default function RootPage (props){

const [select, setSelect] = useState(1)

useEffect(() => {
    //console.log(select)
},[select])

const Content = () => {
    if(select === 0)
    {
        return(
            <MainPage/>
        )   
    }
    else if(select === 1)
    {
        return(
            <MainPage/>
        )
    }
    else{
        return(
            <MainPage/>
        )
    }
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