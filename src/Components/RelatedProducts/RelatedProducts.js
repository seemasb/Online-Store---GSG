import React, { Component } from 'react';
import Slider from 'react-slick';
import firebase from 'firebase';
import { useEffect, useState } from 'react';
import ShopCard from '../ShopCard/ShopCard';

const firebaseConfig = {
  apiKey: 'AIzaSyA1unudLQxcVqOzcrwx3P9sYUfK1Jq2c7E',
  authDomain: 'teststore-f5e52.firebaseapp.com',
  projectId: 'teststore-f5e52',
  storageBucket: 'teststore-f5e52.appspot.com',
  messagingSenderId: '792894613298',
  appId: '1:792894613298:web:d23de7e19db482981f992b',
};
// firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
let cloudDB = firebase.firestore();

export default function MultipleItems() {
  const [ElementsArr, setElementsArr] = useState([]);

  useEffect(() => {
    const test = [];
    var citiesRef = cloudDB.collection('Elements').limit(4);
    citiesRef.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        test.push(doc.data());
      });
      setElementsArr(test);
    });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <div className="relatedSliderDiv">
      <span className="relatedTitle"> Related Products </span>
      <Slider {...settings} className="relatedSlider">
        {ElementsArr ? (
          ElementsArr.map((Item, index) => (
            <ShopCard
              name={Item.Name}
              imgSrc={Item.Pic}
              Price={Item.Price}
              sale={Item.IfSale}
              key={index}
            />
          ))
        ) : (
          // <div>{console.log(ElementsArr)}</div>
          <div>loading related</div>
        )}
        {ElementsArr ? (
          ElementsArr.map((Item, index) => (
            <ShopCard
              name={Item.Name}
              imgSrc={Item.Pic}
              Price={Item.Price}
              sale={Item.IfSale}
              key={index}
            />
          ))
        ) : (
          // <div>{console.log(ElementsArr)}</div>
          <div>loading related</div>
        )}
      </Slider>
    </div>
  );
}
