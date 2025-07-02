import React, { useState } from 'react';
import { salvarAgendamento } from '../storage';

function FormularioAgendamento({ medico, onAgendamentoRealizado }) {
  const [formData, setFormData] = useState({
    nome: '', telefone: '', cep: '', endereco: '', bairro: '', cidade: '', estado: '',
    data: '', horario: '', especialidade: medico.especialidade, medicoNome: medico.nome
  });
  const [mensagem, setMensagem] = useState('');

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
        if (data.erro) return setMensagem('❗ CEP não encontrado.');
        setFormData(prev => ({ ...prev, endereco: data.logradouro, bairro: data.bairro, cidade: data.localidade, estado: data.uf }));
      } catch {
        setMensagem('❗ Erro ao buscar o endereço pelo CEP.');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, telefone, cep, endereco, bairro, cidade, estado, data, horario } = formData;
    if (!nome || !telefone || !cep || !endereco || !bairro || !cidade || !estado || !data || !horario) {
      return setMensagem('❗ Por favor, preencha todos os campos.');
    }
    const novo = { ...formData, id: Date.now() };
    salvarAgendamento(novo);
    setMensagem('✅ Consulta agendada com sucesso!');
    setFormData({ ...formData, nome: '', telefone: '', cep: '', endereco: '', bairro: '', cidade: '', estado: '', data: '', horario: '' });
    onAgendamentoRealizado();
  };

  const datasDisponiveis = [
    { data: '2025-07-01', label: '01 de Julho' },
    { data: '2025-07-02', label: '02 de Julho' },
    { data: '2025-07-03', label: '03 de Julho' },
  ];

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
      <input type="tel" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} required />
      <input type="text" name="cep" placeholder="CEP" value={formData.cep} onChange={handleCepChange} required />
      <input type="text" name="endereco" placeholder="Endereço" value={formData.endereco} readOnly />
      <input type="text" name="bairro" placeholder="Bairro" value={formData.bairro} readOnly />
      <input type="text" name="cidade" placeholder="Cidade" value={formData.cidade} readOnly />
      <input type="text" name="estado" placeholder="Estado" value={formData.estado} readOnly />
      <input type="text" name="especialidade" placeholder="Especialidade" value={formData.especialidade} readOnly />
      <label className="label-select">Selecione uma data:</label>
      <select name="data" value={formData.data} onChange={handleChange} required>
        <option value="">Escolha uma data</option>
        {datasDisponiveis.map((d) => (<option key={d.data} value={d.data}>{d.label}</option>))}
      </select>
      <label className="label-select">Horário:</label>
      <select name="horario" value={formData.horario} onChange={handleChange} required>
        <option value="">Selecione um horário</option>
        {["13:00", "14:00", "15:00", "16:00", "17:00"].map(h => <option key={h} value={h}>{h}</option>)}
      </select>
      <button type="submit">Agendar</button>
      {mensagem && <p className="mensagem-sucesso">{mensagem}</p>}
    </form>
  );
}

export default FormularioAgendamento;