import { CacheContext } from '@/ui/contexts/CacheContext';
import React, { Suspense, useContext } from 'react';

const SushiMicroFrontendUsers = React.lazy(async () => await import('SushiMicroFrontendUsers/SushiMicroFrontendUsers'));

const UsersPage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const { userCacheActions } = useContext(CacheContext);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SushiMicroFrontendUsers cacheActions={userCacheActions} />
    </Suspense>
  );
};

export default UsersPage;
