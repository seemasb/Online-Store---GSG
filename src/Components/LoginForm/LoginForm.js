import React from 'react';
import 'antd/dist/antd.css';
import { useState } from 'react';
import './LoginForm.css';
import firebase from 'firebase';
import firebaseAuth from 'firebase/auth';

import { Form, Input, Button, Checkbox } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 0,
    span: 8,
  },
};

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
// firebase.initializeApp(firebaseConfig);

export default function LoginForm() {
  const [Email, SetEmail] = useState('');
  const [Password, SetPassword] = useState('');
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const Setters = {
    Email: SetEmail,
    Password: SetPassword,
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    Setters[name](value);
    // console.log(name);
  };

  const LoginSubmit = (e) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(Email, Password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode, errorMessage });
      });
  };

  return (
    <Form
      {...layout}
      layout="vertical"
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username or email"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input
          size="large"
          style={{ width: '476px' }}
          value={Email}
          name="Email"
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password
          size="large"
          style={{ width: '476px' }}
          name="Password"
          value={Password}
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item {...tailLayout} layout="inline">
        <Button
          type="primary"
          htmlType="submit"
          className="login_btn"
          onClick={LoginSubmit}
        >
          LOGIN
        </Button>
        <Checkbox className="check">Remember me</Checkbox>
      </Form.Item>

      {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}
      <span className="lost">Lost your password?</span>
    </Form>
  );
}
