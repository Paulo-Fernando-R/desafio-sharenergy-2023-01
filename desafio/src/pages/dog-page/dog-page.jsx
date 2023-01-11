import './dog-page.css'
import '../../global-style.css'
import pana from '../../assets/pana.png'
import { useState } from 'react'
export default function DogPage(props) {

    const [loading, setLoading] = useState(false)
    const [dog, setDog] = useState(null)

    const fetchData = async() => {
        setLoading(true)
        try{
            const response = await fetch('https://random.dog/woof.json?filter=mp4,webm');
            console.log(response);
            const json = await response.json();
            setDog(json.results)
            console.log(json.results);
        }
        catch(e){
            console.log('erro')
        }
        setLoading(false)
    }

    return(
        <div className='dog-main-box'>
            <article>
                <h1>Veja aqui doguinhos bonitinhos :)</h1>
            </article>

            <section>
                <img src={pana} alt="" />
            </section>

            <article>
                <button
                    onClick={(e) => {
                        fetchData()
                    }}
                >
                    Carregar outro doguinho
                </button>
            </article>
        </div>
    )
}