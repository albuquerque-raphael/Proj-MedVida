
import React, { useState } from 'react';
import AvaliacaoMedico from './AvaliacaoMedico';

function FormularioAgendamento({ medicoId, dataSelecionada }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    agendamentos.push({ nome, telefone, medicoId, data: dataSelecionada });
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
    setEnviado(true);
  };

  return (
    <div className="formulario-agendamento">
      <h4>Formulário de Agendamento</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input className="form-control" type="text" placeholder="Nome do Paciente" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div className="mb-2">
          <input className="form-control" type="tel" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
        </div>
        <button className="btn btn-primary" type="submit">Confirmar Agendamento</button>
      </form>

      {enviado && (
        <div className="mt-4">
          <div className="alert alert-success">Agendamento confirmado para o dia {dataSelecionada}!</div>
          <AvaliacaoMedico medico={medicoId} />
        </div>
      )}
    </div>
  );
}

export default FormularioAgendamento;
