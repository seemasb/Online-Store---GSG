import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export default function ResponsiveMenu() {
  const handleClick = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={handleClick}
      style={{ width: '100%', backgroundColor: 'transparent' }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <SubMenu key="sub4" icon={<MenuOutlined />}>
        <Menu.Item key="9">Home</Menu.Item>
        <Menu.Item key="10">Shop</Menu.Item>
        <Menu.Item key="11">Login</Menu.Item>
        <Menu.Item key="12">Register</Menu.Item>
      </SubMenu>
    </Menu>
  );
}
