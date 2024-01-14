import { ErrorBoundary } from 'react-error-boundary';
import GenericError from './ui/components/GenericError';
import AppRouter from './routes';
import { CacheProvider } from './ui/contexts/CacheContext';

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      <ErrorBoundary fallback={<GenericError />}>
        <CacheProvider>
          <AppRouter />
        </CacheProvider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
