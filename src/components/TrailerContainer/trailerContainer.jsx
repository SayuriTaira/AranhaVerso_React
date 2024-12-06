import React from "react";
import './styles.css'
import Trailer from '../../assets/videos/trailer.mp4'

function TrailerContainer() {
    return (
    <div className='trailer-container'>
        <div className='content'>
          <video id="trailer" controls src={Trailer}></video>
          
          <div className="sinopse">
          <p>Depois de se reunir com Gwen Stacy, Homem-Aranha é jogado no multiverso, onde ele encontra uma equipe encarregada de proteger sua própria existência</p>
          <button>Comprar Ingresso</button>
          </div>
        </div>
    </div>
    )
}

export default TrailerContainer