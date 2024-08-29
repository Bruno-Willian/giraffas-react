import React from 'react';
import imgQRCode from '../img/qrcode.png';
import imgApple from '../img/apple.jpg';
import imgGoogle from '../img/google.png';

function Footer() {
  return (
    <footer>
      <div className="footer1 bg-warning text-white py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-center text-md-left">
              <h1>BAIXE NOSSO APP</h1>
              <p>Peça delivery e receba onde estiver ou Retire na loja, sem pegar filas!</p>
            </div>
            <div className="col-md-4 text-center">
              <a href="https://www.giraffas.com.br/">
                <img src={imgQRCode} className="img-fluid" style={{ maxWidth: '150px' }} alt="QR Code" />
              </a>
            </div>
            <div className="col-md-4 text-center text-md-right">
              <p>ESCANEIE NOSSO QR CODE E APROVEITE</p>
              <div className="d-flex justify-content-center justify-content-md-end align-items-center">
                <a href="#" className="mr-2">
                  <img src={imgApple} className="img-fluid mr-2" style={{ maxWidth: '150px', height: 'auto' }} alt="Apple Store" />
                </a>
                <a href="#">
                  <img src={imgGoogle} className="img-fluid ml-2" style={{ maxWidth: '150px', height: 'auto' }} alt="Google Play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer2 bg-dark text-white py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {['Cupons', 'Cardápio', 'Lojas', 'Fale Conosco'].map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            <div className="col-md-3">
              {['Sobre nós', 'Impressão', 'Seja um franqueado', 'Trabalhe Conosco'].map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            <div className="col-md-4">
              <h5>ATENÇÃO</h5>
              <p>
                Não caia em golpes. Antes de atender a qualquer solicitação feita em nome da rede Giraffas, fique atento: nosso domínio oficial é nome.sobrenome@giraffas.com. Desconfie de solicitações recebidas por e-mails diferentes.
              </p>
            </div>
            <div className="col-md-3">
              <p className="text-right small">
                Giraffas © 2022 - Todos os direitos reservados <br />
                Loja online operada por VoceqPad <br />
                Av. Mofarrej, 825 - G01 - Vila Leopoldina - São Paulo - SP - 05311-00
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
