import '../HomeCardsCont/HomeCardsCont.css';
import firebase from 'firebase';
import { useEffect, useState } from 'react';
import ShopCard from '../ShopCard/ShopCard';
import './ShopCardCont.css';
import ItemsLayout from '../ItemsLayout/ItemsLayout';
import { Pagination } from 'antd';

// import { FbAppReady } from '../../firebaseConfig';
// firebase.initializeApp(firebaseConfig);

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };
const firebaseConfig = {
  apiKey: 'AIzaSyA1unudLQxcVqOzcrwx3P9sYUfK1Jq2c7E',
  authDomain: 'teststore-f5e52.firebaseapp.com',
  projectId: 'teststore-f5e52',
  storageBucket: 'teststore-f5e52.appspot.com',
  messagingSenderId: '792894613298',
  appId: '1:792894613298:web:d23de7e19db482981f992b',
};
// firebase.initializeApp(firebaseConfig);
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app(); // if already initialized, use that one
// }
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
let cloudDB = firebase.firestore();

export default function ShopCardCont(props) {
  const { setProductName, searchCategory } = props;
  const [Id, setId] = useState();
  const [ObjWhithId, setObjWhithId] = useState();
  const [ElementsArr, setElementsArr] = useState([]);
  useEffect(() => {
    const test = [];
    if (searchCategory === 'all') {
      console.log("it's all");
      var citiesRef = cloudDB.collection('Elements').limit(9);
      citiesRef.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // setId(doc.id);
          // doc.data().test = 'testing';
          // setObjWhithId(doc.data());
          doc.data().id = doc.id;

          console.log(doc.data());
          console.log(doc.id);
          test.push(doc.data());
        });
        setElementsArr(test);
      });
    } else {
      console.log("it's Tables");

      cloudDB
        .collection('Elements')
        .where('Category', '==', 'Tables')
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            // setId(doc.id);
            // doc.data().test = 'testing';
            // setObjWhithId(doc.data());
            doc.data().id = doc.id;

            console.log(doc.data());
            console.log(doc.id);
            test.push(doc.data());
          });
          setElementsArr(test);
        });
    }
  }, []);

  return (
    <div className="ShopCardsCont">
      <ItemsLayout />
      <div className="cards">
        {ElementsArr ? (
          ElementsArr.map((Item, index) => (
            <ShopCard
              name={Item.Name}
              imgSrc={Item.Pic}
              Price={Item.Price}
              sale={Item.IfSale}
              key={index}
              setProductName={setProductName}
            />
          ))
        ) : (
          // <div>{console.log(ElementsArr)}</div>
          <div>loading</div>
        )}
      </div>
      <Pagination defaultCurrent={1} total={40} />
    </div>
  );
}
