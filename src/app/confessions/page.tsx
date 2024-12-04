'use client';

import { useState } from 'react';

interface Confession {
  id: number;
  content: string;
  date: string;
}

export default function Confessions() {
  const [confessions, setConfessions] = useState<Confession[]>([]);
  const [newConfession, setNewConfession] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newConfession.trim()) return;

    const confession: Confession = {
      id: Date.now(),
      content: newConfession,
      date: new Date().toISOString(),
    };

    setConfessions([confession, ...confessions]);
    setNewConfession('');
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Anonymous Confessions</h1>
        
        <form onSubmit={handleSubmit} className="mb-12">
          <textarea
            value={newConfession}
            onChange={(e) => setNewConfession(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
            rows={4}
            placeholder="Share your confession anonymously..."
          />
          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            Submit Confession
          </button>
        </form>

        <div className="space-y-6">
          {confessions.map((confession) => (
            <div
              key={confession.id}
              className="bg-gray-50 p-6 rounded-lg shadow"
            >
              <p className="text-gray-800">{confession.content}</p>
              <p className="mt-2 text-sm text-gray-500">
                {new Date(confession.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}