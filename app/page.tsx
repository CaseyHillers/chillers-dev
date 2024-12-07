import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600  leading-[1.2]">
          Casey Hillers
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Building cool things, one line of code at a time
        </p>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://linkedin.com/in/caseyhillers" 
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Linkedin size={32} />
          </a>
          <a 
            href="https://github.com/CaseyHillers" 
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <Github size={32} />
          </a>
          <a 
            href="https://bsky.app/profile/chillers.dev" 
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <Twitter size={32} />
          </a>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-300">
            Software engineer passionate about creating innovative solutions. 
          </p>
          <p className="text-gray-300">
            Ex-Google, working at a Gen-AI startup.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;