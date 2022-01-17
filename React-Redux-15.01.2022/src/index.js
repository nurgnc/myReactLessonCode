import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';

import App from './App';

ReactDOM.render(
  <ReduxProvider store={store}>
    <PersistGate loading={<h1>Yukleniyor</h1>} persistor={persistor}>
      <App />
    </PersistGate>
  </ReduxProvider>,
  document.getElementById('root')
);
