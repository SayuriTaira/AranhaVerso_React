import React from "react";
import './styles.css'
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import PicsContainer from "../../components/PicsContainer/picsContainer";

function Fotos() {
    return (
        <>
            <div className="pictures-page">
                <Header></Header>
                <h1> 
                    <i>Algumas imagens do filme:</i>
                </h1>
                <PicsContainer></PicsContainer>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Fotos