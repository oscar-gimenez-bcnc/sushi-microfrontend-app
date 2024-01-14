import type React from 'react';

const HomePage: React.FC = () => {
  return (
    <>
      <div className="flex flex-row items-center rounded-xl bg-indigo-100 p-8 text-center">
        <div className="w-2/3  pl-8">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">Sushi Photos</h1>
          <h2 className="mb-4 text-2xl text-gray-700">A microfrontend usage example</h2>
          <p className="text-gray-600">
            Discover here the best way to display your photos. Join us in Sushi Photos and enjoy sushi!
          </p>
        </div>
        <div className="w-1/3">
          <img src="./sushi.jpg" alt="main-image" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
