import React from 'react';
import VideoCard from './VideoCard';
import { Video } from '../../types';

interface VideoGridProps {
  videos: Video[];
  title?: string;
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos, title }) => {
  return (
    <div className="container mx-auto px-4 py-6">
      {title && (
        <h2 className="text-xl font-bold mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;