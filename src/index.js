import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/App';
import store from './components/store/store';
import { Provider } from 'react-redux';

import './style/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);
