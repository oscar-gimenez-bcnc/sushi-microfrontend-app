import { CacheContext } from '@/ui/contexts/CacheContext';
import React, { Suspense, useContext } from 'react';

const SushiMicroFrontendAlbums = React.lazy(
  async () => await import('SushiMicroFrontendAlbums/SushiMicroFrontendAlbums')
);

const AlbumsPage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const { albumCacheActions } = useContext(CacheContext);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SushiMicroFrontendAlbums cacheActions={albumCacheActions} />
    </Suspense>
  );
};

export default AlbumsPage;
