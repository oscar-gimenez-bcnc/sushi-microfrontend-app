import React from 'react';
import { createRoot } from 'react-dom/client';
import './ui/styles/globals.css';
import { ErrorBoundary } from 'react-error-boundary';
import AppRouter from './routes';
import GenericError from './ui/components/GenericError';
import { CacheProvider } from './ui/contexts/CacheContext';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <div className="container mx-auto">
      <ErrorBoundary fallback={<GenericError />}>
        <CacheProvider>
          <AppRouter />
        </CacheProvider>
      </ErrorBoundary>
    </div>
  </React.StrictMode>
);
