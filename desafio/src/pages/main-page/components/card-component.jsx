import './card-component.css'
import code from "../../../assets/code-logo.png"
export default function CardComponent(props){
    return(
        <div className='card-component-main-box' id='card'>
            <section className='card-content-box'>
                
                <img src={code} alt="" />
                <h3>Paulo Fernando Rodrigues</h3>
                
            </section>

            <section className='card-content-box'>
                <p>E-mail: abc123@seila.com</p>
                <p>Nome de usuário: jaokisse1223</p>
                <p>Idade: 45 anos</p>
            </section>
            
        </div>
    )
}