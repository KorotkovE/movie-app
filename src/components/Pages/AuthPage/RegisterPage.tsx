import { useContext, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { register } from '../../../service/auth';
import AuthContext from '../../../context/AuthContext';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

type FieldType = {
  email?: string;
  username?: string;
  password?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export const RegisterPage = () => {
  const auth = useContext(AuthContext);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const { mutateAsync: onRgister } = useMutation({
    mutationFn: register,
  });

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };

  const registerHandler = async () => {
    try {
      const data = await onRgister(form);
      auth.login(data.token, data.userId);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 18 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '600px',
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
          style={{ width: '250px' }}>
          <Input id="email" name="email" type="text" placeholder="Email" onChange={changeHandler} />
        </Form.Item>
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
          style={{ width: '250px' }}>
          <Input id="name" name="name" type="text" placeholder="Name" onChange={changeHandler} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          style={{ width: '250px' }}>
          <Input.Password
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={changeHandler}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={registerHandler}>
            Register
          </Button>
          <Link to="/" style={{ marginLeft: '9px' }}>
            On Login
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};
