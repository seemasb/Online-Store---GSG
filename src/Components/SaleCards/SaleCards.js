import './SaleCards.css';
import { useState } from 'react';
import sale1 from '../imgs/sale1.png';
import sale2 from '../imgs/sale2.png';

export default function SaleCards() {
  return (
    <div className="SaleCards">
      <div className="C1" id="test">
        <img src={sale2} className="saleSofa"></img>

        <div>
          <span className="c2s2">
            Sofa <span className="color">Collection</span>
          </span>
          <br></br>
          <span className="c2s1 smaller">Starting From </span>
          <span className="c2s1 color smaller">570$</span>
        </div>
      </div>
      <div className="C2" id="test2">
        <div>
          <span className="c2s1">Sale Off</span>

          <span className="c2s2 color">Up to 50%</span>

          <span className="c2s2">Accessories</span>
        </div>
        <img src={sale1}></img>
      </div>
    </div>
  );
}
