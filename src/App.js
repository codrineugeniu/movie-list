import React from 'react';
import { Layout } from 'antd';
import Header from './shared/Header/Header';
import { Home } from './pages/Home/Home';
import 'antd/dist/antd.css'

import './App.css';

const { Content, Footer } = Layout;
function App() {
  return (
    <Layout>
      <Header />
      <Content>
        <Home />
      </Content>
      <Footer></Footer>
    </Layout>
  )
}

export default App;
