import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import Albums from '../pages/Albums';
import Photos from '../pages/Photos';
import Users from '../pages/Users';

import HomePage from '../pages/HomePage';
import AppLayout from '../pages/AppLayout';

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
