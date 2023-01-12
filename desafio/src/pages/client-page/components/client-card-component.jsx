import { useState } from 'react';
import '../../../global-style.css'
import './client-card.css'

export default function ClientCard(props){
    const [edit, setEdit] = useState(false);
    return(
        <>

            {
                edit?
                <button 
                    className='edit-button'
                    onClick={() => {
                        setEdit(false);
                    }}
                >
                    Cancelar</button>
                :
                <></>
            }

        <div
        className='card-main-box'
            onClick={(e) => {
                //name, email, phone, address, cpf)
                setEdit(true)
                props.click(
                    props.client._id,
                    props.client.name,
                    props.client.email,
                    props.client.phone,
                    props.client.address,
                    props.client.cpf,
                    edit
                )
            }}

        >
           
            <section className='name-box'>
                <h3>{props.client.name}</h3>
            </section>

            <section className='info-box'>
                <ul>
                    <li>{props.client.cpf}</li>
                    <li>{props.client.phone}</li>
                </ul>
                <ul>
                    <li>{props.client.email}</li>
                    <p>{props.client.address}</p>
                </ul>
            </section>
        </div>
        </>
    )
}