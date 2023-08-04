import React from 'react';
import Switch from '../index';

export default function SwitchDemo2() {
  const handle = (state:any) => {
    alert(state.value);
  };
  return (
    <div>
      <Switch handleClick={handle} />
    </div>
  );
}
