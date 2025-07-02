import React from 'react';
import { obterAgendamentos, excluirAgendamento } from '../storage';

function ListaAgendamentos({ onAtualizar }) {
  const agendamentos = obterAgendamentos();

  const handleExcluir = (id) => {
    excluirAgendamento(id);
    onAtualizar();
  };

  return (
    <div className="book-list">
      {agendamentos.map((agendamento) => (
        <div key={agendamento.id} className="book-card">
          <p><strong>Nome:</strong> {agendamento.nome}</p>
          <p><strong>Telefone:</strong> {agendamento.telefone}</p>
          <p><strong>Endereço:</strong> {agendamento.endereco} - {agendamento.bairro}, {agendamento.cidade} - {agendamento.estado}</p>
          <p><strong>Data:</strong> {agendamento.data}</p>
          <p><strong>Horário:</strong> {agendamento.horario}</p>
          <button className="btn btn-danger btn-excluir" onClick={() => handleExcluir(agendamento.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
}

export default ListaAgendamentos;
