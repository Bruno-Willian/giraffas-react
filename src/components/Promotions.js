import React from 'react';
import imgGif2 from '../img/gif2.jpg';
import imgGif3 from '../img/gif3.jpg';
import imgGif4 from '../img/gif4.jpg';


function Promotions() {
  return (
    <div className="container"> 
      <div className="text-center">
        <div className="row align-items-end">
          {[imgGif2, imgGif3, imgGif4].map((img, index) => (
            <div key={index} className="col-4">
              <a href="https://www.giraffas.com.br/">
                <img src={img} className="d-block w-100" alt={`Promoção ${index + 2}`} />
              </a>
            </div>
          ))}
        </div>
      </div>

     
    </div>
  );
}

export default Promotions;
