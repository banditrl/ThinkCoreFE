import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/electron-vite.animate.svg';

function HomeModule() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-screen-xl mx-auto p-8 text-center">
      <div className="flex justify-center space-x-8">
        <a href="https://electron-vite.github.io" target="_blank">
          <img
            src={viteLogo}
            className="h-24 p-6 transition duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-24 p-6 transition duration-300 animate-spin-slow hover:drop-shadow-[0_0_2em_#61dafbaa]"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="mt-8 text-6xl leading-tight">Vite + React</h1>

      <div className="p-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 text-base font-medium text-white transition border border-transparent rounded-lg bg-[#1a1a1a] hover:border-[#646cff] focus:outline-none focus:ring-4 focus:ring-[#646cff]"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code className="font-mono">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default HomeModule;
