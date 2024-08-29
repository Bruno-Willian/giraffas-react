import React from 'react';
import imgLan1 from '../img/lan1.png';
import imgLan2 from '../img/lan2.png';

function SocialMedia() {
  return (
    <div className="container-fluid">
      <div className="img">
        <div className="row">
          <div className="col-3 d-flex align-items-center justify-content-center">
            <img src={imgLan1} alt="Imagem Lan 1" className="img-fluid" />
          </div>
          <div className="col-6 d-flex flex-column align-items-center justify-content-center text-center">
            <h1 className="text-warning">SIGA NOSSAS REDES SOCIAIS</h1>
            <h4 className="text-warning">E NÃO PERCA NENHUMA NOVIDADE</h4>
          </div>
          <div className="col-3 d-flex align-items-left justify-content-center">
            <img src={imgLan2} alt="Imagem Lan 2" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
