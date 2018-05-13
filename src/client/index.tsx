import * as React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';

const root = document.getElementById('root');

if (process.env.NODE_ENV === 'production') {
  hydrate(<App />, root);
} else {
  render(<App />, root);
}