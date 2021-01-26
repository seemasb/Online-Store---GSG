import './Quantity.css';
import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

export default function Quantity() {
  const [quantity, setQuantity] = useState(0);
  const subQuantity = () => {
    if (quantity) {
      setQuantity(quantity - 1);
    }
  };

  const addQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };
  return (
    <div className="Quantity">
      <div
        style={{
          width: '123px',
          height: '37px',
          display: 'flex',
          border: '1px solid #dadada',
          gap: '27px',
        }}
      >
        <button
          onClick={subQuantity}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            width: '30px',
            float: 'left',
          }}
        >
          <IoIosArrowBack />
        </button>
        <span
          style={{
            fontSize: '16px',
            position: 'relative',
            top: '3px',
            color: '#7d7d7d',
          }}
        >
          {quantity}
        </span>
        <button
          onClick={addQuantity}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            width: '30px',
            position: 'relative',
            float: 'right',
          }}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
