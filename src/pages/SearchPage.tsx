import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Filter } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { videos } from '../data/videos';
import Button from '../components/ui/Button';

const SearchPage: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';
  
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('any');
  const [selectedSort, setSelectedSort] = useState('relevance');
  
  useEffect(() => {
    if (!query) {
      setFilteredVideos(videos);
      return;
    }
    
    // Filter videos based on search query
    const filtered = videos.filter(video => 
      video.title.toLowerCase().includes(query.toLowerCase()) ||
      video.uploader.toLowerCase().includes(query.toLowerCase()) ||
      video.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    
    setFilteredVideos(filtered);
  }, [query]);
  
  const formatViews = (views: number): string => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    } else {
      return views.toString();
    }
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className={`md:w-64 bg-gray-800 rounded-lg p-4 ${filterOpen ? 'block' : 'hidden md:block'}`}>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Filter Results</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">UPLOAD DATE</h4>
                  <ul className="space-y-2">
                    <li>
                      <label className="flex items-center text-gray-300 cursor-pointer hover:text-white">
                        <input type="radio" name="upload-date" className="mr-2 accent-orange-500" defaultChecked />
                        <span>Any time</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center text-gray-300 cursor-pointer hover:text-white">
                        <input type="radio" name="upload-date" className="mr-2 accent-orange-500" />
                        <span>Today</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center text-gray-300 cursor-pointer hover:text-white">
                        <input type="radio" name="upload-date" className="mr-2 accent-orange-500" />
                        <span>This week</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center text-gray-300 cursor-pointer hover:text-white">
                        <input type="radio" name="upload-date" className="mr-2 accent-orange-500" />
                        <span>This month</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center text-gray-300 cursor-pointer hover:text-white">
                        <input type="radio" name="upload-date" className="mr-2 accent-orange-500" />
                        <span>This year</span>
                      </label>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">TYPE</h4>
                  <ul className="space-y-2">
                    <li>
                      <label className="flex items-center text-gray-300 cursor-pointer hover:text-white">
                        <input type="checkbox" className="mr-2 accent-orange-500" defaultChecked />
                        <span>Video</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center text-gray-300 cursor-pointer hover:text-white">
                        <input type="checkbox" className="mr-2 accent-orange-500" />
                        <span>Channel</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center text-gray-300 cursor-pointer hover:text-white">
                        <input type="checkbox" className="mr-2 accent-orange-500" />
                        <span>Playlist</span>
                      </label>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">DURATION</h4>
                  <ul className="space-y-2">
                    <li>
                      <label className="flex items-center text-gray-300 cursor-pointer hover:text-white">
                        <input 
                          type="radio" 
                          name="duration" 
                          value="any" 
                          checked={selectedDuration === 'any'}
                          onChange={() => setSelectedDuration('any')}
                          className="mr-2 accent-orange-500" 
                        />
                        <span>Any duration</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center text-gray-300 cursor-pointer hover:text-white">
                        <input 
                          type="radio" 
                          name="duration" 
                          value="short" 
                          checked={selectedDuration === 'short'}
                          onChange={() => setSelectedDuration('short')}
                          className="mr-2 accent-orange-500" 
                        />
                        <span>Under 4 minutes</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center text-gray-300 cursor-pointer hover:text-white">
                        <input 
                          type="radio" 
                          name="duration" 
                          value="medium" 
                          checked={selectedDuration === 'medium'}
                          onChange={() => setSelectedDuration('medium')}
                          className="mr-2 accent-orange-500" 
                        />
                        <span>4-20 minutes</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center text-gray-300 cursor-pointer hover:text-white">
                        <input 
                          type="radio" 
                          name="duration" 
                          value="long" 
                          checked={selectedDuration === 'long'}
                          onChange={() => setSelectedDuration('long')}
                          className="mr-2 accent-orange-500" 
                        />
                        <span>Over 20 minutes</span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Search Results */}
          <div className="flex-1">
            {/* Filter Button - Mobile Only */}
            <div className="mb-4 md:hidden">
              <Button 
                variant="outline" 
                onClick={() => setFilterOpen(!filterOpen)}
                className="w-full"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filter Results
              </Button>
            </div>
            
            {/* Results Count and Sort Options */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
              <div className="text-gray-300 mb-4 sm:mb-0">
                About {filteredVideos.length} results for "<span className="font-semibold text-white">{query}</span>"
              </div>
              
              <div className="flex items-center">
                <span className="text-gray-400 mr-2">Sort by:</span>
                <select 
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="bg-gray-800 border border-gray-700 text-white rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-orange-500"
                >
                  <option value="relevance">Relevance</option>
                  <option value="date">Upload date</option>
                  <option value="views">View count</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>
            
            {/* Search Results List */}
            <div className="space-y-6">
              {filteredVideos.length > 0 ? (
                filteredVideos.map(video => (
                  <div key={video.id} className="flex flex-col sm:flex-row bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
                    <Link to={`/video/${video.id}`} className="sm:w-64 md:w-80 flex-shrink-0">
                      <div className="relative">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title} 
                          className="w-full h-48 sm:h-44 object-cover"
                        />
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                    </Link>
                    <div className="p-4 flex-1">
                      <Link to={`/video/${video.id}`} className="block">
                        <h3 className="font-medium text-lg text-white hover:text-orange-500 transition-colors">
                          {video.title}
                        </h3>
                      </Link>
                      <div className="text-xs text-gray-500 mt-1">
                        {formatViews(video.views)} views • {video.uploadDate}
                      </div>
                      <Link to={`/channel/${video.uploader}`} className="flex items-center mt-2">
                        <img 
                          src={video.uploaderAvatar} 
                          alt={video.uploader} 
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <span className="text-gray-400 text-sm hover:text-white transition-colors">
                          {video.uploader}
                        </span>
                      </Link>
                      <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor augue eget nisi tincidunt, ac venenatis enim tincidunt.
                      </p>
                      <div className="flex mt-2 flex-wrap">
                        {video.tags.map((tag, index) => (
                          <Link 
                            key={index} 
                            to={`/tag/${tag}`} 
                            className="text-blue-400 text-xs hover:text-blue-300 mr-2"
                          >
                            #{tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10">
                  <h3 className="text-xl font-medium">No results found</h3>
                  <p className="text-gray-400 mt-2">Try different keywords or remove search filters</p>
                </div>
              )}
            </div>
            
            {/* Pagination */}
            {filteredVideos.length > 0 && (
              <div className="mt-8 flex justify-center">
                <div className="flex space-x-2">
                  <Button variant="outline" disabled>Previous</Button>
                  <Button>1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">...</Button>
                  <Button variant="outline">10</Button>
                  <Button variant="outline">Next</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;