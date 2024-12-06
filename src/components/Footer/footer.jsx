import React from "react";
import Logo from '../../assets/images/logoform.png'
import './styles.css'

function Footer() {
    return (
    <footer>
        <img id="logoFooter" src={Logo}/>

        <div className="copyright-text">
        <span>Todos os direitos reservados ©</span>
        <span>Desenvolvido por: Sayuri Taira</span>
        </div>
    </footer>
    )
}

export default Footer