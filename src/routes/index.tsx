import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AlbumsPage from '@/ui/modules/Albums/components';
import PhotosPage from '@/ui/modules/Photos/components';
import UsersPage from '@/ui/modules/Users/components';
import HomePage from '@/ui/modules/HomePage/components';
import AppLayout from '@/ui/components/AppLayout';
import ErrorPage from '@/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/:id" element={<UsersPage />} />
      <Route path="/albums" element={<AlbumsPage />} />
      <Route path="/photos" element={<PhotosPage />} />
    </Route>
  )
);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
