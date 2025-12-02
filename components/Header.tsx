
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">
        Viral Script Generator
      </h1>
      <p className="mt-3 text-lg text-slate-400">
        Transform your video scripts into magnetic Portuguese content that captivates and converts.
      </p>
    </header>
  );
};
