import { ErrorBoundary } from 'react-error-boundary';
import GenericError from './components/GenericError';
import AppRouter from './routes';

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      <ErrorBoundary fallback={<GenericError />}>
        <AppRouter />
      </ErrorBoundary>
    </div>
  );
};

export default App;
