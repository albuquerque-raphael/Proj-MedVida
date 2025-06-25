
import React, { useState } from 'react';

function AvaliacaoMedico({ medico }) {
  const [nota, setNota] = useState(0);
  const [comentario, setComentario] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleEnviar = () => {
    const avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];
    avaliacoes.push({ medico, nota, comentario });
    localStorage.setItem('avaliacoes', JSON.stringify(avaliacoes));
    setEnviado(true);
  };

  return (
    <div className="mt-3">
      <h5>Avalie o atendimento do(a) {medico}</h5>
      <div className="mb-2">
        <label className="form-label">Nota (1 a 5):</label>
        <select className="form-select" value={nota} onChange={(e) => setNota(e.target.value)}>
          <option value={0}>Escolher</option>
          {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
        </select>
      </div>
      <div className="mb-2">
        <textarea className="form-control" placeholder="Deixe um comentário (opcional)" value={comentario} onChange={(e) => setComentario(e.target.value)} />
      </div>
      <button className="btn btn-outline-primary" onClick={handleEnviar}>Enviar Avaliação</button>
      {enviado && <div className="alert alert-info mt-3">Obrigado pela sua avaliação!</div>}
    </div>
  );
}

export default AvaliacaoMedico;
