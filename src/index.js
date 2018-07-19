// @flow
// Test deployment
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';
import 'flexboxgrid2';

const root = document.getElementById('root');

if (root !== null) {
  ReactDOM.render(<App />, root);
}
registerServiceWorker();
