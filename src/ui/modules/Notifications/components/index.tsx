import MicroFrontendLoader from '@/ui/components/MicroFrontendLoader';
import { CacheContext } from '@/ui/contexts/CacheContext';
import React, { Suspense, useContext } from 'react';

const SushiMicroFrontendNotifications = React.lazy(
  async () => await import('SushiMicroFrontendNotifications/SushiMicroFrontendNotifications')
);

const Notifications: React.FC = () => {
  const { albumCacheActions } = useContext(CacheContext);

  return (
    <Suspense fallback={<MicroFrontendLoader />}>
      <SushiMicroFrontendNotifications cacheActions={albumCacheActions} />
    </Suspense>
  );
};

export default Notifications;
