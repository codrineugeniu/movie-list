import React from 'react';
import { Layout, Typography, Empty } from 'antd';
import 'antd/dist/antd.css'

import './App.css';


const { Header, Content, Footer } = Layout;
const { Title } = Typography;
function App() {
  return (
    <Layout>
      <Header>
        <Title>Movie List App</Title>
      </Header>
      <Content>
        <Empty />
      </Content>
      <Footer></Footer>
    </Layout>
  )
}

export default App;
