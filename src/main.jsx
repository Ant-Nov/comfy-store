import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {Provider} from 'react-redux';
import { store } from './store.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer position='top-center' autoClose={3000} />
      <App />
    </Provider>
  </StrictMode>,
);
