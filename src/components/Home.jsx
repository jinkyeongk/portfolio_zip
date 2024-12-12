import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home= () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-8">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
        
        <a href="/projects">
          <button className="flex items-center px-6 py-3 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-300">
            View Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </a>
      </main>
    </div>
  );
};

export default Home;