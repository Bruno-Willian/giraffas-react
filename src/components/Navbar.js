import React, { useEffect } from 'react';
import logo1 from '../img/giflogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Navbar.css'; // Certifique-se de criar este arquivo CSS

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo1} alt="logo" width="145" height="40" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            {['Peça já', 'Cupons', 'Cardápio', 'Lojas'].map((text, index) => (
              <li key={index} className="nav-item">
                <a className="nav-link active text-dark" href="#">
                  {text}
                </a>
              </li>
            ))}
            {['Seja um franqueado', 'Fale Conosco'].map((text, index) => (
              <li key={index} className="nav-item">
                <a className="nav-link active text-dark" aria-disabled="true">
                  {text}
                </a>
              </li>
            ))}
          </ul>
          <a href="#" className="btn btn-order ml-auto">
            <i className="fas fa-utensils"></i> FAÇA SEU PEDIDO
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
