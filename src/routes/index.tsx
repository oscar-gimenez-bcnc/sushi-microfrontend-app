import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import Albums from '../modules/Albums/components';
import Photos from '../modules/Photos/components';
import Users from '../modules/Users/components';

import HomePage from '../modules/HomePage/components';
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

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
