import React from 'react';
import Button from '..';

export default function ButtonDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button type="primary" onClick={()=>alert('onClick-test-success')}>基础按钮</Button>
      <Button type="danger">危险按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="text">文本按钮</Button>
    </div>
  );
}
