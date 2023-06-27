import React from 'react';
import Button from '../../Button';
import Message from '../index';

export default function index1() {
  return (
    <>
      <Button
        type="primary"
        style={{ marginRight: '20px' }}
        onClick={() => Message.info('This is an info message!')}
      >
        Info
      </Button>
      <Button
        type="danger"
        style={{ marginRight: '20px' }}
        onClick={() => Message.error('This is an error message!')}
      >
        Error
      </Button>
      <Button
        type="warning"
        style={{ marginRight: '20px' }}
        onClick={() => Message.warning('This is an warning message!')}
      >
        Warning
      </Button>
      <Button
        style={{ background: '#19b42a', marginRight: '20px' }}
        onClick={() => Message.success('This is an success message!')}
      >
        Success
      </Button>
      <Button
        style={{ background: '#f2f3f5', color: '#000000', marginRight: '20px' }}
        onClick={() => Message.normal('This is an normal message!')}
      >
        Normal
      </Button>
      <Button
        type="warning"
        loading
        style={{ marginRight: '20px' }}
        onClick={() => Message.loading('This is an loading message!')}
      >
        Loading
      </Button>
    </>
  );
}
