import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import Albums from '../modules/Albums';
import Photos from '../modules/Photos';
import Users from '../modules/Users';

import HomePage from '../modules/HomePage';
import AppLayout from '../components/AppLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<Users />} />
      <Route path="/albums" element={<Albums />} />
      <Route path="/photos" element={<Photos />} />
    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
