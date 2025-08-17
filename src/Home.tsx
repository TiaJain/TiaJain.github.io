import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Resume', href: 'https://github.com/TiaJain/resume/blob/main/Tia_Jain_Resume.pdf' },
  { label: 'Contact', href: '/contact' },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 scroll-smooth">
      <header className="w-full flex flex-col items-center">
        <h1 className="text-5xl text-indigo-600 font-bold mb-4">hi, i'm tia!</h1>
        <div className="text-gray-700 mb-6 text-center">
          <p className="text-lg mb-2">👩‍💻 currently a software engineer at meta</p>
          <p className="text-lg">🎓 cs grad from uc berkeley (co2025)</p>
        </div>
        <nav className="flex flex-wrap gap-4 mb-2">
          {navItems.map((item) => (
            item.href.startsWith('/') ? (
              <Link
                key={item.label}
                to={item.href}
                className="px-6 py-3 rounded-full bg-white text-indigo-600 font-semibold text-lg shadow transition hover:bg-indigo-100 hover:text-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white text-indigo-600 font-semibold text-lg shadow transition hover:bg-indigo-100 hover:text-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                {item.label}
              </a>
            )
          ))}
        </nav>
      </header>
    </div>
  );
} 