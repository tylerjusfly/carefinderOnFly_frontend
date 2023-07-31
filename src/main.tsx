import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LazyMotion, domMax } from 'framer-motion';
import { Provider } from 'react-redux';
import { store } from './App/store.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <LazyMotion features={domMax}>
      <App />
    </LazyMotion>
  </Provider>
);
