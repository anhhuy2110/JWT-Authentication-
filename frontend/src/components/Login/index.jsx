import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import "@ant-design/v5-patch-for-react-19";
import { Link } from "react-router";

const Login = () => {
  const onFinish = async (values) => {
    try {
      const response = await fetch("https://localhost:7125/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.username,
          password: values.password,
        }),
      });

      if (!response.ok) {
        alert("Invalid credentials");
      } else {
        alert("Login successful");
      }
    } catch (error) {
      alert(error.message || "Login failed");
    }
  };
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Log in
      </h1>
      <Form
        name="login"
        initialValues={{ remember: true }}
        style={{ maxWidth: 360 }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="">Forgot password</a>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
          or <Link to="/register">Register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
