import './ShopCard.css';
import firebase from 'firebase';
import { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';
import { MdCompareArrows } from 'react-icons/md';

export default function ShopCard(props) {
  const { name, imgSrc, Price } = props;
  // console.log(name + 'me');
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
            <button id="middle">
              <FiEye size={19} />
            </button>
            <button>
              <MdCompareArrows size={19} />
            </button>
          </div>
        </div>
      </div>
      <span className="cardName">{name}</span>

      <span className="cardPrice">${Price}.00</span>
    </div>
  );
}
