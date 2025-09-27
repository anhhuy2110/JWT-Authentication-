// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Layout, Card, Typography, Button, Space } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const Dashboard = ({userName}) => {
  
  return (
    <Layout style={{ minHeight: "100vh", width: "100vw" }}>
      <Header style={{ background: "#001529", padding: "0 16px" }}>
        <Space style={{ width: "100%", justifyContent: "space-between" }}>
          <Title level={3} style={{ color: "white", margin: "16px 0" }}>
            Dashboard
          </Title>

          <Link to="/">
            <Button type="primary" danger icon={<LogoutOutlined />}>
              Logout
            </Button>
          </Link>
        </Space>
      </Header>
      <Content style={{ padding: "24px", background: "#f0f2f5" }}>
        <Card>
          <Title level={4}>
            <UserOutlined style={{ marginRight: 8 }} /> Welcome,{userName}!
          </Title>
          <Text>
            You are logged in as <strong>{"user"}</strong>.
          </Text>
          <Card title="User Information" style={{ marginTop: 16 }}>
            <Text strong>Username: </Text>
            <Text>{userName}</Text>
            <br />
            <Text strong>Role: </Text>
            <Text>{"Admin"}</Text>
          </Card>
        </Card>
      </Content>
    </Layout>
  );
};

export default Dashboard;
