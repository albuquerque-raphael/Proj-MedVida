
import React from 'react';
import { useNavigate } from 'react-router-dom';

function CardMedico({ nome, especialidade }) {
  const navigate = useNavigate();

  const handleAgendar = () => {
    navigate(`/agendamento/${nome}`);
  };

  return (
    <div className="card mb-3 p-3 shadow-sm">
      <h5>{nome}</h5>
      <p>Especialidade: {especialidade}</p>
      <button className="btn btn-success" onClick={handleAgendar}>Agendar Consulta</button>
    </div>
  );
}

export default CardMedico;
