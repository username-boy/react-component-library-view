import React from 'react';
import Button from '../../Button';
import Message from '../index';

export default function index1() {
  return (
    <Button type="primary" onClick={() => Message.info('This is an info message!')}>
      Open Message
    </Button>
  );
}
