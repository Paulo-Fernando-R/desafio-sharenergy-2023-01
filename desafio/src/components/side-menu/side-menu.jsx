import './side-menu.css'
import CodeLogo from '../../assets/code-logo.png'
import { Link } from 'react-router-dom'
import home from "../../assets/menu-icons/home.svg"
import { useState } from 'react'

export default function SideMenu({setSelect}){
    return(
        <div className="menu-main-box">
            <div>
                <img src={CodeLogo} alt="" />
                <h4>Alguma coisa</h4>
            </div>

            <ul>
                <Link onClick={() => {setSelect(0)}} className='li'><img src={home} alt="" /><li>Tela algo</li></Link>
                <Link onClick={() => {setSelect(1)}} className='li'><img src={home} alt="" /><li>Tela algo</li></Link>
                <Link onClick={() => {setSelect(2)}} className='li'><img src={home} alt="" /><li>Tela algo</li></Link>
            </ul>
        </div>
    )
}