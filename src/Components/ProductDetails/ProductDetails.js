import './ProductDetails.css';
import firebase from 'firebase';
import { useEffect, useState } from 'react';
import CustomPaging from '../CustomPaging/CustomPaging';
import { ImCheckmark } from 'react-icons/im';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosHeartEmpty } from 'react-icons/io';
import { MdCompareArrows } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaGoogle } from 'react-icons/fa';
/*tabs*/
import { Tabs } from 'antd';

/*related*/
import RelatedProducts from '../RelatedProducts/RelatedProducts';
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
const firebaseConfig = {
  apiKey: 'AIzaSyA1unudLQxcVqOzcrwx3P9sYUfK1Jq2c7E',
  authDomain: 'teststore-f5e52.firebaseapp.com',
  projectId: 'teststore-f5e52',
  storageBucket: 'teststore-f5e52.appspot.com',
  messagingSenderId: '792894613298',
  appId: '1:792894613298:web:d23de7e19db482981f992b',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
let cloudDB = firebase.firestore();

export default function ProductDetails({ ProductName }) {
  const [ProductObj, setProductObj] = useState();
  useEffect(() => {
    const test = [];
    cloudDB
      .collection('Elements')
      .where('Name', '==', ProductName)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data());
          test.push(doc.data());
        });
        setProductObj(test);
      })
      .catch(function (error) {
        console.log('Error getting documents: ', error);
      });
  }, []);

  /*tabs*/
  //   function TabsInfo() {
  //     return (
  //       <Tabs defaultActiveKey="1" onChange={callback}>
  //         <TabPane tab="Tab 1" key="1">
  //           {ProductObj ? ProductObj[0] : 'load'}
  //         </TabPane>
  //         <TabPane tab="Tab 2" key="2">
  //           Content of Tab Pane 2
  //         </TabPane>
  //         <TabPane tab="Tab 3" key="3">
  //           Content of Tab Pane 3
  //         </TabPane>
  //       </Tabs>
  //     );
  //   }

  return (
    <div className="ProductDetails">
      {ProductObj ? (
        ProductObj.map((Item, index) => (
          <div className="wholeInfo">
            <div className="imgBG">
              {/* <CustomPaging /> */}
              <img src={Item.Pic} alt="ProductImg"></img>
            </div>
            <div className="writtenInfo">
              <span className="ProductName">{Item.Name}</span>
              <span className="ProductPrice">
                {Item.IfSale ? (
                  <span>
                    <span> ${Item.Price}.00 </span>
                    <del id="sale">${Item.IfSale}.00 </del>
                  </span>
                ) : (
                  <span>${Item.Price}.00</span>
                )}
              </span>
              <span>
                <span className="ProductAvailable">Available:</span>{' '}
                <ImCheckmark color="#50b960" /> In Stock
              </span>
              <p className="ProductDescription des">
                <span className="ProductAvailable des ">Quick View: </span>
                {Item.Description}
              </p>
              <div className="coloredBtns">
                <button></button>
                <button></button>
                <button></button>
              </div>
              <div className="iconsBtns">
                <button>
                  <AiOutlineMail size={25} className="icon" />
                  Email to a Friend
                </button>
                <button>
                  <IoIosHeartEmpty size={25} className="icon" />
                  Wishlist
                </button>
                <button>
                  <MdCompareArrows size={25} className="icon" />
                  Compare
                </button>
              </div>
              <div className="ignoreForWhile">
                {/* <button className="login_btn">Add to cart</button> */}
                <button></button>
                <button></button>
              </div>
              <div className="iconsBtns">
                <button>
                  <FaFacebookF /> Facebook
                </button>
                <button>
                  <AiOutlineTwitter /> Twitter
                </button>
                <button>
                  <FaGoogle /> Google
                </button>
                <button>
                  <ImInstagram /> Instagram
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>loading</div>
      )}
      <Tabs defaultActiveKey="1" onChange={callback} className="tabs">
        <TabPane tab="MORE INFO" key="1">
          {ProductObj ? ProductObj[0].Description : 'load'}
        </TabPane>
        <TabPane tab="DATA SHEET" key="2">
          {ProductObj ? ProductObj[0].Name : 'load'}
        </TabPane>
        <TabPane tab="REVIEWS" key="3">
          {ProductObj ? ProductObj[0].Description : 'load'}
        </TabPane>
      </Tabs>
      <RelatedProducts />
    </div>
  );
}
