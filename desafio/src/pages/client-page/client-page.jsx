import '../../global-style.css'
import './client-page.css'
import { useEffect, useState } from 'react'
import { Audio } from 'react-loader-spinner'
import ClientCard from './components/client-card-component'

export default function ClientPage(props){

    const [loading, setLoading] = useState(false)
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState('');
    const [cpf, setCpf] = useState('');

    function handleSubmit(){

    }
    
    return (
        <div className='client-main-box'>
            <nav className='input-main-box'>
                <article>
                    <h1>Cadastrar clientes</h1>
                </article>

                <section>
                <form onSubmit={handleSubmit}>
                        <input 
                            required 
                            type="text" 
                            placeholder="Nome"
                            value={name}
                            onChange={(e) => {setname(e.target.value)}}
                        />

                         <input 
                            required 
                            type="email" 
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                        />

                         <input 
                            required 
                            type="number" 
                            placeholder="Telefone"
                            value={phone}
                            onChange={(e) => {setPhone(e.target.value)}}
                        />

                         <input 
                            required 
                            type="text" 
                            placeholder="Endereço"
                            value={address}
                            onChange={(e) => {setAddress(e.target.value)}}
                        />

                         <input 
                            required 
                            type="number" 
                            placeholder="CPF"
                            value={cpf}
                            onChange={(e) => {setCpf(e.target.value)}}
                        />
                        <button type="button">Entrar</button>
                    </form>
                </section>
            </nav>

            <nav className='list-main-box'>
                <article>
                    <h1>Clientes cadastrados</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                         illo quidem iste omnis ipsam dolorem placeat, tempora autem, minus, 
                         eos quia architecto recusandae sit corrupti a ratione dolorum velit sint!
                    </p>
                </article>

                {
                    loading?
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
                    :
                   <div className='list-box'>
                    <ClientCard/>
                    <ClientCard/>
                    <ClientCard/>
                    <ClientCard/>
                   </div>
                }
            </nav>
        </div>
    )

}