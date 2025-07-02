import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Agendamento.css';
import headerImage from '../assets/images/Agendamento.png';
import Header from '../componentes/Header';

// Lista de médicos
const MEDICOS = [
  { id: 1, nome: "Dra. Ana Paula", especialidade: "Cardiologia" },
  { id: 2, nome: "Dr. João Silva", especialidade: "Pediatria" },
  { id: 3, nome: "Dra. Maria Clara", especialidade: "Clínico Geral" }
];

function Agendamento() {
  const { medicoId } = useParams();
  const medicoIdNum = Number(medicoId); // converte o parâmetro da URL para número
  const medico = MEDICOS.find(m => m.id === medicoIdNum); // busca pelo ID

  const [mensagem, setMensagem] = useState('');

  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    cep: '',
    endereco: '',
    bairro: '',
    cidade: '',
    estado: '',
    data: '',
    horario: '',
    especialidade: medico ? medico.especialidade : '',
    medicoNome: medico ? medico.nome : ''
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCepChange = async (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    setFormData({ ...formData, cep });

    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
          setMensagem('❗ CEP não encontrado.');
          return;
        }

        setFormData(prev => ({
          ...prev,
          endereco: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
          estado: data.uf
        }));
      } catch (error) {
        setMensagem('❗ Erro ao buscar o endereço pelo CEP.');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!medico) {
      setMensagem('❗ Especialidade não encontrada.');
      return;
    }

    const { nome, telefone, cep, endereco, bairro, cidade, estado, data, horario } = formData;

    if (!nome || !telefone || !cep || !endereco || !bairro || !cidade || !estado || !data || !horario) {
      setMensagem('❗ Por favor, preencha todos os campos para validar.');
      return;
    }

    const agendamentosAnteriores = JSON.parse(localStorage.getItem('agendamentos_medvida')) || []; //Chama o Storage
    const novoAgendamento = { ...formData, id: Date.now() };

    agendamentosAnteriores.push(novoAgendamento);
    localStorage.setItem('agendamentos_medvida', JSON.stringify(agendamentosAnteriores));

    setMensagem('✅ Consulta agendada com sucesso! Você receberá a confirmação com data e hora via WhatsApp.');

    setFormData({
      nome: '',
      telefone: '',
      cep: '',
      endereco: '',
      bairro: '',
      cidade: '',
      estado: '',
      data: '',
      horario: '',
      especialidade: medico.especialidade,
      medicoNome: medico.nome
    });
  };

  const datasDisponiveis = [
    { data: '2025-07-01', label: '01 de Julho' },
    { data: '2025-07-02', label: '02 de Julho' },
    { data: '2025-07-03', label: '03 de Julho' },
  ];

  if (!medico) {
    return (
      <>
        <Header />
        <div className="container mt-5">
          <h3 className="text-center text-danger">❌ Médico não encontrado.</h3>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="agendamento-bg" style={{ backgroundImage: `url(${headerImage})` }}>
        <div className="formulario-box">
          <h2>Agendamento para {medico.nome}</h2>
          <form className="formulario" onSubmit={handleSubmit}>
            <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
            <input type="tel" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} required />
            <input type="text" name="cep" placeholder="CEP" value={formData.cep} onChange={handleCepChange} required />

            <input type="text" name="endereco" placeholder="Endereço" value={formData.endereco} readOnly />
            <input type="text" name="bairro" placeholder="Bairro" value={formData.bairro} readOnly />
            <input type="text" name="cidade" placeholder="Cidade" value={formData.cidade} readOnly />
            <input type="text" name="estado" placeholder="Estado" value={formData.estado} readOnly />

            <input type="text" name="especialidade" placeholder="Especialidade" value={formData.especialidade} readOnly />

            <label className="label-select">Selecione uma data disponível:</label>
            <select name="data" value={formData.data} onChange={handleChange} required>
              <option value="">Escolha uma data</option>
              {datasDisponiveis.map((d) => (
                <option key={d.data} value={d.data}>{d.label}</option>
              ))}
            </select>

            <label className="label-select">Selecione o horário:</label>
            <select name="horario" value={formData.horario} onChange={handleChange} required>
              <option value="">Selecione um horário</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
            </select>

            <button type="submit">Agendar</button>
            {mensagem && <p className="mensagem-sucesso">{mensagem}</p>}
          </form>
        </div>
      </div>
    </>
  );
}

export default Agendamento;
