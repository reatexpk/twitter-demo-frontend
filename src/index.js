// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';
import 'flexboxgrid2';

const store = createStore(rootReducer);
store.subscribe(store.getState);
const root = document.getElementById('root');

if (root !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root,
  );
}
registerServiceWorker();
