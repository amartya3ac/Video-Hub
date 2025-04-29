export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: number;
  uploadDate: string;
  uploader: string;
  uploaderAvatar: string;
  likes: number;
  category: string;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  count: number;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
  videos: number;
  subscribers: number;
}