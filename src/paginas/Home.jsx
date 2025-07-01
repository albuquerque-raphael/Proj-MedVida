import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../componentes/Header';
import './Home.css';
import imagemFundo from '../assets/images/Pediatria.png';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />

      <div className="home-container">
        <img src={imagemFundo} alt="Especialidades" className="imagem-fundo" />

        <div className="botoes-cards">
          <button className="card-btn pediatria" onClick={() => navigate('/agendamento/2')} />
          <button className="card-btn clinico" onClick={() => navigate('/agendamento/3')} />
          <button className="card-btn cardio" onClick={() => navigate('/agendamento/1')} />

        </div>
      </div>
    </div>
  );
}

export default Home;
