import React, { Suspense } from 'react';

const SushiMicroFrontendPhotos = React.lazy(() => import('SushiMicroFrontendPhotos/SushiMicroFrontendPhotos'));

const Photos: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SushiMicroFrontendPhotos />
    </Suspense>
  );
};

export default Photos;
