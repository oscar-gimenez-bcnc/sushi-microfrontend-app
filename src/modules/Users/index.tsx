import React, { Suspense } from 'react';

const SushiMicroFrontendUsers = React.lazy(async () => await import('SushiMicroFrontendUsers/SushiMicroFrontendUsers'));

const Users: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SushiMicroFrontendUsers />
    </Suspense>
  );
};

export default Users;
