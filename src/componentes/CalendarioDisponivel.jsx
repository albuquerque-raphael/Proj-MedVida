
import React from 'react';

function CalendarioDisponivel({ onSelecionarData }) {
  const hoje = new Date();
  const dias = Array.from({ length: 14 }, (_, i) => {
    const data = new Date(hoje);
    data.setDate(hoje.getDate() + i);
    return data;
  });

  const feriados = ["2025-06-20"]; // exemplo
  const indisponiveis = ["2025-06-18"]; // exemplo cirurgia

  const formatarData = (data) => data.toISOString().split('T')[0];

  const isDisponivel = (data) => {
    const dia = data.getDay();
    const str = formatarData(data);
    return dia >= 1 && dia <= 5 && !feriados.includes(str) && !indisponiveis.includes(str);
  };

  return (
    <div className="mb-4">
      <h5>Selecione uma data disponível:</h5>
      <div className="d-flex flex-wrap">
        {dias.map((data, index) => {
          const strData = formatarData(data);
          const disponivel = isDisponivel(data);
          return (
            <div
              key={index}
              className={`border m-1 p-2 rounded text-center ${disponivel ? 'bg-light' : 'bg-secondary text-white'}`}
              style={{ width: '100px', cursor: disponivel ? 'pointer' : 'not-allowed' }}
              onClick={() => disponivel && onSelecionarData(strData)}
            >
              {strData}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CalendarioDisponivel;
