import React from 'react';
import Layout from '../components/layout/Layout';
import VideoGrid from '../components/videos/VideoGrid';
import { videos, categories, generateMockVideos } from '../data/videos';

const HomePage: React.FC = () => {
  // For demonstration, we'll show different videos for different sections
  const trendingVideos = videos.slice(0, 8);
  const recommendedVideos = generateMockVideos(8);
  const musicVideos = videos.filter(video => video.category === 'music');
  const gamingVideos = videos.filter(video => video.category === 'gaming');

  return (
    <Layout>
      <div className="py-4">
        {/* Featured carousel could go here */}
        
        <VideoGrid videos={trendingVideos} title="Trending" />
        <VideoGrid videos={recommendedVideos} title="Recommended for you" />
        <VideoGrid videos={musicVideos} title="Music" />
        <VideoGrid videos={gamingVideos} title="Gaming" />
      </div>
    </Layout>
  );
};

export default HomePage;