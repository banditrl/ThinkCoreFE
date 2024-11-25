import { useState } from 'react';
import viteLogo from '/electron-vite.animate.svg';

const HomeModule: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="container mx-auto text-center py-12">
      {/* Logo Section */}
      <div className="flex justify-center space-x-12">
        <a href="https://electron-vite.github.io" target="_blank" rel="noopener noreferrer">
          <img
            src={viteLogo}
            className="logo hover:shadow-blue"
            alt="Vite logo"
          />
        </a>
      </div>

      {/* Title Section */}
      <h1 className="mt-10 text-4xl font-bold">Vite + React</h1>

      {/* Counter Section */}
      <div className="mt-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 text-white font-semibold bg-gray-800 border border-gray-700 rounded hover:bg-gray-700 hover:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:outline-none"
        >
          Count is {count}
        </button>
      </div>

      {/* Footer Section */}
      <p className="mt-10 text-gray-500 text-sm">
        Click on the Vite logo to learn more.
      </p>
    </div>
  );
}

export default HomeModule;
