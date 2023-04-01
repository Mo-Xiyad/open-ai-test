import { Configuration, OpenAIApi } from 'openai';
import React, { useState } from 'react';

const ai = async (prompt: string) => {
  const configuration = new Configuration({
    apiKey: process.env.VITE_OPENAI_API_KEY
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 100,
    n: 1
  });

  return completion.data.choices[0].text;
};

export function Main() {
  const [prompt, setPrompt] = useState('');
  const [responses, setResponses] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = await ai(prompt);
    if (text) {
      setResponses([...responses, text]);
    }
    setPrompt('');
  };

  return (
    <div className="bg-slate-300 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Text Generator</h2>
      <div className="flex flex-col overflow-y-scroll">
        {responses.map((response, index) => (
          <p
            className="mt-4 mb-4 text-gray-800 break-words"
            key={`response-${index}`}
          >
            {response}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          className="block w-full px-2 py-1 rounded shadow bg-slate-400"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter a prompt"
          rows={4}
        />
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow">
          Generate
        </button>
      </form>
    </div>
  );
}
