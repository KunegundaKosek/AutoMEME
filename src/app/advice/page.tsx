'use client';

import { useState } from 'react';

interface Question {
  id: number;
  question: string;
  answers: string[];
}

export default function Advice() {
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setQuestions([
      {
        id: Date.now(),
        question: question,
        answers: [],
      },
      ...questions,
    ]);
    setQuestion('');
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Ask for Advice</h1>

        <form onSubmit={handleSubmit} className="mb-12">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
            rows={3}
            placeholder="What would you like advice about?"
          />
          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            Ask Question
          </button>
        </form>

        <div className="space-y-8">
          {questions.map((q) => (
            <div key={q.id} className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {q.question}
              </h3>
              
              {q.answers.length > 0 ? (
                <div className="space-y-4">
                  {q.answers.map((answer, index) => (
                    <div key={index} className="bg-white p-4 rounded">
                      {answer}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No answers yet</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}