import '../HomeCardsCont/HomeCardsCont.css';
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
// var testArr = [];

const adding = () => {
  // Add a new document with a generated id.
  cloudDB
    .collection('Elements')
    .add({
      Name: 'Black Chair',
      Category: 'Chair',
      Price: 30,
      IfSale: 0,
      Description: 'Good chair',
      Pic:
        'http://www.pngplay.com/wp-content/uploads/2/Modern-Chair-Transparent-File.png',
    })
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
};

export default function HomeCardContTest() {
  const [Id, setId] = useState();
  const [ObjWhithId, setObjWhithId] = useState();
  const [ElementsArr, setElementsArr] = useState([]);

  useEffect(() => {
    const test = [];
    var citiesRef = cloudDB.collection('Elements').limit(4);
    // citiesRef.limit(8);
    citiesRef.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots

        setId(doc.id);

        //   setObjWhithId(doc.data());
        //   ObjWhithId.Id = Id;

        test.push(doc.data());
        //   test.push(ObjWhithId);
      });
      setElementsArr(test);

      // console.log(ElementsArr);
    });
  }, []);

  return (
    <div className="HomeCardsCont">
      {/* <button onClick={adding}>add </button> */}
      <div className="title">
        <span id="t1">OUR PRODUCTS</span>
        <span id="t2">NEW ARRIVALS</span>
      </div>
      <div className="cards">
        {/* {ElementsArr.map((Item, Index) => {
          return <div key={Index}>{Item.Name}</div>;
        })} */}
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
          <div>loading</div>
        )}
        {/* again to repeat */}
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
          <div>loading</div>
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
