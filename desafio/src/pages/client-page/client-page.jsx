import '../../global-style.css'
import './client-page.css'
import { useEffect, useState } from 'react'
import { Audio } from 'react-loader-spinner'
import ClientCard from './components/client-card-component'
import fetchData from './functions/fetch-data'
import handleSubmit from './functions/hande-submit'
import save from './functions/save-data'
import destroy from './functions/delete-data'
import update from './functions/update-data'

export default function ClientPage(props) {

    const [loading, setLoading] = useState(false)
    const [id, setId] = useState('');
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState('');
    const [cpf, setCpf] = useState('');
    const [itens, setItens] = useState([]);
    const [edit, setEdit] = useState(false)

    const click = (id, name, email, phone, address, cpf, edit) => {
        setId(id);
        setname(name);
        setEmail(email);
        setPhone(phone);
        setAddress(address);
        setCpf(cpf);
        setEdit(edit)
    }

    const submit = async () => {
        if (handleSubmit(name, email, phone, address, cpf) === 'empty-fields') {
            alert('Preencha todos os campos');
            return
        }

        if (handleSubmit(name, email, phone, address, cpf) === 'invalid-cpf') {
            alert('Insira um CPF válido');
            //return
        }

        if (!edit) {
            setLoading(true);
            await save(name, email, phone, address, cpf);
            setLoading(false);
        }
        else if (edit) {
            setLoading(true);
            await update(id, name, email, phone, address, cpf)
            setEdit(false)
            setLoading(false);
        }
        var temp = '';
        click(temp, temp, temp, temp, temp, temp, false);
        await load();
    }

    const deleteSubmit = async () => {
        setLoading(true);
        await destroy(id);
        var temp = '';
        click(temp, temp, temp, temp, temp, temp, false);
        setLoading(false);
        await load();

    }

    const load = async () => {
        setLoading(true);
        const data = await fetchData();
        setItens(data);
        setEdit(false);
        setLoading(false);
        
    }

    useEffect(() => {

        load();
    }, [])

    return (
        <div className='client-main-box'>
            <nav className='input-main-box'>
                <article>
                    <h1>Cadastrar clientes</h1>
                </article>

                <section>
                    <form onSubmit={() => {
                        handleSubmit(name, email, phone, address, cpf)
                    }}>
                        <input
                            required
                            type="text"
                            placeholder="Nome"
                            value={name}
                            onChange={(e) => { setname(e.target.value) }}
                        />

                        <input
                            required
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />

                        <input
                            required
                            type="number"
                            placeholder="Telefone"
                            value={phone}
                            onChange={(e) => { setPhone(e.target.value) }}
                        />

                        <input
                            required
                            type="text"
                            placeholder="Endereço"
                            value={address}
                            onChange={(e) => { setAddress(e.target.value) }}
                        />

                        <input
                            required
                            type="number"
                            placeholder="CPF"
                            value={cpf}
                            onChange={(e) => { setCpf(e.target.value) }}
                        />
                        <div className='button-box'>
                            <button type="button" onClick={submit}>Salvar</button>
                            <button type="button" onClick={deleteSubmit}>Excluir</button>
                        </div>

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
                    loading ?
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
                            {
                                !edit ?
                                    itens.map((item) => {
                                        return <ClientCard
                                            key={item._id}
                                            client={item}
                                            click={click}
                                            setEdit={setEdit}
                                        />
                                    }).reverse()
                                    :
                                    itens.map((item) => {
                                        if (item._id === id) {
                                            return <ClientCard
                                                key={item._id}
                                                client={item}
                                                click={click}
                                                setEdit={setEdit}
                                            />
                                        }
                                    })
                            }
                        </div>
                }
            </nav>
        </div>
    )

}