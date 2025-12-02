
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

interface ScriptInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const ScriptInput: React.FC<ScriptInputProps> = ({ value, onChange, onSubmit, isLoading }) => {
  return (
    <div className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-slate-700 transition-all duration-300">
      <label htmlFor="script-input" className="block text-lg font-medium text-slate-300 mb-3">
        Paste your original script here
      </label>
      <textarea
        id="script-input"
        value={value}
        onChange={onChange}
        placeholder="e.g., Today I'm going to show you three secrets about ancient Rome..."
        className="w-full h-48 bg-slate-900 border border-slate-600 rounded-lg p-4 text-slate-300 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200 resize-none"
        disabled={isLoading}
      />
      <button
        onClick={onSubmit}
        disabled={isLoading}
        className="mt-6 w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:scale-100"
      >
        <SparklesIcon className="w-5 h-5 mr-2" />
        {isLoading ? 'Generating...' : 'Make Viral Script'}
      </button>
    </div>
  );
};
