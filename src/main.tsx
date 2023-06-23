import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LazyMotion, domMax } from 'framer-motion';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <LazyMotion features={domMax}>
    <App />
  </LazyMotion>
);
