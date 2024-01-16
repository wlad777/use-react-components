import React from 'react';
import { Button, Space, DatePicker, version } from 'antd';

const App = ({ text, onClick }) => (
  <div style={{ padding: '0 24px' }}>
    <h1>antd version: { version }</h1>
    <Space>
      <DatePicker />
      <Button type="primary" onClick={ onClick }>{ text }</Button>
    </Space>
  </div>
);

export default App;

