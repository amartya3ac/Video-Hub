import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ThumbsUp, ThumbsDown, Share2, Flag, MessageSquare } from 'lucide-react';
import Layout from '../components/layout/Layout';
import VideoPlayer from '../components/videos/VideoPlayer';
import VideoGrid from '../components/videos/VideoGrid';
import Button from '../components/ui/Button';
import { videos, generateMockVideos } from '../data/videos';

const VideoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const video = videos.find(v => v.id === id) || videos[0]; // Default to first video if not found
  const relatedVideos = generateMockVideos(12);

  const formatViews = (views: number): string => {
    return new Intl.NumberFormat('en-US').format(views);
  };

  useEffect(() => {
    // Update the page title when video changes
    document.title = `${video.title} - VideoHub`;
    
    // Scroll to top when navigating to a new video
    window.scrollTo(0, 0);
    
    return () => {
      // Reset title when leaving page
      document.title = 'VideoHub';
    };
  }, [video]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Video Player */}
            <VideoPlayer thumbnailUrl={video.thumbnail} title={video.title} />
            
            {/* Video Info */}
            <div className="mt-4">
              <h1 className="text-2xl font-bold text-white">{video.title}</h1>
              
              <div className="flex flex-col sm:flex-row sm:justify-between mt-4">
                <div className="flex items-center mb-4 sm:mb-0">
                  <div className="text-sm text-gray-400">
                    {formatViews(video.views)} views • {video.uploadDate}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <button className="flex items-center text-gray-300 hover:text-white">
                    <ThumbsUp className="h-5 w-5 mr-1" />
                    <span>{(video.likes / 1000).toFixed(1)}K</span>
                  </button>
                  <button className="flex items-center text-gray-300 hover:text-white">
                    <ThumbsDown className="h-5 w-5 mr-1" />
                  </button>
                  <button className="flex items-center text-gray-300 hover:text-white">
                    <Share2 className="h-5 w-5 mr-1" />
                    <span className="hidden sm:inline">Share</span>
                  </button>
                  <button className="flex items-center text-gray-300 hover:text-white">
                    <Flag className="h-5 w-5 mr-1" />
                    <span className="hidden sm:inline">Report</span>
                  </button>
                </div>
              </div>
              
              {/* Channel Info */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 p-4 bg-gray-800 rounded-lg">
                <div className="flex items-center mb-4 sm:mb-0">
                  <Link to={`/channel/${video.uploader}`}>
                    <img 
                      src={video.uploaderAvatar} 
                      alt={video.uploader} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                  </Link>
                  <div>
                    <Link to={`/channel/${video.uploader}`} className="text-white font-medium hover:text-orange-500">
                      {video.uploader}
                    </Link>
                    <div className="text-sm text-gray-400">438K subscribers</div>
                  </div>
                </div>
                <Button>Subscribe</Button>
              </div>
              
              {/* Video Description */}
              <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                <div className="mb-4 flex justify-between items-center">
                  <div className="flex space-x-2">
                    {video.tags.map((tag, index) => (
                      <Link key={index} to={`/tag/${tag}`} className="text-blue-400 text-sm hover:text-blue-300">
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="text-gray-400 text-sm mt-2 hover:text-white">Show more</button>
              </div>
              
              {/* Comments Section */}
              <div className="mt-6">
                <div className="flex items-center mb-4">
                  <h3 className="text-lg font-medium text-white mr-2">Comments</h3>
                  <span className="text-gray-400 text-sm">253</span>
                </div>
                
                <div className="flex mb-6">
                  <img 
                    src="https://i.pravatar.cc/150?img=33" 
                    alt="User" 
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div className="flex-1">
                    <input 
                      type="text" 
                      placeholder="Add a comment..." 
                      className="w-full bg-transparent border-b border-gray-700 text-white pb-2 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>
                
                {/* Sample Comment */}
                <div className="flex mb-6">
                  <img 
                    src="https://i.pravatar.cc/150?img=45" 
                    alt="Commenter" 
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <div className="flex items-center">
                      <span className="font-medium text-white mr-2">John Doe</span>
                      <span className="text-gray-500 text-sm">3 days ago</span>
                    </div>
                    <p className="text-gray-300 mt-1">
                      This is an amazing video! I've learned so much from this. Keep up the great work!
                    </p>
                    <div className="flex items-center mt-2 space-x-4">
                      <button className="flex items-center text-gray-500 hover:text-white text-sm">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>24</span>
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-white text-sm">
                        <ThumbsDown className="h-4 w-4 mr-1" />
                      </button>
                      <button className="text-gray-500 hover:text-white text-sm">Reply</button>
                    </div>
                  </div>
                </div>
                
                {/* Sample Comment */}
                <div className="flex mb-6">
                  <img 
                    src="https://i.pravatar.cc/150?img=23" 
                    alt="Commenter" 
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <div className="flex items-center">
                      <span className="font-medium text-white mr-2">Jane Smith</span>
                      <span className="text-gray-500 text-sm">1 week ago</span>
                    </div>
                    <p className="text-gray-300 mt-1">
                      I've been looking for content like this for a long time. Thank you for sharing your knowledge!
                    </p>
                    <div className="flex items-center mt-2 space-x-4">
                      <button className="flex items-center text-gray-500 hover:text-white text-sm">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>18</span>
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-white text-sm">
                        <ThumbsDown className="h-4 w-4 mr-1" />
                      </button>
                      <button className="text-gray-500 hover:text-white text-sm">Reply</button>
                    </div>
                  </div>
                </div>
                
                <button className="text-orange-500 hover:text-orange-400 font-medium">
                  Show more comments
                </button>
              </div>
            </div>
          </div>
          
          {/* Related Videos */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-medium mb-4">Related Videos</h3>
            <div className="space-y-4">
              {relatedVideos.map((relatedVideo) => (
                <Link key={relatedVideo.id} to={`/video/${relatedVideo.id}`} className="flex group">
                  <div className="w-40 flex-shrink-0 relative">
                    <img 
                      src={relatedVideo.thumbnail} 
                      alt={relatedVideo.title} 
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                      {relatedVideo.duration}
                    </div>
                  </div>
                  <div className="ml-3 flex-1">
                    <h4 className="text-sm text-white line-clamp-2 group-hover:text-orange-500">
                      {relatedVideo.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">
                      {relatedVideo.uploader}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {(relatedVideo.views / 1000).toFixed(1)}K views • {relatedVideo.uploadDate}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VideoPage;