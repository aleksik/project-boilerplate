import * as React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import Store from './store';

const initialState = (window as any).___INITIAL_STATE___ || {};
const store = new Store(initialState);

const renderFunc = process.env.NODE_ENV === 'production'
  ? hydrate
  : render;

renderFunc(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
);