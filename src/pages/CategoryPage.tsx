import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import VideoGrid from '../components/videos/VideoGrid';
import { videos, categories } from '../data/videos';

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const category = categories.find(c => c.id === id);
  const filteredVideos = id ? videos.filter(v => v.category === id) : videos;
  
  // If we don't have enough videos in the category, show all videos
  const displayVideos = filteredVideos.length >= 4 ? filteredVideos : videos;

  return (
    <Layout>
      <div className="py-6 px-4">
        <div className="container mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white">{category?.name || 'Videos'}</h1>
            <p className="text-gray-400">{category?.count || displayVideos.length} videos</p>
          </div>

          <VideoGrid videos={displayVideos} />
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;