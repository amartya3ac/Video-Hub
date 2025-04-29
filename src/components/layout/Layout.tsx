import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 pb-16 lg:pb-0">
          {children}
        </main>
      </div>
      <MobileNav />
    </div>
  );
};

export default Layout;