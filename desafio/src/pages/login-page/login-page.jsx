import React, { useState } from "react"
import { useEffect } from "react"
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom';
import './login.css'
import '../../global-style.css'
import pana from '../../assets/pana.png'
export default function LoginPage(props){

    const [cookie, setCookie, removeCoockie] = useCookies()
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false)
    const navigate = useNavigate();
    /*useEffect(() => {
        setCookie('login', 'logado', {path:'/'});
    })*/


    const handleSubmit = async (event) => {
        event.preventDefault()
       if(user === 'desafiosharenergy' && password === 'sh@r3n3rgy'){
        alert('Bem vindo')
        
       }
       else{
        setCookie('login', true, { path:'/'});
        navigate('/');
        alert('Usuário ou senha incorretos')
        setUser('')
        setPassword('')
       }
    }

    return(
        <div className="main-box">
            <section>
                <img src={pana} alt="" />
            </section>

            <section>
                <div>
                    <h1>Faça Login</h1>
                    <h4>Outra coisa</h4>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input 
                            required 
                            type="text" 
                            placeholder="Usuário"
                            value={user}
                            onChange={(e) => {setUser(e.target.value)}}
                        />
                        <input 
                            required 
                            type="password" 
                            placeholder="Senha" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="check">Lembrar do usuário</label>
                        <input 
                            id="check" 
                            name="check" 
                            type="checkbox" 
                            value={remember}
                            onChange={(e) => setRemember(e.target.value)}
                        />
                        <button type="submit">Entrar</button>
                    </form>
                </div>
            </section>
        </div>
    )
}