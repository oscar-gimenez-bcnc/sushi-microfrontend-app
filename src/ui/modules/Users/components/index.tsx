import MicroFrontendLoader from '@/ui/components/MicroFrontendLoader';
import { CacheContext } from '@/ui/contexts/CacheContext';
import React, { Suspense, useContext } from 'react';

const SushiMicroFrontendUsers = React.lazy(async () => await import('SushiMicroFrontendUsers/SushiMicroFrontendUsers'));

const UsersPage: React.FC = () => {
  const { userCacheActions } = useContext(CacheContext);

  return (
    <Suspense fallback={<MicroFrontendLoader />}>
      <SushiMicroFrontendUsers cacheActions={userCacheActions} />
    </Suspense>
  );
};

export default UsersPage;
