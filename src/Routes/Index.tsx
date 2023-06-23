import { lazy } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import NavLayout from '../components/Layout';
import LoginForm from '../Views/Admin/LoginForm';
const GetApiKeys = lazy(() => import('../components/GetApiKeys'));
const AddHospital = lazy(() => import('../Views/AddHospital'));
const LandingPage = lazy(() => import('../Views/LandingPage'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<NavLayout />}>
      <Route index element={<LandingPage />} />
      <Route path='add-a-hospital' element={<AddHospital />} />
      <Route path='api-keys' element={<GetApiKeys />} />

      <Route path='/admin'>
        <Route index element={<LoginForm />} />
      </Route>

      <Route path='*' element={<h1>Page Not found</h1>} />
    </Route>
  )
);
