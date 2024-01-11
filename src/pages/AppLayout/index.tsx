import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

const AppLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
