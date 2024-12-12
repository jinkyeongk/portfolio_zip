import React from 'react';
import { ArrowRight } from 'lucide-react';
const Home= () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
    <main className="flex flex-col items-center justify-center flex-1 px-4 py-8">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-xl text-center mb-8">
        안녕하세요. 저는 풀스택 웹개발자 김진경입니다.
        새로운 기술을 배우고 직접 만드는 것을 좋아합니다.<br/>
      </p>
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