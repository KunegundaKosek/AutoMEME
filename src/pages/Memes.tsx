import { useState } from 'react';

const MEMES = [
  {
    id: 1,
    title: "Programming Meme",
    url: "https://source.unsplash.com/random/800x600?coding",
  },
  {
    id: 2,
    title: "Tech Humor",
    url: "https://source.unsplash.com/random/800x600?technology",
  },
  // Add more memes as needed
];

export default function Memes() {
  const [likes, setLikes] = useState<Record<number, number>>({});

  const handleLike = (id: number) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Trending Memes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MEMES.map((meme) => (
            <div key={meme.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={meme.url}
                alt={meme.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900">{meme.title}</h2>
                <button
                  onClick={() => handleLike(meme.id)}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                >
                  Like ({likes[meme.id] || 0})
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}