import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import './styles.css'
import FormContainer from "../../components/FormContainer/formcontainer";

function Contato() {
    return(
        <>
            <div className="contact-page">
                <Header></Header>
                <FormContainer></FormContainer>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Contato