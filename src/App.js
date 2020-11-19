import React from 'react';
import logo from './logo.svg';
import './App.less';
import {Button} from 'antd'
import {PlusOutlined} from '@ant-design/icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button type="primary" icon={<PlusOutlined />}>按钮</Button>
      </header>
    </div>
  );
}

export default App;
