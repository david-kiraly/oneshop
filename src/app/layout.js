// layout.js
import './globals.css';

import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-indigo-900">
        <div className="container mx-auto px-4 py-6">
          {/* Your header content */}
        </div>
      </header>
      <main className="flex-grow bg-gray-100">
        {children}
      </main>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-6">
          {/* Your footer content */}
        </div>
      </footer>
    </div>
  );
};

export default Layout;
