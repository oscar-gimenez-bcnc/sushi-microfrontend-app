import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import GenericError from './components/GenericError';
import Header from './components/Header';

const SushiMicroFrontendUsers = React.lazy(() => import('SushiMicroFrontendUsers/SushiMicroFrontendUsers'));

function App() {
  return (
    <div className="container mx-auto">
      <ErrorBoundary fallback={<GenericError />}>
        <Header />
        <div className="container mx-auto">
          <div className="grid h-96 grid-cols-3 gap-4 overflow-x-auto">
            <Suspense fallback={<div>Loading...</div>}>
              <SushiMicroFrontendUsers />
            </Suspense>
          </div>
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default App;
