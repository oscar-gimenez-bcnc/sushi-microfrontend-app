import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AlbumsPage from '@/modules/Albums/components';
import PhotosPage from '@/modules/Photos/components';
import UsersPage from '@/modules/Users/components';
import HomePage from '@/modules/HomePage/components';
import AppLayout from '@/components/AppLayout';
import ErrorPage from '@/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/albums" element={<AlbumsPage />} />
      <Route path="/photos" element={<PhotosPage />} />
    </Route>
  )
);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
