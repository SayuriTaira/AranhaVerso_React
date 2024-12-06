import React from "react";
import './styles.css'

function FormContainer() {
    return(
        <>
            <div className="form-container">
                <div className="form-content">
                    <form action="index.html">
                        <h1>Contate a gente!</h1>
                        
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" name="Nome" id="nome" placeholder="Digite seu nome"/>

                        <label htmlFor="email">E-Mail:</label>
                        <input type="email" name="Email" id="email" placeholder="Insira seu E-mail"/>

                        <label htmlFor="textarea">Mensagem:</label>
                        <textarea name="mensagem" id="textarea" placeholder="Insira sua mensagem"></textarea>

                        <button className="form-button">Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FormContainer