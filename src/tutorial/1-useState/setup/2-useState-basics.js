import React, { Fragment, useState } from 'react';
// useState - function that returns an array [value, function]
// always starts with 'use'
// component with hook must be uppercase
// must be in function/component body
// cannot call conditionally

const UseStateBasics = () => {
  // console.log(useState('hello world'))
  // onst value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const [text, setText] = useState('Random Title');

  const handleClick = () => {
    if (text === 'Random Title') setText('Hello World!');
    else setText('Random Title');
  };

  return (
    <Fragment>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </Fragment>
  );
};

export default UseStateBasics;
