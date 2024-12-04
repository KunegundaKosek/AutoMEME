import { Play } from 'lucide-react';
import { Video } from '../types';

const VIDEOS: Video[] = [
  {
    id: 1,
    title: "Amazing Nature",
    url: "https://example.com/video1",
    thumbnail: "https://source.unsplash.com/random/800x600?nature",
  },
  {
    id: 2,
    title: "City Life",
    url: "https://example.com/video2",
    thumbnail: "https://source.unsplash.com/random/800x600?city",
  },
  // Add more videos as needed
];

export default function Videos() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Featured Videos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VIDEOS.map((video) => (
            <div key={video.id} className="relative group">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-16 h-16 text-white" />
                </div>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-gray-900">{video.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}