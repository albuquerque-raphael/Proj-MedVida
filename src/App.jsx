import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import SobreNos from './paginas/SobreNos';
import Agendamento from './paginas/Agendamento';
import PaginaNaoEncontrada from './paginas/PaginaNaoEncontrada';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-nos" element={<SobreNos />} />
      <Route path="/agendamento/:medicoId" element={<Agendamento />} />
      <Route path="*" element={<PaginaNaoEncontrada />} />
    </Routes>
  );
}

export default App;
