import React from "react";
import Logo from '../../assets/images/logo.jpg'
import './styles.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <img id="logo" src={Logo}/>
            <nav>
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>

                    <Link to='/contato'>
                        <li>Contato</li>
                    </Link>

                    <Link to='/fotos'>
                        <li>Fotos</li>
                    </Link>

                    <Link to='/comentarios'>
                        <li>Comentários</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header