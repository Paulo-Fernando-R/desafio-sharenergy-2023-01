import './dog-page.css'
import '../../global-style.css'
import pana from '../../assets/pana.png'
export default function DogPage(props) {
    return(
        <div className='dog-main-box'>
            <article>
                <h1>Veja aqui doguinhos bonitinhos :)</h1>
            </article>

            <section>
                <img src={pana} alt="" />
            </section>

            <article>
                <button>Carregar outro doguinho</button>
            </article>
        </div>
    )
}