import './ItemsLayout.css';
import { RiLayoutGridFill } from 'react-icons/ri';
import { RiLayout2Fill } from 'react-icons/ri';
import { Select } from 'antd';
import { useState } from 'react';

const { Option } = Select;

export default function ItemsLayout() {
  const [layout, setLayout] = useState('9');

  function handleChange(value) {
    console.log(`selected ${value}`);
    setLayout(value);
  }
  return (
    <div className="ItemsLayout">
      <div className="layoutButtons">
        <button>
          <RiLayoutGridFill size={23} color="#666666" />
        </button>
        <button>
          <RiLayout2Fill size={23} color="#666666" />
        </button>
      </div>
      <span style={{ fontSize: '17px', color: '#989898' }}>
        Show Item 1-{layout} Of 36
      </span>
      <Select
        defaultValue="9 Items/Page"
        style={{ width: 150, position: 'relative', float: 'right' }}
        onChange={handleChange}
      >
        <Option value="9">9 Items/Page</Option>
        <Option value="12">12 Items/Page</Option>
        <Option value="36">36 Items/Page</Option>
      </Select>
    </div>
  );
}
