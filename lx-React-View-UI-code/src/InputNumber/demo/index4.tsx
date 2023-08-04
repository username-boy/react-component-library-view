import React from 'react';
import InputNumber from '../index';
export default function InputNumberDemo1() {
  const blur = (value: any) => {
    console.log(value);
  };

  const focus = (value: any) => {
    console.log(value);
  };

  const change = (value: any) => {
    console.log(value);
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', userSelect: 'none' }}>
      <InputNumber max={10} value={1} min={0} blur={blur} focus={focus} change={change} />
    </div>
  );
}
