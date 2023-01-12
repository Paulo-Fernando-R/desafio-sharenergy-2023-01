import './side-menu.css'
import CodeLogo from '../../assets/code-logo.png'
import { Link } from 'react-router-dom'
import cat from "../../assets/menu-icons/cat-icon.png"
import dog from "../../assets/menu-icons/dog-icon.png"
import user from "../../assets/menu-icons/user-icon.png"
import client from "../../assets/menu-icons/client-icon.png"
import { useState } from 'react'

export default function SideMenu({setSelect}){
    return(
        <div className="menu-main-box">
            <div>
                <img src={CodeLogo} alt="" />
                <h4>Alguma coisa</h4>
            </div>

            <ul>
                <Link onClick={() => {setSelect(0)}} className='li'><img src={user} alt="" /><li>Usuários</li></Link>
                <Link onClick={() => {setSelect(1)}} className='li'><img src={cat} alt="" /><li>Gatos</li></Link>
                <Link onClick={() => {setSelect(2)}} className='li'><img src={dog} alt="" /><li>Cachorros</li></Link>
                <Link onClick={() => {setSelect(3)}} className='li'><img src={client} alt="" /><li>Clientes</li></Link>
            </ul>
        </div>
    )
}