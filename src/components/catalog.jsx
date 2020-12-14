import React from 'react';
import portada from "../assets/portada.png";
import aros from "../assets/aros.png";
import anillos from "../assets/anillos.png";
import collares from "../assets/collares.png";
import cintillos from "../assets/cintillos.png";
import tiburones from "../assets/tiburones.png";
import colets from "../assets/colets.png";
import pinches from "../assets/pinches.png";
import pulseras from "../assets/pulseras.png";
import lentes from "../assets/lentes.png";
import final from "../assets/final.png";
import straps from "../assets/straps.png";
import "./componentsStyles.css";


function Catalog() {
  return (
    <div >
      <img id="init" src={portada} alt="logo" />
      <img id="rings" src={anillos} alt="anillos" />
      <img id="earrings" src={aros} alt="aros" />
      <img id="neckles" src={collares} alt="collares" />
      <img id="headbands" src={cintillos} alt="cintillos" />
      <img id="hairwrap" src={tiburones} alt="tiburones" />
      <img id="bands" src={colets} alt="colets" />
      <img id="hairclips" src={pinches} alt="pinches" />
      <img id="bracelets" src={pulseras} alt="pulseras" />
      <img id="sunglasses" src={lentes} alt="lentes" />
      <img id="straps" src={straps} alt="straps" />
      <img id="recomendations"src={final} alt="final" />
    </div>
  );
}

export default Catalog;