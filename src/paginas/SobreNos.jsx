import './SobreNos.css';
import sobreNosImage from '../assets/images/SobreNos.png';



function SobreNos() {
  return (
    <div className="sobre-container">
      <img src={sobreNosImage} alt="Sobre a clínica MedVida" className="sobre-imagem" />
    </div>
  );
}

export default SobreNos;
