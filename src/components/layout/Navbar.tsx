"use client";

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Memes123', href: '/memes' },
  { name: 'Videos', href: '/videos' },
  { name: 'Confessions', href: '/confessions' },
  { name: 'Advice', href: '/advice' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-red-600">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold text-white">
          AutoMEME
        </Link>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${
                pathname === item.href
                  ? 'text-white font-bold'
                  : 'text-red-100 hover:text-white'
              } transition duration-150`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-6 pb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? 'text-white font-bold'
                    : 'text-red-100 hover:text-white'
                } block py-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}