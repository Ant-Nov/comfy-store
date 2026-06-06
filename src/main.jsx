import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {Provider} from 'react-redux';
import { store } from './store.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

async function enableMocking() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser');
    return worker.start({ serviceWorker: { url: `${import.meta.env.BASE_URL}mockServiceWorker.js` } });
  }

  return;
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider store={store}>
        <ToastContainer position='top-center' autoClose={3000} />
        <App />
      </Provider>
    </StrictMode>,
  );
});
