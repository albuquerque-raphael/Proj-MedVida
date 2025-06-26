import React, { useState } from 'react';
import './Agendamento.css';
import headerImage from '../assets/images/Agendamento.png';
import Header from '../componentes/Header';

function Agendamento() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    data: '',
    horario: ''
  });

  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, telefone, data, horario } = formData;

    if (!nome || !telefone || !data || !horario) {
      setMensagem('❗ Por favor, preencha todos os campos para validar.');
      return;
    }

    localStorage.setItem('agendamento', JSON.stringify(formData));
    setMensagem('✅ Consulta agendada com sucesso! Você receberá a confirmação com data e hora via WhatsApp.');
    setFormData({ nome: '', telefone: '', data: '', horario: '' });
  };

  const datasDisponiveis = [
    { data: '2025-07-01', label: '01 de Julho' },
    { data: '2025-07-02', label: '02 de Julho' },
    { data: '2025-07-03', label: '03 de Julho' },
  ];

  return (
    <>
      <Header />
      <div className="agendamento-bg" style={{ backgroundImage: `url(${headerImage})` }}>
        <div className="formulario-box">
          <h2>Agende sua Consulta</h2>
          <form className="formulario" onSubmit={handleSubmit}>
            <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />

            <input type="tel" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} required />

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
