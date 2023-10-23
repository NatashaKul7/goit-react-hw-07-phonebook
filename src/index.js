import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
