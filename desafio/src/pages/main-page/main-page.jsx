import React, { useEffect, useState } from "react"
import { Navigate } from "react-router-dom";
import { useCookies } from 'react-cookie'
import './main-page.css'
import '../../global-style.css'
import CardComponent from "./components/card-component";
import { Audio } from 'react-loader-spinner'

export default function MainPage(props){
    const [cookie, setCookie, removeCoockie] = useCookies()
    const [itens, setItens] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [search, setSeach] = useState(false)
    const [loading, setLoading] = useState(false)
    const pages = Math.ceil(itens.length / 12)
    const startIndex = currentPage * 12
    const endIndex = startIndex + 12;
    const currentItens = itens.slice(startIndex, endIndex)

    const fetchData = async() => {
        setLoading(true)
        try{
            const response = await fetch('https://randomuser.me/api/?page=3&results=60&seed=abc');
            const json = await response.json();
            setItens(json.results)
            console.log(json.results);
        }
        catch(e){
            console.log('erro')
        }
        setLoading(false)
    }

    useEffect(() => {
        
        fetchData()
    }, [])

    if(cookie.login == null)
    {
        return <Navigate to="login"/>
    }

    if(loading)
    {
        return(
            <div className="loading-box">
                <Audio
                height="80"
                width="80"
                radius="9"
                color="#2F2F3B"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
                />
            </div>
            
        )
    }
    else{
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

}