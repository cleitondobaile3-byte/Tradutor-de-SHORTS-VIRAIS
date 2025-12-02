
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ScriptInput } from './components/ScriptInput';
import { ScriptOutput } from './components/ScriptOutput';
import { Loader } from './components/Loader';
import { generateViralScript } from './services/geminiService';

const App: React.FC = () => {
  const [originalScript, setOriginalScript] = useState<string>('');
  const [viralScript, setViralScript] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateScript = useCallback(async () => {
    if (!originalScript.trim()) {
      setError('Please paste a script first.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setViralScript('');

    try {
      const result = await generateViralScript(originalScript);
      setViralScript(result);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(`Failed to generate script: ${errorMessage}`);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [originalScript]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans flex flex-col items-center p-4 sm:p-6 lg:p-8 transition-colors duration-300">
      <div className="w-full max-w-3xl mx-auto">
        <Header />
        <main className="mt-8 space-y-8">
          <ScriptInput
            value={originalScript}
            onChange={(e) => setOriginalScript(e.target.value)}
            onSubmit={handleGenerateScript}
            isLoading={isLoading}
          />

          {error && (
            <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg text-center">
              {error}
            </div>
          )}

          {isLoading && <Loader />}

          {viralScript && !isLoading && (
            <ScriptOutput script={viralScript} />
          )}
        </main>
        <footer className="text-center mt-12 text-slate-500 text-sm">
          <p>Powered by Gemini API. Designed for modern content creators.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
