import { CacheContext } from '@/ui/contexts/CacheContext';
import React, { Suspense, useContext } from 'react';

const SushiMicroFrontendPhotos = React.lazy(
  async () => await import('SushiMicroFrontendPhotos/SushiMicroFrontendPhotos')
);

const PhotosPage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const { photoCacheActions } = useContext(CacheContext);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SushiMicroFrontendPhotos cacheActions={photoCacheActions} />
    </Suspense>
  );
};

export default PhotosPage;
