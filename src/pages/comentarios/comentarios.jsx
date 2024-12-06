import React from "react";
import './styles.css'
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import ReviewContainer from "../../components/ReviewContainer/reviewContainer";

function Comentarios() {
    return(
        <>
            <div className="review-page">
                <Header></Header>
                <ReviewContainer></ReviewContainer>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Comentarios