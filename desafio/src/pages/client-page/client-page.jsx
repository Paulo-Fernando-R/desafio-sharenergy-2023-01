import '../../global-style.css'
import './client-page.css'
import { useEffect, useState } from 'react'
import { Audio } from 'react-loader-spinner'

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
                    <h1>Escolha um status qualquer</h1>
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
                   <>o que deve ter</>
                }
            </nav>
        </div>
    )

}