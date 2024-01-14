import MicroFrontendLoader from '@/ui/components/MicroFrontendLoader';
import { CacheContext } from '@/ui/contexts/CacheContext';
import React, { Suspense, useContext } from 'react';

const SushiMicroFrontendPhotos = React.lazy(
  async () => await import('SushiMicroFrontendPhotos/SushiMicroFrontendPhotos')
);

const PhotosPage: React.FC = () => {
  const { photoCacheActions } = useContext(CacheContext);

  return (
    <Suspense fallback={<MicroFrontendLoader />}>
      <SushiMicroFrontendPhotos cacheActions={photoCacheActions} />
    </Suspense>
  );
};

export default PhotosPage;
