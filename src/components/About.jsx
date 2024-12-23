import React from 'react';
import { ArrowRight,  Mail } from 'lucide-react';

const About = () => {
  const socialLinks = [
    { icon: Mail, href: "mailto:jinkkung@naver.com", label: "Email" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <main className="relative flex flex-col items-center justify-center flex-1 px-4 py-20">
        <div className="mb-8">
          <img
            src="/api/placeholder/150/150"
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-lg mb-4"
          />
        </div>

        {/* Main content */}
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            김진경
          </h1>
          
          <h2 className="text-4xl font-bold mb-4 text-gray-800">About Me</h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            안녕하세요. 저는 풀스택 웹개발자 김진경입니다.
            새로운 기술을 배우고 직접 만드는 것을 좋아합니다.<br/>
            <span className="block mt-4 text-lg">
              React • Node.js • TypeScript • Next.js • MongoDB
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="/projects">
              <button className="flex items-center px-8 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                프로젝트 보기
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </a>
            <a href="/contact">
              <button className="flex items-center px-8 py-3 font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg border border-blue-600">
                연락하기
              </button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default Home;