import React from 'react';
import imgLocalizacao from '../img/localizacao.png';
import imgGif1 from '../img/gif1.jpg'; // Certifique-se de que o caminho está correto

function LocationSearch() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6">
          <a href="https://www.giraffas.com.br/">
            <img src={imgGif1} className="d-block w-100" alt="Promoção 1" />
          </a>
        </div>
        <div className="col-6">
          <div className="row align-items-start">
            <div className="col-2">
              <img src={imgLocalizacao} alt="Localização" width="75" height="80" />
            </div>
            <div className="col-lg-10">
              <h5 className="text-warning">ENCONTRE</h5>
              <h2 className="text-warning">NOSSAS LOJAS</h2>
            </div>
          </div>
          <div className="row align-items-center mt-2">
            <input
              className="form-control"
              type="search"
              placeholder="Procurar Geo-Localização"
              aria-label="Pesquisar"
            />
          </div>
          <div className="text-center mt-3">
            <p>Ou</p>
            <button className="btn btn-warning" type="button">
              Ativar Geo-Localização
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationSearch;
