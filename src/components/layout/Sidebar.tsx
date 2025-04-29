import React from 'react';
import { Link } from 'react-router-dom';
import { Home, TrendingUp, PlaySquare, Clock, ThumbsUp, Flame, Music, Gamepad2, Film, Lightbulb, BarChart } from 'lucide-react';
import { categories } from '../../data/videos';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-full bg-gray-900 text-gray-300 border-r border-gray-800 overflow-y-auto hidden lg:block">
      <div className="p-4">
        <div className="mb-6">
          <ul className="space-y-2">
            <li>
              <Link to="/" className="flex items-center px-4 py-2 text-gray-300 rounded hover:bg-gray-800 transition-colors">
                <Home className="h-5 w-5 mr-3" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/trending" className="flex items-center px-4 py-2 text-gray-300 rounded hover:bg-gray-800 transition-colors">
                <TrendingUp className="h-5 w-5 mr-3" />
                Trending
              </Link>
            </li>
            <li>
              <Link to="/subscriptions" className="flex items-center px-4 py-2 text-gray-300 rounded hover:bg-gray-800 transition-colors">
                <PlaySquare className="h-5 w-5 mr-3" />
                Subscriptions
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="text-xs text-gray-500 uppercase mb-2 px-4">Library</div>
          <ul className="space-y-2">
            <li>
              <Link to="/history" className="flex items-center px-4 py-2 text-gray-300 rounded hover:bg-gray-800 transition-colors">
                <Clock className="h-5 w-5 mr-3" />
                History
              </Link>
            </li>
            <li>
              <Link to="/liked-videos" className="flex items-center px-4 py-2 text-gray-300 rounded hover:bg-gray-800 transition-colors">
                <ThumbsUp className="h-5 w-5 mr-3" />
                Liked Videos
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="text-xs text-gray-500 uppercase mb-2 px-4">Categories</div>
          <ul className="space-y-2">
            {categories.map((category) => {
              const icons = {
                trending: <Flame className="h-5 w-5 mr-3" />,
                music: <Music className="h-5 w-5 mr-3" />,
                gaming: <Gamepad2 className="h-5 w-5 mr-3" />,
                sports: <BarChart className="h-5 w-5 mr-3" />,
                education: <Lightbulb className="h-5 w-5 mr-3" />,
                comedy: <Film className="h-5 w-5 mr-3" />,
                science: <Lightbulb className="h-5 w-5 mr-3" />,
                travel: <TrendingUp className="h-5 w-5 mr-3" />,
              };

              const icon = icons[category.id as keyof typeof icons] || <Film className="h-5 w-5 mr-3" />;

              return (
                <li key={category.id}>
                  <Link
                    to={`/category/${category.id}`}
                    className="flex items-center px-4 py-2 text-gray-300 rounded hover:bg-gray-800 transition-colors"
                  >
                    {icon}
                    <span>{category.name}</span>
                    <span className="ml-auto text-xs text-gray-500">{category.count}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="text-xs text-gray-500 px-4 py-2">
          © 2025 VideoHub
        </div>
      </div>
    </div>
  );
};

export default Sidebar;