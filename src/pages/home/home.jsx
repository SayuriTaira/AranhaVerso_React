import React from "react";
import './styles.css'
import Banner from '../../assets/images/banner.jpg'
import Header from "../../components/Header/header";
import TrailerContainer from "../../components/TrailerContainer/trailerContainer";
import CardsContainer from "../../components/CardsContainer/cardsContainer";
import Footer from "../../components/Footer/footer";

function Home() {
    return (
      <>
        <div className="home-page">
          <Header></Header>
          <img id='banner' src={Banner}/>
          <TrailerContainer></TrailerContainer>
          <CardsContainer></CardsContainer>
          <Footer></Footer>
        </div>
      </>
    )
}

export default Home