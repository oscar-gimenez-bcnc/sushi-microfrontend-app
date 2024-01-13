import React, { Suspense } from 'react';

const SushiMicroFrontendUsers = React.lazy(() => import('SushiMicroFrontendUsers/SushiMicroFrontendUsers'));

const Users: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SushiMicroFrontendUsers />
    </Suspense>
  );
};

export default Users;
