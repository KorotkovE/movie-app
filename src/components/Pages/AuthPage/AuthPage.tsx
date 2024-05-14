import { useContext, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { login } from '../../../service/auth';
import AuthContext from '../../../context/AuthContext';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';

type FieldType = {
  username?: string;
  password?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export const AuthPage = () => {
  const auth = useContext(AuthContext);

  const { mutateAsync: onLogin } = useMutation({
    mutationFn: login,
  });

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };

  const loginHandler = async () => {
    try {
      const data = await onLogin(form);
      auth.login(data.token, data.userId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input id="email" name="email" type="text" placeholder="Email" onChange={changeHandler} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={changeHandler}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={loginHandler}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
