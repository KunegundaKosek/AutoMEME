import { Github, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-red-100">
              Bringing you the best content across memes, videos, and community discussions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/memes" className="text-red-100 hover:text-white">Memes</Link></li>
              <li><Link href="/videos" className="text-red-100 hover:text-white">Videos</Link></li>
              <li><Link href="/contact" className="text-red-100 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-red-100 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-red-100 hover:text-white">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-red-500 text-center text-red-100">
          <p>&copy; {new Date().getFullYear()} WebApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}