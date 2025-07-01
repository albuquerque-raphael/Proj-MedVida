# MedVida - Sistema de Agendamento de Consultas Médicas

Este projeto é parte do Trabalho de Conclusão de Curso da Pós-Graduação em Full Stack da Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio).

## Sobre o Projeto

O MedVida é um sistema web desenvolvido com foco na experiência do usuário, permitindo:

- Escolher médico pela especialidade.
- Agendar consultas com preenchimento automático de endereço via CEP.
- Selecionar datas e horários disponíveis.
- Obter confirmação de agendamento via interface.
- Visual interativo e responsivo, inspirado em protótipo no Canva.
- Visualizar todos os agendamentos já feitos, com opção de exclusão.**
- Os dados de agendamento são armazenados e lidos via localStorage.**

## Tecnologias Utilizadas

- React (Vite)
- React Router DOM
- JavaScript (ES6+)
- CSS3
- Fetch API
- API Externa: ViaCEP
- Git & GitHub

## Integração com API Externa

A aplicação se comunica com a API ViaCEP para buscar o endereço automaticamente a partir do CEP informado.

- **Nome da API:** ViaCEP  
- **Licença:** Pública e gratuita  
- **Cadastro/Chave:** Não requer chave de API  
- **Rota Utilizada:** `https://viacep.com.br/ws/{cep}/json/`

## Armazenamento Local

Os dados dos agendamentos são salvos localmente no navegador usando `localStorage`, permitindo que o usuário visualize todas as consultas registradas durante a navegação.

- Nome da chave: `agendamentos_medvida`
- Funcionalidades:
  - Armazenar novos agendamentos
  - Listar todos os agendamentos
  - Remover agendamentos por ID

## Como Executar o Projeto

## Instale as dependências
```bash
npm install

##Inicie o servidor de desenvolvimento
npm run dev

##Acesse a aplicação
http://localhost:3000