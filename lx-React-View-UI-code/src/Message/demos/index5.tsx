import React from 'react';
import Button from '../../Button';
import Message from '..';

export default function index1() {
  const message = (val: string) => {
    Message.info({
      content: val,
      duration: 5000,
      clearable: true,
    });
  };

  return (
    <>
      <Button
        type="primary"
        style={{ marginRight: '20px' }}
        onClick={() => message('This is an info message!')}
      >
        Update message
      </Button>
    </>
  );
}
