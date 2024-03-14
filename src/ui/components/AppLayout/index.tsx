import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Notifications from '@/ui/modules/Notifications/components';

const AppLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Notifications />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
