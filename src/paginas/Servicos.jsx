
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../componentes/Header';
import EnderecoClinica from '../componentes/EnderecoClinica';
import CardMedico from '../componentes/CardMedico';

const medicosPorEspecialidade = {
  "Pediatria": ["Dra. Ana Souza", "Dr. Pedro Lima"],
  "Clínica Geral": ["Dr. João Silva", "Dra. Carla Ramos"],
  "Cardiologia": ["Dr. Marcos Dias", "Dra. Renata Oliveira"]
};

function Servicos() {
  const { especialidade } = useParams();
  const medicos = medicosPorEspecialidade[especialidade] || [];

  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="text-success mb-3">Sejam bem-vindos à Clínica MedVida</h1>
        <p className="lead">Referência no atendimento humanizado, com os melhores profissionais da área da saúde.</p>
        <p className="fw-bold">Especialidades: Pediatria, Clínica Geral, Cardiologia.</p>
        <hr />
        <h2 className="mb-3">Médicos de {especialidade}</h2>
        <EnderecoClinica />
        {medicos.map((medico, index) => (
          <CardMedico key={index} nome={medico} especialidade={especialidade} />
        ))}
      </div>
    </div>
  );
}

export default Servicos;
