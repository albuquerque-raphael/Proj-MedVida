import React from 'react';

function CardMedico({ medico }) {
  return (
    <div className="card m-2 shadow-sm" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{medico.nome}</h5>
        <p className="card-text">Especialidade: {medico.especialidade}</p>
      </div>
    </div>
  );
}

export default CardMedico;
