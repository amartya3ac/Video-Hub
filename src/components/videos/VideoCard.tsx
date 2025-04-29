import React from 'react';
import { Link } from 'react-router-dom';
import { Video } from '../../types';

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
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
    <div className="group">
      <Link to={`/video/${video.id}`} className="block">
        <div className="aspect-video rounded-lg overflow-hidden relative mb-2 bg-gray-800">
          <img 
            src={video.thumbnail} 
            alt={video.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
            {video.duration}
          </div>
        </div>
        <div className="flex">
          <Link to={`/channel/${video.uploader}`} className="flex-shrink-0 mr-3">
            <img 
              src={video.uploaderAvatar} 
              alt={video.uploader} 
              className="w-10 h-10 rounded-full"
            />
          </Link>
          <div>
            <h3 className="font-medium text-white line-clamp-2 group-hover:text-orange-500 transition-colors">
              {video.title}
            </h3>
            <Link to={`/channel/${video.uploader}`} className="text-sm text-gray-400 hover:text-white transition-colors">
              {video.uploader}
            </Link>
            <div className="text-xs text-gray-500">
              {formatViews(video.views)} views • {video.uploadDate}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;