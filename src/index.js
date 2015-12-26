/* @flow */
import React from 'react';
import { render } from 'react-dom';
import { List } from './components/List/list';

function foo(x: string, y:number) {
  return x.length * y;
}

foo('Hello', 42);

render(<List />, document.getElementById('root'));
