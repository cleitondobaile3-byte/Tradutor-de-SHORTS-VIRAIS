
import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="w-10 h-10 border-4 border-slate-600 border-t-cyan-400 rounded-full animate-spin"></div>
    </div>
  );
};
