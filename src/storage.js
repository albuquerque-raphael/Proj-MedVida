const STORAGE_KEY = "agendamentos_medvida";

// Busca todos os agendamentos salvos
export const listarAgendamentos = () => {
  const dados = localStorage.getItem(STORAGE_KEY);
  return dados ? JSON.parse(dados) : [];
};

// Salva um novo agendamento
export const salvarAgendamento = (agendamento) => {
  const lista = listarAgendamentos();
  lista.push(agendamento);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
};

// Busca um agendamento por ID
export const buscarAgendamentoPorId = (id) => {
  const lista = listarAgendamentos();
  return lista.find(item => item.id === id);
};

// Atualiza um agendamento pelo ID
export const atualizarAgendamento = (id, novosDados) => {
  const lista = listarAgendamentos().map(item =>
    item.id === id ? { ...item, ...novosDados } : item
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
};

// Remove um agendamento pelo ID
export const removerAgendamento = (id) => {
  const lista = listarAgendamentos().filter(item => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
};