import React, { useEffect, useState } from "react"
import { Navigate } from "react-router-dom";
import { useCookies } from 'react-cookie'
import './main-page.css'
import '../../global-style.css'
import CardComponent from "./components/card-component";

export default function MainPage(props){
    const [cookie, setCookie, removeCoockie] = useCookies()
    const [itens, setItens] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const pages = Math.ceil(itens.length / 10)
    const startIndex = currentPage * 10
    const endIndex = startIndex + 10;
    const currentItens = itens.slice(startIndex, endIndex)

    const fetchData = async() => {
        try{
            const response = await fetch('https://randomuser.me/api/?page=3&results=60&seed=abc');
            const json = await response.json();
            setItens(json.results)
            console.log(json.results);
        }
        catch(e){
            console.log('erro')
        }
    }

    useEffect(() => {
        
        fetchData()
    }, [])

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
                    <input type="text" placeholder="Pesquisa" />
                </article>

                <section className="align-box">
                    <div>
                    
                        {
                            currentItens.map(item => {
                                return <CardComponent key={item.login.uuid} item={item}/>
                            })
                        }
                    </div>
                </section>

                <div className="controls-box">
                    <button
                        onClick={(e) => {
                            if(currentPage > 0){
                                setCurrentPage(currentPage - 1)
                            }
                        }}
                    >
                        Anterior
                    </button>

                    <h4>{currentPage + 1}</h4>

                    <button
                        onClick={(e) => {
                            if(currentPage < pages){
                                setCurrentPage(currentPage + 1)
                            }
                        }}
                    >   
                        Próxima
                    </button>
                </div>
                
            </nav>
        </div>
    )
}