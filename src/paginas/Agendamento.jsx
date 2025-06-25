
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../componentes/Header';
import CalendarioDisponivel from '../componentes/CalendarioDisponivel';
import FormularioAgendamento from '../componentes/FormularioAgendamento';

function Agendamento() {
  const { medicoId } = useParams();
  const [dataSelecionada, setDataSelecionada] = useState(null);

  return (
    <div>
      <Header />
      <div className="container">
        <h1>Agendamento - {medicoId}</h1>
        <CalendarioDisponivel onSelecionarData={setDataSelecionada} />
        {dataSelecionada && (
          <FormularioAgendamento medicoId={medicoId} dataSelecionada={dataSelecionada} />
        )}
      </div>
    </div>
  );
}

export default Agendamento;
