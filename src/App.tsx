import React from 'react';
import { Main } from './screens/main';

function App() {
  return (
    <div className="bg-slate-400 h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          Guess Whats under the hood
        </h1>
        <p className="text-xl text-gray-700 mb-8 text-center">OpenAi 😅</p>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Main />
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
