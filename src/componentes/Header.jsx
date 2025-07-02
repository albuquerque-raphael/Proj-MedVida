import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-light p-3 mb-4 shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <h2 className="text-primary">Clínica MedVida</h2>
        <nav>
          <Link to="/" className="btn btn-outline-primary me-2">Home</Link>
          <Link to="/consultas" className="btn btn-outline-success me-2">Agendamentos</Link>
          <Link to="/sobre-nos" className="btn btn-outline-secondary">Sobre nós</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
