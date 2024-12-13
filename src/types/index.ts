export interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
  avatar?: string;
  bio?: string;
  followers: string[];
  following: string[];
}

export interface Post {
  id: string;
  userId: string;
  content: string;
  image?: string;
  likes: string[];
  comments: Comment[];
  createdAt: Date;
}

export interface Comment {
  id: string;
  userId: string;
  content: string;
  createdAt: Date;
}

export interface Reel {
  id: string;
  user: {
    id: string;
    username: string;
    avatar?: string;
  };
  videoUrl: string;
  caption: string;
  likes: number;
  comments: number;
}

export interface Activity {
  id: string;
  type: 'like' | 'comment' | 'friend';
  user: {
    username: string;
  };
  message: string;
  timestamp: Date;
}