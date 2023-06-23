import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Index';
import { Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AnimatePresence mode='wait'>
      <ToastContainer />
      <Suspense fallback={<></>}>
        <RouterProvider router={router} />
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
