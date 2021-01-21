import './ShopCard.css';
import firebase from 'firebase';
import { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';
import { MdCompareArrows } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

export default function ShopCard(props) {
  const { name, imgSrc, Price, sale, setProductName } = props;

  let history = useHistory();
  // console.log(name + 'me');
  const printId = (e) => {
    const { name } = e.target;
    console.log(name);
    setProductName(name);
    history.push('/SingleProduct');
  };
  return (
    <div className="ShopCard">
      <button className="addCart">Add to Cart</button>

      <div className="imgShop">
        <img alt="Element" src={imgSrc} className="pro"></img>
        {/* <button className="addCart">Add to Cart</button> */}
        <div className="btnsWrapper">
          <div className="btns">
            <button>
              <FiHeart size={19} />
            </button>
            <button id="middle" onClick={printId} name={name}>
              <FiEye size={19} />
            </button>
            <button>
              <MdCompareArrows size={19} />
            </button>
          </div>
        </div>
      </div>
      <span className="cardName">{name}</span>

      {/* <span className="cardPrice">${Price}.00</span> */}
      <span>
        {sale ? (
          <span className="cardPrice">
            <span> ${Price}.00 </span>
            <del id="sale">${sale}.00 </del>
          </span>
        ) : (
          <span>${Price}.00</span>
        )}
      </span>
    </div>
  );
}
