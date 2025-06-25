
import React from 'react';
import Header from '../componentes/Header';
import CardEspecialidade from '../componentes/CardEspecialidade';

function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="mb-4">Escolha uma Especialidade</h1>
        <div className="d-flex flex-wrap">
          <CardEspecialidade especialidade="Pediatria" />
          <CardEspecialidade especialidade="Clínico Geral" />
          <CardEspecialidade especialidade="Cardiologia" />
        </div>
      </div>
    </div>
  );
}

export default Home;
