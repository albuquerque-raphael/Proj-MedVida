import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardEspecialidade.css';

function CardEspecialidade({ especialidade }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/agendamento/${especialidade}`);
  };

  return (
    <div
      className="card card-especialidade text-center shadow-sm d-flex flex-column justify-content-center"
      onClick={handleClick}
    >
      <div className="mt-auto">
        <h5 className="especialidade-nome mb-3">{especialidade}</h5>
        <p className="text-muted">Agende sua consulta</p>
      </div>
    </div>
  );
}

export default CardEspecialidade;
