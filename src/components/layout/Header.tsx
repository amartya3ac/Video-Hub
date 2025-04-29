import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, Upload, Bell, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../ui/Button';
import Input from '../ui/Input';

const Header: React.FC = () => {
  const { isAuthenticated, user, login, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-gray-900 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-white font-bold text-xl">Video<span className="text-orange-500">Hub</span></span>
            </Link>
          </div>

          {/* Search Bar - hidden on mobile */}
          <div className="hidden md:block flex-grow mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="flex">
                <Input
                  type="text"
                  placeholder="Search videos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-r-none"
                  icon={<Search className="h-5 w-5 text-gray-500" />}
                />
                <Button
                  type="submit"
                  variant="secondary"
                  className="rounded-l-none"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/upload" className="text-gray-300 hover:text-white">
                  <Upload className="h-5 w-5" />
                </Link>
                <Link to="/notifications" className="text-gray-300 hover:text-white">
                  <Bell className="h-5 w-5" />
                </Link>
                <div className="relative group">
                  <div className="flex items-center cursor-pointer">
                    <img
                      src={user?.avatar}
                      alt={user?.username}
                      className="w-8 h-8 rounded-full"
                    />
                  </div>
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 hidden group-hover:block">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Settings
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <Button onClick={login}>Sign In</Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pt-2 pb-4">
          <form onSubmit={handleSearch}>
            <div className="flex">
              <Input
                type="text"
                placeholder="Search videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-r-none"
              />
              <Button
                type="submit"
                variant="secondary"
                className="rounded-l-none"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900"
            >
              Home
            </Link>
            <Link
              to="/trending"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Trending
            </Link>
            <Link
              to="/subscriptions"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Subscriptions
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            {isAuthenticated ? (
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user?.avatar}
                    alt={user?.username}
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">{user?.username}</div>
                </div>
                <button
                  onClick={logout}
                  className="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">Sign out</span>
                  <User className="h-6 w-6" />
                </button>
              </div>
            ) : (
              <div className="px-5">
                <Button onClick={login} fullWidth>
                  Sign In
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;