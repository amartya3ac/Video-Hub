import { Video, Category, User } from '../types';

export const categories: Category[] = [
  { id: 'trending', name: 'Trending', count: 1245 },
  { id: 'music', name: 'Music', count: 873 },
  { id: 'gaming', name: 'Gaming', count: 654 },
  { id: 'sports', name: 'Sports', count: 432 },
  { id: 'education', name: 'Education', count: 321 },
  { id: 'comedy', name: 'Comedy', count: 287 },
  { id: 'science', name: 'Science & Tech', count: 245 },
  { id: 'travel', name: 'Travel', count: 198 },
];

export const users: User[] = [
  { id: 'user1', username: 'VideoCreator', avatar: 'https://i.pravatar.cc/150?img=1', videos: 42, subscribers: 25600 },
  { id: 'user2', username: 'TechTalks', avatar: 'https://i.pravatar.cc/150?img=2', videos: 87, subscribers: 156000 },
  { id: 'user3', username: 'TravelVibes', avatar: 'https://i.pravatar.cc/150?img=3', videos: 124, subscribers: 478900 },
  { id: 'user4', username: 'GamingPro', avatar: 'https://i.pravatar.cc/150?img=4', videos: 231, subscribers: 1245000 },
];

export const videos: Video[] = [
  {
    id: 'v1',
    title: 'Amazing Sunset at California Beach',
    thumbnail: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '12:34',
    views: 1245678,
    uploadDate: '2 days ago',
    uploader: 'TravelVibes',
    uploaderAvatar: 'https://i.pravatar.cc/150?img=3',
    likes: 45678,
    category: 'travel',
    tags: ['beach', 'sunset', 'california']
  },
  {
    id: 'v2',
    title: 'Modern JavaScript: ES6 Features Explained',
    thumbnail: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '32:21',
    views: 987432,
    uploadDate: '1 week ago',
    uploader: 'TechTalks',
    uploaderAvatar: 'https://i.pravatar.cc/150?img=2',
    likes: 67890,
    category: 'education',
    tags: ['javascript', 'programming', 'coding']
  },
  {
    id: 'v3',
    title: 'Ultimate Gaming Setup Tour 2025',
    thumbnail: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '18:45',
    views: 2345678,
    uploadDate: '3 days ago',
    uploader: 'GamingPro',
    uploaderAvatar: 'https://i.pravatar.cc/150?img=4',
    likes: 123456,
    category: 'gaming',
    tags: ['gaming', 'setup', 'tech']
  },
  {
    id: 'v4',
    title: 'How to Make Perfect Homemade Pizza',
    thumbnail: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '15:23',
    views: 876543,
    uploadDate: '5 days ago',
    uploader: 'VideoCreator',
    uploaderAvatar: 'https://i.pravatar.cc/150?img=1',
    likes: 34567,
    category: 'food',
    tags: ['cooking', 'pizza', 'food']
  },
  {
    id: 'v5',
    title: 'Top 10 Exercise Routines for Home Workouts',
    thumbnail: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '22:17',
    views: 1345678,
    uploadDate: '1 day ago',
    uploader: 'FitLife',
    uploaderAvatar: 'https://i.pravatar.cc/150?img=5',
    likes: 89012,
    category: 'fitness',
    tags: ['fitness', 'workout', 'health']
  },
  {
    id: 'v6',
    title: 'Ancient History: Lost Civilizations',
    thumbnail: 'https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '45:32',
    views: 2156789,
    uploadDate: '2 weeks ago',
    uploader: 'HistoryChannel',
    uploaderAvatar: 'https://i.pravatar.cc/150?img=6',
    likes: 156789,
    category: 'education',
    tags: ['history', 'civilization', 'education']
  },
  {
    id: 'v7',
    title: 'The Art of Wildlife Photography',
    thumbnail: 'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '28:19',
    views: 876543,
    uploadDate: '4 days ago',
    uploader: 'NatureShots',
    uploaderAvatar: 'https://i.pravatar.cc/150?img=7',
    likes: 45678,
    category: 'photography',
    tags: ['photography', 'wildlife', 'nature']
  },
  {
    id: 'v8',
    title: 'Classic Car Restoration: 1967 Mustang',
    thumbnail: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '38:45',
    views: 987654,
    uploadDate: '6 days ago',
    uploader: 'ClassicCars',
    uploaderAvatar: 'https://i.pravatar.cc/150?img=8',
    likes: 67890,
    category: 'automotive',
    tags: ['cars', 'restoration', 'automotive']
  },
  {
    id: 'v9',
    title: 'Space Exploration: Journey to Mars',
    thumbnail: 'https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '42:18',
    views: 3456789,
    uploadDate: '1 week ago',
    uploader: 'SpaceX',
    uploaderAvatar: 'https://i.pravatar.cc/150?img=9',
    likes: 234567,
    category: 'science',
    tags: ['space', 'mars', 'exploration']
  },
  {
    id: 'v10',
    title: 'The Best Comedy Shows of All Time',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '15:56',
    views: 1234567,
    uploadDate: '3 days ago',
    uploader: 'ComedyClub',
    uploaderAvatar: 'https://i.pravatar.cc/150?img=10',
    likes: 89012,
    category: 'comedy',
    tags: ['comedy', 'shows', 'entertainment']
  },
  {
    id: 'v11',
    title: 'How to Start Investing: Beginner Guide',
    thumbnail: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '27:34',
    views: 2345678,
    uploadDate: '5 days ago',
    uploader: 'FinancePro',
    uploaderAvatar: 'https://i.pravatar.cc/150?img=11',
    likes: 123456,
    category: 'finance',
    tags: ['investing', 'finance', 'money']
  },
  {
    id: 'v12',
    title: 'World Cup Highlights: Best Goals',
    thumbnail: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '19:45',
    views: 5678901,
    uploadDate: '2 days ago',
    uploader: 'SportsCenter',
    uploaderAvatar: 'https://i.pravatar.cc/150?img=12',
    likes: 345678,
    category: 'sports',
    tags: ['football', 'soccer', 'sports']
  },
];

export const generateMockVideos = (count: number): Video[] => {
  const mockVideos: Video[] = [];
  
  for (let i = 0; i < count; i++) {
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    mockVideos.push({
      ...randomVideo,
      id: `mock-${i}`,
      views: Math.floor(Math.random() * 10000000),
      likes: Math.floor(Math.random() * 1000000),
      uploadDate: `${Math.floor(Math.random() * 30) + 1} days ago`,
    });
  }
  
  return mockVideos;
};