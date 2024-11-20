import React from 'react';
import { Globe2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="/teacher-login" className="text-gray-400 hover:text-gray-500">
            Teacher Portal
          </a>
          <a href="/admin-login" className="text-gray-400 hover:text-gray-500">
            Admin Portal
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center">
            <Globe2 className="h-6 w-6 text-indigo-600 mr-2" />
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; {new Date().getFullYear()} Gotta Be Lingual. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}