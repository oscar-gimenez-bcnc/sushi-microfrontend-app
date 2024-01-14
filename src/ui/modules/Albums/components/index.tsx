import MicroFrontendLoader from '@/ui/components/MicroFrontendLoader';
import { CacheContext } from '@/ui/contexts/CacheContext';
import React, { Suspense, useContext } from 'react';

const SushiMicroFrontendAlbums = React.lazy(
  async () => await import('SushiMicroFrontendAlbums/SushiMicroFrontendAlbums')
);

const AlbumsPage: React.FC = () => {
  const { albumCacheActions } = useContext(CacheContext);

  return (
    <Suspense fallback={<MicroFrontendLoader />}>
      <SushiMicroFrontendAlbums cacheActions={albumCacheActions} />
    </Suspense>
  );
};

export default AlbumsPage;
