import MicroFrontendLoader from '@/ui/components/MicroFrontendLoader';
import React, { Suspense } from 'react';

const SushiMicroFrontendReviews = React.lazy(
  async () => await import('SushiMicroFrontendReviews/SushiMicroFrontendReviews')
);

const ReviewPage: React.FC = () => {
  return (
    <Suspense fallback={<MicroFrontendLoader />}>
      <SushiMicroFrontendReviews />
    </Suspense>
  );
};

export default ReviewPage;
