'use client';

import { BookOpen, LogOut, Settings, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">CognifAI</span>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className={`
            ${isOpen ? 'block' : 'hidden'} md:flex
            absolute md:relative top-16 md:top-0 left-0 md:left-auto
            w-full md:w-auto bg-white md:bg-transparent
            flex-col md:flex-row gap-4 p-4 md:p-0
            border-b md:border-0 border-gray-200
          `}>
            <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium">
              Dashboard
            </Link>
            <Link href="/notes" className="text-gray-700 hover:text-blue-600 font-medium">
              Notes
            </Link>
            <Link href="/quizzes" className="text-gray-700 hover:text-blue-600 font-medium">
              Quizzes
            </Link>
            <Link href="/flashcards" className="text-gray-700 hover:text-blue-600 font-medium">
              Flashcards
            </Link>
            <Link href="/analytics" className="text-gray-700 hover:text-blue-600 font-medium">
              Analytics
            </Link>

            <div className="flex gap-2 md:ml-auto">
              <button className="rounded-lg p-2 hover:bg-gray-100 text-gray-700">
                <Settings className="h-5 w-5" />
              </button>
              <button className="rounded-lg p-2 hover:bg-gray-100 text-gray-700">
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
