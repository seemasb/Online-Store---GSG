import './HomeCardsCont.css';
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

firebase.initializeApp(firebaseConfig);
let cloudDB = firebase.firestore();
var testArr = [];

export default function HomeCardsCont() {
  const [imgSrc, setimgSrc] = useState('');
  const [name, setName] = useState('');
  const [Price, setPrice] = useState();
  const [flag, setFlag] = useState(false);
  const [ElementsArr, setElementsArr] = useState();

  useEffect(() => {
    for (let index = 0; index < 5; index++) {
      cloudDB
        .collection('Elements')
        .doc('GK6poUoOk3HfhsgRtDbj')
        .get()
        .then(function (doc) {
          if (doc.exists) {
            var name2 = doc.data().Name;
            var Price2 = doc.data().Price;
            var imgSrc2 = doc.data().Pic;

            testArr.push({
              name: name2,
              imgSrc: imgSrc2,
              Price: Price2,
            });

            setElementsArr(testArr);
          } else {
            console.log('err');
          }
        });
    }
  }, []);

  return (
    <div className="HomeCardsCont">
      <div className="title">
        <span id="t1">OUR PRODUCTS</span>
        <span id="t2">NEW ARRIVALS</span>
      </div>

      <div className="cards">
        {ElementsArr ? (
          ElementsArr.map((Item, index) => (
            <ShopCard
              name={Item.name}
              imgSrc={Item.imgSrc}
              Price={Item.Price}
              key={index}
            />
          ))
        ) : (
          // <div>{console.log(ElementsArr)}</div>
          <div>Loading</div>
        )}
      </div>
    </div>
  );
}

// useEffect(() => {
//     for (let index = 0; index < 3; index++) {
//       cloudDB
//         .collection('Elements')
//         .doc('GK6poUoOk3HfhsgRtDbj')
//         .get()
//         .then(function (doc) {
//           if (doc.exists) {
//             var name2 = doc.data().Name;
//             var Price2 = doc.data().Price;
//             var imgSrc2 = doc.data().Pic;

//             setElementsArr([
//               ...ElementsArr,
//               {
//                 name: name2,
//                 imgSrc: imgSrc2,
//                 Price: Price2,
//               },
//             ]);
//           } else {
//             console.log('err');
//           }
//         });
//     }
//     // console.log('setting');
//     // setElementsArr(['testArr']);

//     // setFlag(true);
//   }, []);
