import './dog-page.css'
import '../../global-style.css'
import pana from '../../assets/pana.png'
import { useState } from 'react'
import { Audio } from 'react-loader-spinner'

export default function DogPage(props) {

    const [loading, setLoading] = useState(false)
    const [dog, setDog] = useState(null)

    async function fetchData (){
        setLoading(true)
        try{
            const response = await fetch('https://random.dog/woof.json?filter=mp4%2Cwebm');
            const json = await response.json();
            setDog(json)
        }
        catch (e){
            setDog(null)
        }
        finally{
            setLoading(false)
        }
    }

    return(
        <div className='dog-main-box'>
            <article>
                <h1>Veja aqui doguinhos bonitinhos :)</h1>
            </article>
            
            <section>
                {
                    loading?
                    <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color="#2F2F3B"
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass
                    />
                    :
                    dog === null?
                    <h1>Sem doguinho ainda :(</h1>
                    :
                    <img src={dog.url} alt="" />
                }
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