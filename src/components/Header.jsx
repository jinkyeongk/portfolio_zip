import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full px-4 py-6 bg-white">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:underline">About</a>
          </li>
          <li>
            <a href="/projects" className="hover:underline">Projects</a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;