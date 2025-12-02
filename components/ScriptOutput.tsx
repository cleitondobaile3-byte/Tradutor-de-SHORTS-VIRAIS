
import React, { useState } from 'react';
import { ClipboardIcon } from './icons/ClipboardIcon';

interface ScriptOutputProps {
  script: string;
}

export const ScriptOutput: React.FC<ScriptOutputProps> = ({ script }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(script).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-slate-700 relative animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-slate-300">Your Viral Script ✨</h2>
        <button
          onClick={handleCopy}
          className="flex items-center text-sm px-3 py-1.5 rounded-full bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors duration-200"
        >
          <ClipboardIcon className="w-4 h-4 mr-2" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="bg-slate-900 rounded-lg p-4 whitespace-pre-wrap text-slate-300 max-h-96 overflow-y-auto">
        {script}
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
