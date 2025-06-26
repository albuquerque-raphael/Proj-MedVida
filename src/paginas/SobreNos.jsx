import React from 'react';
import './SobreNos.css';
import sobreNosImage from '../assets/images/SobreNos.png';
import Header from '../componentes/Header'; // Importa o header

function SobreNos() {
  return (
    <>
      <Header /> {/* Adiciona o header no topo */}
      <div className="sobre-container">
        <img
          src={sobreNosImage}
          alt="Sobre a clínica MedVida"
          className="sobre-imagem"
        />
      </div>
    </>
  );
}

export default SobreNos;
