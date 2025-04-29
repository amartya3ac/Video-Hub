import React from 'react';
import { Link } from 'react-router-dom';
import { Home, TrendingUp, PlaySquare, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const MobileNav: React.FC = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 lg:hidden z-50">
      <div className="flex justify-around">
        <Link to="/" className="flex flex-col items-center py-2 text-gray-400 hover:text-orange-500">
          <Home className="h-6 w-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link to="/trending" className="flex flex-col items-center py-2 text-gray-400 hover:text-orange-500">
          <TrendingUp className="h-6 w-6" />
          <span className="text-xs mt-1">Trending</span>
        </Link>
        <Link to="/subscriptions" className="flex flex-col items-center py-2 text-gray-400 hover:text-orange-500">
          <PlaySquare className="h-6 w-6" />
          <span className="text-xs mt-1">Subscriptions</span>
        </Link>
        <Link to={isAuthenticated ? "/profile" : "/login"} className="flex flex-col items-center py-2 text-gray-400 hover:text-orange-500">
          {isAuthenticated && user ? (
            <>
              <img src={user.avatar} alt={user.username} className="h-6 w-6 rounded-full" />
              <span className="text-xs mt-1">Profile</span>
            </>
          ) : (
            <>
              <User className="h-6 w-6" />
              <span className="text-xs mt-1">Sign In</span>
            </>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default MobileNav;