import React, { useState } from 'react';
import './RegistrationForm.css';
import firebase from 'firebase';
import firebaseAuth from 'firebase/auth';

import { Form, Input, Cascader, Select, Checkbox, Button } from 'antd';
const { Option } = Select;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 23 /*was 16*/,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
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

export default function RegistrationForm() {
  const [Email, SetEmail] = useState('');
  const [Password, SetPassword] = useState('');
  const [form] = Form.useForm();

  const Setters = {
    Email: SetEmail,
    Password: SetPassword,
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    Setters[name](value);
    // console.log(name);
  };

  const RegisterSubmit = (e) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Password)
      .then((user) => {
        console.log(user);
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode, errorMessage });
      });
  };

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      layout="vertical"
      size="large"
      className="form"
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      <div className="flex">
        <Form.Item
          className="FormItemWidth"
          name="FirstName"
          label="First Name"
          rules={[
            {
              message: 'The input is not valid First Name!',
            },
            {
              required: true,
              message: 'Please input your First Name',
            },
          ]}
        >
          <Input className="inputWidth" />
        </Form.Item>
        <Form.Item
          name="LastName"
          label="Last Name"
          className="FormItemWidth"
          rules={[
            {
              message: 'The input is not valid Last Name!',
            },
            {
              required: true,
              message: 'Please input your Last Name',
            },
          ]}
        >
          <Input className="inputWidth" />
        </Form.Item>
      </div>
      <Form.Item
        name="CompanyName"
        label="Company Name"
        className="FormItemMargin"
        rules={[
          {
            message: 'The input is not valid Company Name',
          },
          {
            required: true,
            message: 'Please input your Company Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <div className="flex FormItemMargin">
        <Form.Item
          name="Email"
          label="E-mail"
          className="FormItemWidth "
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input
            className="inputWidth"
            value={Email}
            name="Email"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          className="FormItemWidth"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
            className="inputWidth"
            // addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
          />
        </Form.Item>
      </div>
      <Form.Item
        name="Country"
        label="Country"
        className="FormItemMargin"
        rules={[
          {
            type: 'array',
            required: true,
            message: 'Please select your Country!',
          },
        ]}
      >
        <Cascader options={residences} />
      </Form.Item>
      <Form.Item
        name="Address"
        label="Address"
        className="FormItemMargin"
        rules={[
          {
            required: true,
            message: 'Please input Address!',
          },
        ]}
      >
        <Input placeholder="Street address" />
        <Input
          className="inputMargin"
          placeholder="Apartment, Suit, Unit etc. (Optional)"
        />
      </Form.Item>
      <Form.Item
        name="Town/City"
        label="Town/City"
        className="FormItemMargin"
        rules={[
          {
            required: true,
            message: 'Please input Town/City!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <div className="flex FormItemMargin">
        <Form.Item
          name="State/Country"
          label="State/Country"
          className="FormItemWidth"
          rules={[
            {
              message: 'The input is not valid State/Country!',
            },
            {
              required: true,
              message: 'Please input your State/Country!',
            },
          ]}
        >
          <Input className="inputWidth" />
        </Form.Item>
        <Form.Item
          name="Postcode/Zip"
          label="Postcode/Zip"
          className="FormItemWidth"
          rules={[
            {
              required: true,
              message: 'Please input your Postcode/Zip!',
            },
          ]}
        >
          <Input
            className="inputWidth"
            // addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
          />
        </Form.Item>
      </div>

      <Form.Item
        name="password"
        label="Password"
        value={Password}
        onChange={handleChange}
        className="FormItemMargin"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password
          name="Password"
          value={Password}
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        className="FormItemMargin"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                'The two passwords that you entered do not match!'
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <div className="agree">
        {/* <Form.Item>
          <Button type="primary" htmlType="submit" className="login_btn">
            LOGIN
          </Button>
          <Checkbox className="check">Remember me</Checkbox>
        </Form.Item> */}
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject('Should accept agreement'),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            className="login_btn"
            onClick={RegisterSubmit}
          >
            Register
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
