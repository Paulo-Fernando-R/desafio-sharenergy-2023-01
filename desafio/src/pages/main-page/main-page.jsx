import React from "react"
import { Navigate } from "react-router-dom";
import { useCookies } from 'react-cookie'
import './main-page.css'
import '../../global-style.css'
import CardComponent from "./components/card-component";

export default function MainPage(props){
    const [cookie, setCookie, removeCoockie] = useCookies()
    if(cookie.login == null)
    {
        return <Navigate to="login"/>
    }

    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    return(
        <div className="home-main-box">
            <nav>
                <article>
                    <h1>Usuários disponíveis</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Libero earum deleniti neque atque veniam suscipit alias qui
                    </p>
                </article>

                <section className="align-box">
                    <div>
                    
                        {
                            arr.map((e) => {
                                return(
                                    <CardComponent/>
                                )
                            })
                        }
                    </div>
                </section>
                
            </nav>
        </div>
    )
}