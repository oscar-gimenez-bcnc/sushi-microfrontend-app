import MicroFrontendLoader from '@/ui/components/MicroFrontendLoader';
import { CacheContext } from '@/ui/contexts/CacheContext';
import React, { Suspense, useContext } from 'react';
import { useParams } from 'react-router-dom';

const SushiMicroFrontendUsers = React.lazy(async () => await import('SushiMicroFrontendUsers/SushiMicroFrontendUsers'));

const UsersPage: React.FC = () => {
  const { userCacheActions } = useContext(CacheContext);
  const { id } = useParams<{ id?: string }>();

  return (
    <Suspense fallback={<MicroFrontendLoader />}>
      <SushiMicroFrontendUsers cacheActions={userCacheActions} userId={id} />
    </Suspense>
  );
};

export default UsersPage;
