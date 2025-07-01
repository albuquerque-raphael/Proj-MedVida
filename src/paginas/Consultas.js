// src/paginas/Consultas.js

import React, { useEffect, useState } from 'react';
import { listarAgendamentos, removerAgendamento } from '../storage';
import Header from '../componentes/Header'; // Importa o cabeçalho

export default function Consultas() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    setAgendamentos(listarAgendamentos());
  }, []);

  const handleRemover = (id) => {
    removerAgendamento(id);
    setAgendamentos(listarAgendamentos());
  };

  return (
    <>
      <Header />
      <div className="py-5" style={{ backgroundColor: "#a3dfe5", minHeight: "100vh" }}>
        <div className="container d-flex justify-content-center">
          <div className="bg-white p-4 rounded shadow" style={{ width: '100%', maxWidth: '700px' }}>
            <h2 className="text-center mb-4">Consultas Agendadas</h2>

            {agendamentos.length === 0 ? (
              <p className="text-center">Nenhuma consulta agendada.</p>
            ) : (
              <ul className="list-group">
                {agendamentos.map((ag) => (
                  <li key={ag.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong>{ag.nome}</strong><br />
                      <small>{ag.especialidade}</small>
                    </div>
                    <button onClick={() => handleRemover(ag.id)} className="btn btn-danger btn-sm">
                      Remover
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
