import { Post } from '../types';

const POSTS: Post[] = [
  {
    id: 1,
    title: "Getting Started with Web Development%%%%%%%%%%%%%%%%%%%",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2024-03-15",
  },
  {
    id: 2,
    title: "The Future of Technology",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2024-03-14",
  },
  // Add more blog posts as needed
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog</h1>
        
        <div className="space-y-12">
          {POSTS.map((post) => (
            <article key={post.id} className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="text-gray-700">{post.content}</p>
              <button className="mt-4 text-red-600 hover:text-red-700 font-medium">
                Read more →
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}