import React, { Suspense } from 'react';

const SushiMicroFrontendAlbums = React.lazy(
  async () => await import('SushiMicroFrontendAlbums/SushiMicroFrontendAlbums')
);

const AlbumsPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SushiMicroFrontendAlbums />
    </Suspense>
  );
};

export default AlbumsPage;
